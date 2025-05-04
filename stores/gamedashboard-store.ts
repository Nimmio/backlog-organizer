import { createStore } from "zustand/vanilla";
import { immer } from "zustand/middleware/immer";
import { TStatusKeyWithAll } from "@/lib/status";

type GameDashboardState = {
  searchValue: string;
  filterState: TStatusKeyWithAll;
  platformState: string;
};

type GameDasbhoardActions = {
  setSearchValue: (input: string) => void;
  setFilterState: (input: TStatusKeyWithAll) => void;
  setPlatformState: (input: string) => void;
};

export type GameDashboardStore = GameDashboardState & GameDasbhoardActions;

const defaultInitState: GameDashboardState = {
  searchValue: "",
  filterState: "All",
  platformState: "All",
};

export const createGameDashboardStore = (
  initState: GameDashboardState = defaultInitState
) => {
  return createStore<GameDashboardStore>()((set) => ({
    ...initState,
    setSearchValue: (input) => set(() => ({ searchValue: input })),
    setFilterState: (input) => set(() => ({ filterState: input })),
    setPlatformState: (input) => set(() => ({ platformState: input })),
  }));
};
