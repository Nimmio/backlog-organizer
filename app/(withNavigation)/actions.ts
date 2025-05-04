"use server";

import prisma from "@/lib/prisma";
import { TStatusKeyWithAll } from "@/lib/status";
import { getWhereString } from "@/lib/game";
import { Status } from "@/generated/prisma";
import {
  downloadImage,
  queryBuilder,
  RequestUrls,
  saveImage,
} from "@/lib/igdb/utils";
import { getAuthentication } from "@/lib/igdb/auth";
import { ExternalPlatform, platformFields } from "@/types/igdb/platform";
import {
  ExternalGame,
  GameField,
  SearchGame,
  SearchGameDetails,
} from "@/types/igdb/game";
import { fromUnixTime } from "date-fns";
import { getCurrentUserId } from "@/lib/user";
import { ExternalGenre, GenreField } from "@/types/igdb/genre";
import { CoverField } from "@/types/igdb/cover";

interface getGamesForDashboardParams {
  search: string;
  status: TStatusKeyWithAll;
  platform: string;
}

export const getGamesForDashboard = async (
  params: getGamesForDashboardParams
): Promise<typeof games> => {
  const { search, status, platform } = params;
  const currentUserId = await getCurrentUserId();

  const games = await prisma.gameStatus.findMany({
    include: {
      igdbGame: true,
      platform: true,
    },

    where: getWhereString({ userId: currentUserId, status, search, platform }),
  });
  return games;
};

interface getSearchGameDetailsParams {
  id: number;
}

export const getSearchGameDetails = async (
  params: getSearchGameDetailsParams
): Promise<SearchGameDetails> => {
  const { id } = params;

  const { access_token } = await getAuthentication();
  const filter = [`id=${id}`];
  const game = (
    await queryBuilder({
      access_token: access_token || undefined,
      requestUrl: RequestUrls.game,
      fields: [
        "name",
        "first_release_date",
        "cover",
        "summary",
        "genres",
        "platforms",
      ] as GameField[],
      where: filter,
      limit: 1,
    })
  )[0];
  const gameWithNested = {
    ...game,
    cover: game.cover ? await getCoverUrl(game.cover) : undefined,
    genres: (await getGenresForCreate(game.genres)).map((genre) => genre.name),
    platforms: (await getPlatformsForCreate(game.platforms)).map(
      (platform) => platform.name
    ),
  };

  return gameWithNested;
};

interface createGameStatusParams {
  id: number;
  platform: string;
  status: Status;
}

const getPlatformForCreate = async (platformname: string) => {
  const { access_token } = await getAuthentication();

  return (
    await queryBuilder({
      access_token: access_token || undefined,
      requestUrl: RequestUrls.platform,
      where: `name = "${platformname}"`,
      fields: [
        "checksum",
        "created_at",
        "name",
        "updated_at",
      ] as platformFields[],
      limit: 1,
    })
  )[0] as ExternalPlatform;
};

const getPlatformsForCreate = async (ids: number[]) => {
  const { access_token } = await getAuthentication();
  return (await queryBuilder({
    access_token: access_token || undefined,
    requestUrl: RequestUrls.platform,
    where: `id = (${ids.toString()})`,
    fields: [
      "checksum",
      "created_at",
      "name",
      "updated_at",
    ] as platformFields[],
    limit: ids.length,
  })) as ExternalPlatform[];
};

const getGenresForCreate = async (ids: number[]) => {
  const { access_token } = await getAuthentication();
  return (await queryBuilder({
    access_token: access_token || undefined,
    requestUrl: RequestUrls.genre,
    where: `id = (${ids.toString()})`,
    fields: ["checksum", "created_at", "name", "updated_at"] as GenreField[],
    limit: ids.length,
  })) as ExternalGenre[];
};

const getPlatformsConnectOrCreate = (platforms: ExternalPlatform[]) => {
  return {
    connectOrCreate: platforms.map((platform) => ({
      where: {
        id: platform.id,
      },
      create: {
        id: platform.id,
        checksum: platform.checksum,
        created_at: fromUnixTime(platform.created_at),
        name: platform.name,
        updated_at: fromUnixTime(platform.updated_at),
      },
    })),
  };
};

const getGenresConnectOrCreate = (genres: ExternalGenre[]) => {
  return {
    connectOrCreate: genres.map((genre) => ({
      where: {
        id: genre.id,
      },
      create: {
        id: genre.id,
        checksum: genre.checksum,
        created_at: fromUnixTime(genre.created_at),
        name: genre.name,
        updated_at: fromUnixTime(genre.updated_at),
      },
    })),
  };
};

const getGameForCreate = async (id: number) => {
  const { access_token } = await getAuthentication();

  return (
    await queryBuilder({
      access_token: access_token || undefined,
      requestUrl: RequestUrls.game,
      where: `id = ${id}`,
      fields: [
        "checksum",
        "cover",
        "created_at",
        "first_release_date",
        "genres",
        "name",
        "platforms",
        "summary",
        "updated_at",
      ] as GameField[],
      limit: 1,
    })
  )[0] as ExternalGame;
};

const getCoverUrl = async (id: number): Promise<string> => {
  const { access_token } = await getAuthentication();

  return (
    (
      await queryBuilder({
        access_token: access_token || undefined,
        requestUrl: RequestUrls.cover,
        where: `id = ${id}`,
        fields: ["url"] as CoverField[],
        limit: 1,
      })
    )[0] as { url: string }
  ).url;
};

export const createGameStatus = async (params: createGameStatusParams) => {
  const { id, platform, status } = params;
  const createPlatform =
    platform !== "none" ? await getPlatformForCreate(platform) : undefined;
  const createGame = await getGameForCreate(id);

  const platformsConnectOrCreate =
    createGame.platforms && createGame.platforms.length > 0
      ? getPlatformsConnectOrCreate(
          await getPlatformsForCreate(createGame.platforms)
        )
      : undefined;

  const genresConnectOrCreate =
    createGame.genres && createGame.genres.length > 0
      ? getGenresConnectOrCreate(await getGenresForCreate(createGame.genres))
      : undefined;

  const userId = await getCurrentUserId();

  const createdGameStatus = await prisma.gameStatus.create({
    include: {
      igdbGame: true,
      platform: true,
    },
    data: {
      status: status,
      user: {
        connect: { id: userId },
      },
      platform: createPlatform
        ? {
            connectOrCreate: {
              where: {
                id: createPlatform.id,
              },
              create: {
                id: createPlatform.id,
                created_at: fromUnixTime(createGame.created_at),
                updated_at: fromUnixTime(createGame.updated_at),
                checksum: createPlatform.checksum,
                name: createPlatform.name,
              },
            },
          }
        : undefined,
      igdbGame: {
        connectOrCreate: {
          where: {
            id: createGame.id,
          },
          create: {
            id: createGame.id,
            checksum: createGame.checksum,
            first_release_date: createGame.first_release_date,
            name: createGame.name,
            summary: createGame.summary,
            created_at: fromUnixTime(createGame.created_at),
            updated_at: fromUnixTime(createGame.updated_at),
            platforms: platformsConnectOrCreate,
            genres: genresConnectOrCreate,
          },
        },
      },
    },
  });

  const igdbGame = await prisma.game.findFirst({
    where: {
      id: createdGameStatus.igdbGameId,
    },
  });

  if (createGame.cover && !igdbGame?.hasCover) {
    const getUrl = await getCoverUrl(createGame.cover);
    const blob = await downloadImage("https:" + getUrl);
    await saveImage(blob, createGame.id.toString() + ".jpg");
    await prisma.game.update({
      where: {
        id: createdGameStatus.igdbGameId,
      },
      data: {
        hasCover: true,
      },
    });
  }

  return createdGameStatus;
};

interface searchGameParams {
  search: string;
  filterEditions?: boolean;
}

export const searchGame = async (
  params: searchGameParams
): Promise<SearchGame[]> => {
  const { search, filterEditions = false } = params;
  const { access_token } = await getAuthentication();

  const filter = filterEditions ? ["version_parent = null"] : undefined;
  const games = (await queryBuilder({
    access_token: access_token || undefined,
    requestUrl: RequestUrls.game,
    search: search,
    fields: [
      "name",
      "first_release_date",
      "cover",
      "version_parent",
    ] as GameField[],
    where: filter,
    limit: 12,
  })) as SearchGame[];

  const covers = await getCoverForIds(
    games.map((game) => (game.cover as number) || 0)
  );

  return games.map((game) => ({
    ...game,
    cover: covers.find((cover) => cover.id === game.cover)?.url || undefined,
  }));
};

const getCoverForIds = async (ids: number[]) => {
  const { access_token } = await getAuthentication();

  return (await queryBuilder({
    access_token: access_token || undefined,
    requestUrl: RequestUrls.cover,
    where: `id = (${ids.toString()})`,
    fields: ["url"] as CoverField[],
    limit: ids.length,
  })) as Array<{ url: string; id: number }>;
};
