import AddGameDialog from "@/components/addGameDialog/add-game-dialog";
import GameTable from "@/components/gameTable/game-table";
import { Button } from "@/components/ui/button";
import { Status } from "@/generated/prisma";
import prisma from "@/lib/prisma";
import { getJsonParsedStringOrNull } from "@/lib/utils";
import Link from "next/link";
import { boolean } from "zod";

interface KeyStringObject {
  [key: string]: any;
}

const Home = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const filtersString = (await searchParams).filters;
  const sortString = (await searchParams).sort;

  const filters: KeyStringObject | null = getJsonParsedStringOrNull(
    (filtersString as string) || null
  ) as KeyStringObject;

  const sort: KeyStringObject | null = getJsonParsedStringOrNull(
    (sortString as string) || null
  ) as KeyStringObject;

  const getFilterArray = (): Status[] => {
    if (!filters) return [];
    return Object.keys(filters).filter(
      (filterKey) => filters[filterKey]
    ) as Status[];
  };

  const validateSortObjectOrEmptyObject = (input: KeyStringObject): object => {
    if (
      Object.keys(input).some((key) => !["asc", "desc"].includes(input[key]))
    ) {
      return {};
    }
    return input;
  };
  console.log(validateSortObjectOrEmptyObject(sort));

  const games = await prisma.game.findMany({
    orderBy: validateSortObjectOrEmptyObject(sort),
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
