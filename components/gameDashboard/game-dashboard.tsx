"use client";

import {
  getMultipleStatusKeysTranslatedWithAll,
  TStatusKey,
  TStatusKeyWithAll,
} from "@/lib/status";
import GameDashboardControls from "./controls/game-dashboard-controls";
import { useGameDashboardStore } from "@/providers/gamedashboard-store-provider";
import GameDasbhoardGrid from "./grid/game-dashboard-grid";
import { useEffect } from "react";
import { useQueryString } from "@/hooks/use-query-string,";
import { usePathname, useRouter } from "next/navigation";
import { useDebounce } from "use-debounce";

// Status and platform options for filters
const platformOptions = [
  "All",
  "PC",
  "PlayStation 5",
  "Xbox Series X",
  "Nintendo Switch",
];

const DEMOGAMES = [
  {
    id: 1,
    name: "The Legend of Zelda: Breath of the Wild",
    cover: "/placeholder.svg?height=150&width=120",
    status: "BACKLOG" as TStatusKey,
    platform: "Nintendo Switch",
  },
  {
    id: 2,
    name: "God of War Ragnarök",
    cover: "/placeholder.svg?height=150&width=120",
    status: "COMPLETED" as TStatusKey,
    platform: "PlayStation 5",
  },
  {
    id: 3,
    name: "Elden Ring",
    cover: "/placeholder.svg?height=150&width=120",
    status: "ON_HOLD" as TStatusKey,
    platform: "PC",
  },
  {
    id: 4,
    name: "Halo Infinite",
    cover: "/placeholder.svg?height=150&width=120",
    status: "PLAYING" as TStatusKey,
    platform: "Xbox Series X",
  },
  {
    id: 5,
    name: "Cyberpunk 2077",
    cover: "/placeholder.svg?height=150&width=120",
    status: "PREORDER" as TStatusKey,
    platform: "PC",
  },
  {
    id: 6,
    name: "Animal Crossing: New Horizons",
    cover: "/placeholder.svg?height=150&width=120",
    status: "WANT_TO_BUY" as TStatusKey,
    platform: "Nintendo Switch",
  },
];

export default function GameDashboard() {
  const games = DEMOGAMES;

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
  const syncStateWithSearchparams = ({
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
  };

  useEffect(() => {
    syncStateWithSearchparams({
      search: debouncedSearchValue,
      platform: platformState,
      status: filterState,
    });
  }, [debouncedSearchValue, platformState, filterState]);

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-6">Video Game Library</h1>
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
      <GameDasbhoardGrid games={games} />
    </div>
  );
}
