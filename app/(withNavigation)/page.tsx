import AddGameDialog from "@/components/addGameDialog/add-game-dialog";
import GameTable from "@/components/gameTable/game-table";
import { Button } from "@/components/ui/button";
import { Status } from "@/generated/prisma";
import prisma from "@/lib/prisma";
import Link from "next/link";
import { boolean } from "zod";

interface Filters {
  [key: string]: boolean;
}

const Home = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const filtersString = (await searchParams).filters;
  const filters: Filters | null =
    filtersString && typeof filtersString === "string"
      ? JSON.parse(filtersString)
      : null;

  const getFilterArray = (): Status[] => {
    if (!filters) return [];
    return Object.keys(filters).filter(
      (filterKey) => filters[filterKey]
    ) as Status[];
  };
  const games = await prisma.game.findMany({
    where: { status: { in: getFilterArray() } },
  });

  return (
    <main>
      <AddGameDialog />
      <Button asChild className="mb-4">
        <Link href="?addGameDialogOpen=true">Add New Game</Link>
      </Button>
      <GameTable games={games} />
    </main>
  );
};

export default Home;
