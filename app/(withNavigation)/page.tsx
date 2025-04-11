import AddGameDialog from "@/components/addGameDialog/add-game-dialog";
import GameTable from "@/components/gameTable/game-table";
import { Button } from "@/components/ui/button";
import { Status } from "@/generated/prisma";
import prisma from "@/lib/prisma";
import {
  getJsonParsedStringOrNull,
  getValueFromSearchParamsOrNull,
} from "@/lib/utils";
import Link from "next/link";

interface KeyStringObject {
  [key: string]: any;
}

const Home = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const sortString = (await searchParams).sort;

  const filter = await getValueFromSearchParamsOrNull({
    searchParams: searchParams,
    key: "filters",
  });

  const getFilterArray = () => {
    if (!filter) return [];
    const returnArray = [];
    for (const [key, value] of Object.entries(filter)) {
      if (value) returnArray.push(key);
    }
    return returnArray;
  };

  const sort = (await getValueFromSearchParamsOrNull({
    searchParams: searchParams,
    key: "sort",
  })) as KeyStringObject;

  const validateSortObjectOrEmptyObject = (
    input: KeyStringObject | null
  ): object => {
    if (!input) return {};
    if (
      Object.keys(input).some((key) => !["asc", "desc"].includes(input[key]))
    ) {
      return {};
    }
    return input;
  };
  const games = await prisma.game.findMany({
    orderBy: validateSortObjectOrEmptyObject(sort),
    where: { status: { in: getFilterArray() as Status[] } },
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
