"use server";

import { auth } from "@/auth";
import { Game } from "@/generated/prisma";
import { getAuthentication } from "@/lib/igdb/auth";
import { getGenres } from "@/lib/igdb/genre";
import { getIGDBCachedOrExtern } from "@/lib/igdb/meta";
import { queryBuilder, RequestUrls } from "@/lib/igdb/utils";
import prisma from "@/lib/prisma";
import { GameField } from "@/types/igdb/game";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { platform } from "os";

interface createGameProps {
  name: string[] | number[];
  platform: string[] | number[];
}

export const createGame = async (props: createGameProps): Promise<Game> => {
  const userId = await getCurrentUserId();
  return await prisma.gameUser.create({
    data: {
      ...props,
      userId,
    },
  });
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
