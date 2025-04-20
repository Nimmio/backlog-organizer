import AddGameDialog from "@/components/addGameDialog/add-game-dialog";
import GameTable from "@/components/gameTable/game-table";
import BreadcrumbSetter from "@/components/layout/header/breadcrumbs/breadcrum-setter";
import SearchInput from "@/components/searchInput/searchInput";
import { Button } from "@/components/ui/button";
import { Status } from "@/generated/prisma";
import prisma from "@/lib/prisma";
import { getValueFromSearchParamsOrNull } from "@/lib/utils";
import Link from "next/link";
import { getCurrentUserIdOrNull } from "../actions";

interface KeyStringObject {
  [key: string]: any;
}

const Home = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
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

  const search = (await getValueFromSearchParamsOrNull({
    searchParams: searchParams,
    key: "gameSearch",
  })) as string;

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
  const currentUserId = getCurrentUserIdOrNull();
  const games = await prisma.game.findMany({
    orderBy: validateSortObjectOrEmptyObject(sort),
    where: {
      status: { in: getFilterArray() as Status[] },
      name: { contains: search || "" },
      userId: currentUserId,
    },
  });

  return (
    <main>
      <AddGameDialog />
      <BreadcrumbSetter newBreadcrumbs={[{ title: "Games" }]} />
      <div className="flex">
        <Button asChild className="mb-4">
          <Link href="?addGameDialogOpen=true">Add New Game</Link>
        </Button>
        <SearchInput searchParamValue="gameSearch" />
      </div>
      <GameTable games={games} />
    </main>
  );
};

export default Home;
