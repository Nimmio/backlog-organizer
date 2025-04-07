import GameForm from "@/components/gameForm/game-form";
import { Card } from "@/components/ui/card";

import prisma from "@/lib/prisma";

const View = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const game = await prisma.game.findFirst({
    where: { id: +id },
  });

  return (
    <main>
      <Card className="p-4">
        <GameForm name={game?.name} platform={game?.platform} edit id={+id} />
      </Card>
    </main>
  );
};

export default View;
