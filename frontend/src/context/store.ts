import { IUser } from "@/models/IUser";
import { create } from "zustand";

interface IAppState {
  user: null | IUser;
  setUser: (user: IUser) => void;
  removeUser: () => void;
}

export const useAppStore = create<IAppState>()((set) => ({
  user: null,

  setUser: (user) => set({ user }),

  removeUser: () => set({ user: null }),
}));
