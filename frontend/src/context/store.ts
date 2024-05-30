import { IUser } from "@/models/IUser";
import { create } from "zustand";

interface AppState {
  user: null | IUser;
  setUser: (user: IUser) => void;
  removeUser: () => void;
}

export const useAppStore = create<AppState>()((set) => ({
  user: null,

  setUser: (user) => set({ user }),

  removeUser: () => set({ user: null }),
}));
