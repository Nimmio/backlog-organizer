"use server";

import { auth } from "@/auth";
import { Cover, Game } from "@/generated/prisma";
import { getAuthentication } from "@/lib/igdb/auth";
import { getGenres } from "@/lib/igdb/genre";
import { getIGDBCachedOrExtern } from "@/lib/igdb/meta";
import {
  downloadImage,
  queryBuilder,
  RequestUrls,
  saveImage,
} from "@/lib/igdb/utils";
import prisma from "@/lib/prisma";
import { GameField } from "@/types/igdb/game";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { platform } from "os";

interface createGameProps {
  igdbId: number;
}

export const createGame = async (props: createGameProps): Promise<Game> => {
  const { igdbId } = props;
  const userId = await getCurrentUserId();
  return await prisma.gameUser.create({});
};

interface editGameProps extends createGameProps {
  id: number;
}

export const editGame = async (props: editGameProps): Promise<Game> => {
  const { id } = props;
  return await prisma.gameUser.update({
    data: {
      ...props,
    },
    where: {
      id,
    },
  });
};

interface deleteGameProps {
  id: number;
}

export const deleteGame = async (props: deleteGameProps): Promise<Game> => {
  const { id } = props;
  const game = await prisma.gameUser.delete({
    where: {
      id,
    },
  });

  revalidatePath("/");
  return game;
};

export const getCurrentUserId = async (): Promise<string> => {
  const sessionResponse = await auth.api.getSession({
    headers: await headers(),
  });
  return sessionResponse?.user.id as string;
};

interface searchGameParams {
  search: string;
  filterEditions?: boolean;
}

export const searchGame = async (params: searchGameParams) => {
  const { search, filterEditions = false } = params;
  const { access_token } = await getAuthentication();

  const filter = filterEditions ? ["version_parent = null"] : undefined;
  return await queryBuilder({
    access_token: access_token || undefined,
    requestUrl: RequestUrls.game,
    search: search,
    fields: ["name", "first_release_date"] as GameField[],
    where: filter,
  });
};

export const getGameDetails = async (id: number) => {
  let game = (await getIGDBCachedOrExtern({ ids: [id], type: "game" }))[0];
  game = {
    ...game,
    platforms: (await getPlatformsForIdsAsStrings(game.platforms)) as string[],
    genres: (await getGenresForIdsAsStrings(game.genres)) as string[],
    cover: await getCoverForId(game.cover),
  };
  return game;
};

export const getGenresForIdsAsStrings = async (
  ids: number[]
): Promise<string[]> => {
  const genreObjects = await getIGDBCachedOrExtern({ ids, type: "genre" });
  return genreObjects.map((genreObject) => genreObject.name) as string[];
};

export const getPlatformsForIdsAsStrings = async (
  ids: number[]
): Promise<string[]> => {
  const platformObjects = await getIGDBCachedOrExtern({
    ids,
    type: "platform",
  });
  return platformObjects.map(
    (platformObject) => platformObject.name
  ) as string[];
};

export const getCoverForId = async (id: number) => {
  const cover = (await getIGDBCachedOrExtern({
    ids: [id],
    type: "cover",
  })) as Cover[];
  const url = cover[0].url;
  if (cover[0].downloaded_filename) return cover[0].downloaded_filename;
  if (url) {
    const filename = /(([^\/]+$))/.exec(url);
    const blob = await downloadImage("https:" + url);
    const saveImageResponse = await saveImage(blob, filename[0]);
    if (saveImageResponse.success) {
      const updatedCover = await prisma.cover.update({
        where: {
          id: id,
        },
        data: {
          downloaded_filename: filename[0],
        },
      });
      return updatedCover.downloaded_filename;
    }
  }
};
