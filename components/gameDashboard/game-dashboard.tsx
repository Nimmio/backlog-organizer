"use client";

import {
  getMultipleStatusKeysTranslatedWithAll,
  getStatusTranslation,
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
import { GameStatus, Platform, Status } from "@/generated/prisma";
import { changePlatform, changeStatus, deleteGameStatus } from "@/lib/game";
import { toast } from "sonner";

interface GameDashboardProps {
  games: GameStatus[];
  platformOptions: Platform[];
}

export default function GameDashboard(props: GameDashboardProps) {
  const { games, platformOptions } = props;
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
    deleteGameStatus({ id }).then((deleteGameStatus) => {
      toast("Deleted Game");
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
      toast("Changed Status", {
        description: `Changed Status to ${getStatusTranslation(newStatus)}`,
      });
      router.refresh();
    });
  };

  interface handlePlatformChangeParams {
    id: number;
    newPlatform: string;
  }

  const handlePlatformChange = (params: handlePlatformChangeParams) => {
    const { id, newPlatform } = params;
    changePlatform({
      id,
      platform: newPlatform,
    }).then(() => {
      toast("Changed Platform");
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
            options: [
              "All",
              ...platformOptions.map((platformOption) => platformOption.name),
            ],
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
          onPlatformChange={({ id, newPlatform }) =>
            handlePlatformChange({ id, newPlatform })
          }
        />
      </div>
    </div>
  );
}
