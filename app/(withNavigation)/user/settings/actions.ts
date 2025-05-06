"use server";

import { Theme, UserSettings } from "@/generated/prisma";
import prisma from "@/lib/prisma";

interface upsertSettingsParams {
  settings: Omit<UserSettings, "id" | "userId">;
  userId: string;
}

export const upsertSettings = async (
  params: upsertSettingsParams
): Promise<UserSettings> => {
  const { settings, userId } = params;

  return await prisma.userSettings.upsert({
    create: {
      ...settings,
      userId,
    },
    update: {
      ...settings,
    },
    where: {
      userId: userId,
    },
  });
};

export const getUserTheme = async (id: string): Promise<Theme | undefined> => {
  return (
    await prisma.userSettings.findFirst({
      where: {
        userId: id,
      },
      select: {
        theme: true,
      },
    })
  )?.theme;
};

export const cleanDB = async () => {
  await prisma.gameStatus.deleteMany();
  await prisma.game.deleteMany();
  await prisma.file.deleteMany();
  await prisma.genre.deleteMany();
  await prisma.platform.deleteMany();
};
