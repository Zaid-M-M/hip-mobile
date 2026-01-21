import { create } from "zustand";

export const useShowcaseStore = create((set) => ({
  activeBackground: null,
  setActiveBackground: (bg) => set({ activeBackground: bg }),
}));
