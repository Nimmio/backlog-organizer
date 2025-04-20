import { User } from "better-auth";
import { createStore } from "zustand/vanilla";

export type UserState = {
  user: User | null;
};

export type UserActions = {
  setUser: (newUser: User) => void;
};

export type UserStore = UserState & UserActions;

export const defaultInitState: UserState = {
  user: null,
};

export const createUserStore = (initState: UserState = defaultInitState) => {
  return createStore<UserStore>()((set) => ({
    ...initState,
    setUser: (newUser) => set(() => ({ user: newUser })),
  }));
};
