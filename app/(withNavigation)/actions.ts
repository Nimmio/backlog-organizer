"use server";

import prisma from "@/lib/prisma";
import { getCurrentUserId } from "../actions";
import { TStatusKeyWithAll } from "@/lib/status";
import { getWhereString } from "@/lib/game";

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
  console.log(
    getWhereString({ userId: currentUserId, status, search, platform })
  );
  const games = await prisma.gameStatus.findMany({
    include: {
      igdbGame: true,
    },

    where: getWhereString({ userId: currentUserId, status, search, platform }),
  });
  return games;
};
