import { getCurrentUserId } from "@/app/actions";
import prisma from "./prisma";
import { UserSettings } from "@/generated/prisma";
import { ReadonlyHeaders } from "next/dist/server/web/spec-extension/adapters/headers";
import { headers } from "next/headers";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { User } from "better-auth";

export const getCurrentUserSettings =
  async (): Promise<UserSettings | null> => {
    const currentUserId = await getCurrentUserId();
    return prisma.userSettings.findFirst({
      where: {
        userId: currentUserId,
      },
    });
  };

export const ensureLogin = async () => {
  "use server";
  const sessionResponse = await auth.api.getSession({
    headers: await headers(),
  });

  const user = sessionResponse?.user || null;
  if (!user)
    auth.api
      .signOut({
        headers: await headers(),
      })
      .then(redirect("/sign-in"));
};

export const getCurrentUser = async (): Promise<User> => {
  "use server";
  const sessionResponse = await auth.api.getSession({
    headers: await headers(),
  });
  const user = sessionResponse?.user || null;
  if (!user) throw new Error("User not Found");
  return user;
};
