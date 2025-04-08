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
  const game = await prisma.game.findFirst({
    where: { id: +id },
  });
  return (
    <main>
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
          </DataList>
          <Button variant="secondary" asChild>
            <Link href={`/edit/${id}`}>Edit</Link>
          </Button>
        </Card>
      )}
    </main>
  );
};

export default View;
