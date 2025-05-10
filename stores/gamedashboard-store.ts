import { createStore } from "zustand/vanilla";
import { immer } from "zustand/middleware/immer";
import { TStatusKeyWithAll } from "@/lib/status";

type GameDashboardState = {
  searchValue: string;
  filterState: TStatusKeyWithAll;
  platformState: string;
  limitCount: number;
};

type GameDasbhoardActions = {
  setSearchValue: (input: string) => void;
  setFilterState: (input: TStatusKeyWithAll) => void;
  setPlatformState: (input: string) => void;
  setLimitCount: (input: number) => void;
};

export type GameDashboardStore = GameDashboardState & GameDasbhoardActions;

const defaultInitState: GameDashboardState = {
  searchValue: "",
  filterState: "All",
  platformState: "All Platforms",
  limitCount: 8,
};

export const createGameDashboardStore = (
  initState: GameDashboardState = defaultInitState
) => {
  return createStore<GameDashboardStore>()((set) => ({
    ...initState,
    setSearchValue: (input) => set(() => ({ searchValue: input })),
    setFilterState: (input) => set(() => ({ filterState: input })),
    setPlatformState: (input) => set(() => ({ platformState: input })),
    setLimitCount: (input) => set(() => ({ limitCount: input })),
  }));
};
