import { create } from "zustand";

export const useKeySectorsStore = create((set) => ({
  activeBg: null,
  setActiveBg: (bg) => set({ activeBg: bg }),
}));
