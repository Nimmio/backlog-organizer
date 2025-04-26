import { getCurrentUserId } from "@/app/actions";
import prisma from "./prisma";
import { UserSettings } from "@/generated/prisma";

export const getCurrentUserSettings =
  async (): Promise<UserSettings | null> => {
    const currentUserId = await getCurrentUserId();
    return prisma.userSettings.findFirst({
      where: {
        userId: currentUserId,
      },
    });
  };
