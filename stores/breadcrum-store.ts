import { createStore } from "zustand/vanilla";

export type breadcrumb = {
  title: string;
  href?: string;
};

export type breadcrumbs = breadcrumb[];

export type BreadcrumState = {
  breadcrumbs: breadcrumbs;
};

export type BreadcrumActions = {
  setBreadcrumbs: (newBreadcrumbs: breadcrumbs) => void;
};

export type BreadcrumStore = BreadcrumState & BreadcrumActions;

export const defaultInitState: BreadcrumState = {
  breadcrumbs: [],
};

export const createBreadcrumStore = (
  initState: BreadcrumState = defaultInitState
) => {
  return createStore<BreadcrumStore>()((set) => ({
    ...initState,
    setBreadcrumbs: (newBreadcrumbs) =>
      set(() => ({ breadcrumbs: newBreadcrumbs })),
  }));
};
