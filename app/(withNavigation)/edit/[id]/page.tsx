import DeleteGamePopover from "@/components/deleteGamePopover/delete-game-popover";
import EditGameForm from "@/components/editGameForm/edit-game-form";
import { Card } from "@/components/ui/card";

import prisma from "@/lib/prisma";

const Edit = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const game = await prisma.game.findFirst({
    where: { id: +id },
  });

  return (
    <main>
      {game && (
        <Card className="p-4">
          <EditGameForm name={game.name} platform={game.platform} id={+id} />
          <DeleteGamePopover id={game.id} redirectTo="/" />
        </Card>
      )}
    </main>
  );
};

export default Edit;
