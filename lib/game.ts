"use server";

import { GameStatus, Platform, Status } from "@/generated/prisma";
import prisma from "./prisma";
import { getStatusKeyForTranslation, TStatusKeyWithAll } from "./status";
import { getCurrentUserId } from "./user";
import { deleteFileFromBucket } from "./file-managment";

interface getGamesForDashboardParams {
  search?: string;
  status?: TStatusKeyWithAll;
  platform?: string;
  userId: string;
}

export const getWhereString = async (params: getGamesForDashboardParams) => {
  const { userId, search, status, platform } = params;
  let where = {
    userId: userId,
  };
  if (search)
    where = Object.assign(where, {
      igdbGame: {
        name: { contains: search, mode: "insensitive" },
      },
    });
  if (status && status !== "All")
    where = Object.assign(where, {
      status: getStatusKeyForTranslation(status),
    });
  if (platform && platform !== "All")
    where = Object.assign(where, {
      platform,
    });

  return where;
};

interface deleteGameParams {
  id: number;
}

export const deleteGameStatus = async (
  params: deleteGameParams
): Promise<GameStatus> => {
  const { id } = params;

  const currentUserId = await getCurrentUserId();
  const deletedGameStatus = await prisma.gameStatus.delete({
    where: {
      userId: currentUserId,
      id,
    },
  });
  await deleteGameIfNoConnection({ id: deletedGameStatus.igdbGameId });
  return deletedGameStatus;
};

interface deleteGameParams {
  id: number;
}

const deleteGame = async (params: deleteGameParams) => {
  const { id } = params;

  const deletedGame = await prisma.game.delete({
    where: { id },
    include: { cover: true },
  });
  if (deletedGame.cover) {
    await deleteFileFromBucket({
      bucketName: deletedGame.cover.bucket,
      fileName: deletedGame.cover.fileName,
    });
  }
};

interface deleteGameIfNoConnection {
  id: number;
}

const deleteGameIfNoConnection = async (params: deleteGameIfNoConnection) => {
  const { id } = params;
  if (!(await gameHasConnectedStatus({ id }))) {
    await deleteGame({ id });
  }
};

interface gameHasConnectedStatus {
  id: number;
}

const gameHasConnectedStatus = async (
  params: gameHasConnectedStatus
): Promise<boolean> => {
  const { id } = params;

  return (
    (
      await prisma.game.findFirstOrThrow({
        where: { id },
        include: { gameStatus: true },
      })
    ).gameStatus.length > 0
  );
};

interface changeStatusParams {
  id: number;
  status: Status;
}

export const changeStatus = async (
  params: changeStatusParams
): Promise<GameStatus> => {
  const { id, status } = params;

  return await prisma.gameStatus.update({
    where: { id },
    data: { status },
  });
};

interface changePlatformParams {
  id: number;
  platform: Platform;
}

export const changePlatform = async (
  params: changePlatformParams
): Promise<GameStatus> => {
  const { id, platform } = params;

  return await prisma.gameStatus.update({
    where: { id },
    data: { platform: { connect: platform } },
  });
};
