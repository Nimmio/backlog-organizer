"use server";

import { game } from "@/generated/prisma";
import prisma from "@/lib/prisma";

interface createGameProps {
  name: string;
  platform: string;
}

export const createGame = async (props: createGameProps): Promise<game> => {
  return await prisma.game.create({
    data: {
      ...props,
    },
  });
};

interface editGameProps extends createGameProps {
  id: number;
}

export const editgame = async (props: editGameProps): Promise<game> => {
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
