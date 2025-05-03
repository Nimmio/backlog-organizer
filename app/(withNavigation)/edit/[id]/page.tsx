import DeleteGamePopover from "@/components/deleteGamePopover/delete-game-popover";
import EditGameForm from "@/components/editGameForm/edit-game-form";
import BreadcrumbSetter from "@/components/layout/header/breadcrumbs/breadcrum-setter";
import { Card } from "@/components/ui/card";

import prisma from "@/lib/prisma";

const Edit = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const game = await prisma.gameUser.findFirst({
    where: { id: +id },
  });

  return (
    <main>
      <BreadcrumbSetter
        newBreadcrumbs={[
          { title: "Games", href: "/" },
          { title: "Edit" },
          { title: game?.name || "" },
        ]}
      />
      {game && (
        <Card className="p-4">
          <EditGameForm {...game} />
          <DeleteGamePopover id={game.id} redirectTo="/" />
        </Card>
      )}
    </main>
  );
};

export default Edit;
