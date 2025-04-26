"use server";

import { auth } from "@/auth";
import { Game } from "@/generated/prisma";
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
