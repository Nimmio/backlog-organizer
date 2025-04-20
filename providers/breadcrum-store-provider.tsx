"use client";

import { type ReactNode, createContext, useRef, useContext } from "react";
import { useStore } from "zustand";

import {
  type BreadcrumStore,
  createBreadcrumStore,
} from "@/stores/breadcrum-store";

export type BreadcrumStoreApi = ReturnType<typeof createBreadcrumStore>;

export const BreadcrumStoreContext = createContext<
  BreadcrumStoreApi | undefined
>(undefined);

export interface BreadcrumStoreProviderProps {
  children: ReactNode;
}

export const BreadcrumStoreProvider = ({
  children,
}: BreadcrumStoreProviderProps) => {
  const storeRef = useRef<BreadcrumStoreApi | null>(null);
  if (storeRef.current === null) {
    storeRef.current = createBreadcrumStore();
  }

  return (
    <BreadcrumStoreContext.Provider value={storeRef.current}>
      {children}
    </BreadcrumStoreContext.Provider>
  );
};

export const useBreadcrumStore = <T,>(
  selector: (store: BreadcrumStore) => T
): T => {
  const breadcrumStoreContext = useContext(BreadcrumStoreContext);

  if (!breadcrumStoreContext) {
    throw new Error(
      `useBreadcrumStore must be used within BreadcrumStoreProvider`
    );
  }

  return useStore(breadcrumStoreContext, selector);
};
