"use server";

import { game } from "@/generated/prisma";
import prisma from "@/lib/prisma";

interface createGameProps {
  name: string;
  platform: string;
}

const createGame = async (props: createGameProps): Promise<game> => {
  return await prisma.game.create({
    data: {
      ...props,
    },
  });
};

export default createGame;
