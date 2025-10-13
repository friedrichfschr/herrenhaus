import { create } from "zustand";

interface ZustandState {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const useZustand = create<ZustandState>((set, get) => ({
  setActiveSection: (section: string) => set({ activeSection: section }),
  activeSection: window.location.pathname + window.location.hash,
}));
