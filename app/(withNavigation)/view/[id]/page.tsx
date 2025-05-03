import BreadcrumbSetter from "@/components/layout/header/breadcrumbs/breadcrum-setter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  DataList,
  DataListItem,
  DataListLabel,
  DataListValue,
} from "@/components/ui/data-list";
import { statusTranslation } from "@/lib/game";
import prisma from "@/lib/prisma";
import Link from "next/link";

const View = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const game = await prisma.gameStatus.findFirst({
    where: { id: +id },
  });

  return (
    <main>
      <BreadcrumbSetter
        newBreadcrumbs={[
          { title: "Games", href: "/" },
          { title: "View" },
          { title: game?.name || "" },
        ]}
      />
      {game && (
        <Card className="p-4">
          <DataList orientation="horizontal" className="gap-4">
            <DataListItem>
              <DataListLabel className="w-32">Name: </DataListLabel>
              <DataListValue>{game.name}</DataListValue>
            </DataListItem>

            <DataListItem>
              <DataListLabel className="w-32">Platform: </DataListLabel>
              <DataListValue>{game.platform}</DataListValue>
            </DataListItem>

            <DataListItem>
              <DataListLabel className="w-32">Status: </DataListLabel>
              <DataListValue>{statusTranslation(game.status)}</DataListValue>
            </DataListItem>

            <DataListItem>
              <DataListLabel className="w-32">Genre: </DataListLabel>
              <DataListValue>{game.genre}</DataListValue>
            </DataListItem>

            <DataListItem>
              <DataListLabel className="w-32">Release Date: </DataListLabel>
              <DataListValue>
                {game.releaseDate && game.releaseDate.toDateString()}
              </DataListValue>
            </DataListItem>
          </DataList>
          <h1>Notes:</h1>
          {game.notes && <p className="break-all">{game.notes}</p>}

          <Button variant="secondary" asChild>
            <Link href={`/edit/${id}`}>Edit</Link>
          </Button>
        </Card>
      )}
    </main>
  );
};

export default View;
