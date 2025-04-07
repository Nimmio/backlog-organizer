import { Card } from "@/components/ui/card";
import {
  DataList,
  DataListItem,
  DataListLabel,
  DataListValue,
} from "@/components/ui/data-list";
import prisma from "@/lib/prisma";

const View = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const game = await prisma.game.findFirst({
    where: { id: +id },
  });
  return (
    <main>
      <Card className="p-4">
        <DataList orientation="horizontal" className="gap-4">
          <DataListItem>
            <DataListLabel className="w-32">Name: </DataListLabel>
            <DataListValue>{game?.name}</DataListValue>
          </DataListItem>

          <DataListItem>
            <DataListLabel className="w-32">Platform: </DataListLabel>
            <DataListValue>{game?.platform}</DataListValue>
          </DataListItem>
        </DataList>
      </Card>
    </main>
  );
};

export default View;
