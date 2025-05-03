import GameTable from "@/components/gameTable/game-table";
import BreadcrumbSetter from "@/components/layout/header/breadcrumbs/breadcrum-setter";
import SearchInput from "@/components/searchInput/searchInput";
import { Button } from "@/components/ui/button";
import { Status } from "@/generated/prisma";
import prisma from "@/lib/prisma";
import { getValueFromSearchParamsOrNull } from "@/lib/utils";
import Link from "next/link";
import { getCurrentUserId } from "../actions";
import { Plus } from "lucide-react";
import { Card } from "@/components/ui/card";
import IgdbGameDialog from "@/components/igdbGameDialog/igdb-game-dialog";

interface KeyStringObject {
  [key: string]: string;
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

  const search = await getValueFromSearchParamsOrNull({
    searchParams: searchParams,
    key: "gameSearch",
  });

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
  const currentUserId = await getCurrentUserId();
  const games = await prisma.gameUser.findMany({
    include: {
      igdbGame: true,
    },
    where: {
      status: { in: getFilterArray() as Status[] },
      userId: currentUserId || "",
      igdbGame: {
        name: {
          contains: (search as string) || "",
          mode: "insensitive",
        },
      },
    },
  });

  return (
    <main>
      <Card className="p-4">
        <IgdbGameDialog />
        <BreadcrumbSetter newBreadcrumbs={[{ title: "Games" }]} />
        <div className="flex mb-4 justify-between">
          <Button asChild className="mr-4">
            <Link href="?addGameDialogOpen=true">
              <Plus />
            </Link>
          </Button>
          <SearchInput searchParamValue="gameSearch" className="w-1/3" />
        </div>
        <GameTable games={games} />
      </Card>
    </main>
  );
};

export default Home;
