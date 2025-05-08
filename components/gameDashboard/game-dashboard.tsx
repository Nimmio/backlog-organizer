"use client";

import {
  getMultipleStatusKeysTranslatedWithAll,
  TStatusKeyWithAll,
} from "@/lib/status";
import GameDashboardControls from "./controls/game-dashboard-controls";
import { useGameDashboardStore } from "@/providers/gamedashboard-store-provider";
import GameDasbhoardGrid from "./grid/game-dashboard-grid";
import { useCallback, useEffect } from "react";
import { useQueryString } from "@/hooks/use-query-string,";
import { usePathname, useRouter } from "next/navigation";
import { useDebounce } from "use-debounce";
import { Button } from "../ui/button";
import { PlusCircle } from "lucide-react";
import { GameStatus, Status } from "@/generated/prisma";
import { changeStatus, deleteGameStatus } from "@/lib/game";

// Status and platform options for filters
const platformOptions = [
  "All",
  "PC",
  "PlayStation 5",
  "Xbox Series X",
  "Nintendo Switch",
];

interface GameDashboardProps {
  games: GameStatus[];
}

export default function GameDashboard(props: GameDashboardProps) {
  const { games } = props;
  const {
    searchValue,
    platformState,
    filterState,
    setFilterState,
    setPlatformState,
    setSearchValue,
  } = useGameDashboardStore((state) => state);

  const [debouncedSearchValue] = useDebounce(searchValue, 500);

  const pathname = usePathname();
  const router = useRouter();
  const createQueryString = useQueryString();
  const syncStateWithSearchparams = useCallback(
    ({
      search,
      platform,
      status,
    }: {
      search: string;
      platform: string;
      status: string;
    }) => {
      router.push(
        `${pathname}?${createQueryString(
          "dashboardControls",
          JSON.stringify({ search, platform, status })
        )}`
      );
    },
    [createQueryString, pathname, router]
  );

  useEffect(() => {
    syncStateWithSearchparams({
      search: debouncedSearchValue,
      platform: platformState,
      status: filterState,
    });
  }, [
    debouncedSearchValue,
    platformState,
    filterState,
    syncStateWithSearchparams,
  ]);

  const handleAddButtonClick = () => {
    router.push(
      `${pathname}?${createQueryString("addGameDialogOpen", "true")}`
    );
  };

  const handleDelete = (id: number) => {
    deleteGameStatus({ id }).then(() => {
      router.refresh();
    });
  };

  interface handleStatusChangeParams {
    id: number;
    newStatus: Status;
  }

  const handleStatusChange = (params: handleStatusChangeParams) => {
    const { id, newStatus } = params;
    changeStatus({
      id,
      status: newStatus,
    }).then(() => {
      router.refresh();
    });
  };

  return (
    <div className="container mx-auto ">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Video Game Library</h1>
        <Button className="gap-2" onClick={handleAddButtonClick}>
          <PlusCircle className="h-4 w-4" />
          Add Game
        </Button>
      </div>
      <div>
        <GameDashboardControls
          search={{ value: searchValue, onChange: setSearchValue }}
          platformFilter={{
            value: platformState,
            onChange: setPlatformState,
            options: platformOptions,
          }}
          statusFilter={{
            value: filterState,
            onChange: (value: string) =>
              setFilterState(value as TStatusKeyWithAll),
            options: getMultipleStatusKeysTranslatedWithAll(),
          }}
        />
        <GameDasbhoardGrid
          games={games}
          onDelete={(id) => handleDelete(id)}
          onStatusChange={({ id, newStatus }) =>
            handleStatusChange({ id, newStatus })
          }
        />
      </div>
    </div>
  );
}
