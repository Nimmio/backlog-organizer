"use server";

import prisma from "@/lib/prisma";
import { getCurrentUserId } from "../actions";
import { TypeOf } from "zod";

export const getGamesForDashboard = async (): Promise<typeof games> => {
  const currentUserId = await getCurrentUserId();
  const games = await prisma.gameStatus.findMany({
    include: {
      igdbGame: true,
    },
    where: {
      userId: currentUserId || "",
    },
  });
  return games;
};
