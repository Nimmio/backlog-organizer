"use client";

import {
  type ReactNode,
  createContext,
  useRef,
  useContext,
  useEffect,
} from "react";
import { useStore } from "zustand";

import {
  type GameDashboardStore,
  createGameDashboardStore,
} from "@/stores/gamedashboard-store";
import { useQueryString } from "@/hooks/use-query-string,";

export type GameDashboardStoreApi = ReturnType<typeof createGameDashboardStore>;

export const GameDashboardStoreContext = createContext<
  GameDashboardStoreApi | undefined
>(undefined);

export interface GameDashboardStoreProviderProps {
  children: ReactNode;
}

export const GameDashboardStoreProvider = ({
  children,
}: GameDashboardStoreProviderProps) => {
  const storeRef = useRef<GameDashboardStoreApi | null>(null);
  if (storeRef.current === null) {
    storeRef.current = createGameDashboardStore();
  }

  return (
    <GameDashboardStoreContext.Provider value={storeRef.current}>
      {children}
    </GameDashboardStoreContext.Provider>
  );
};

export const useGameDashboardStore = <T,>(
  selector: (store: GameDashboardStore) => T
): T => {
  const gameDashboardStoreContext = useContext(GameDashboardStoreContext);

  if (!gameDashboardStoreContext) {
    throw new Error(
      `useGameDashboardStore must be used within GameDashboardStoreProvider`
    );
  }

  return useStore(gameDashboardStoreContext, selector);
};
