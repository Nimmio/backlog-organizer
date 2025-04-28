"use server";

import { auth } from "@/auth";
import { Game } from "@/generated/prisma";
import { getAuthentication } from "@/lib/igdb/auth";
import { getGenres } from "@/lib/igdb/genre";
import { queryBuilder, RequestUrls } from "@/lib/igdb/utils";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";

interface createGameProps {
  name: string;
  platform: string;
}

export const createGame = async (props: createGameProps): Promise<Game> => {
  const userId = await getCurrentUserId();
  return await prisma.game.create({
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
  return await prisma.game.update({
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
  const game = await prisma.game.delete({
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
  fields: GameField[];
  filterEditions?: boolean;
}

export const searchGame = async (params: searchGameParams) => {
  const { search, fields, filterEditions = false } = params;
  const { access_token } = await getAuthentication();

  const filter = filterEditions ? ["version_parent = null"] : undefined;
  const response = await queryBuilder({
    access_token: access_token || undefined,
    requestUrl: RequestUrls.game,
    search: search,
    fields: fields,
    where: filter,
  });

  return response;
};

export const getGameDetails = async (id: number) => {
  const { access_token } = await getAuthentication();

  const fields: GameField[] = ["genres", "platforms"];

  const games = await queryBuilder({
    access_token: access_token || undefined,
    requestUrl: RequestUrls.game,
    fields: fields,
    where: `id =${id}`,
  });
  const data = games[0];

  const genres = await getGenresForIds(data.genres);
  return {
    genres: genres.map((genre) => genre.name),
  };
};

export const getGenresForIds = async (ids: number[]) => {
  return await getGenres(ids);
};
