import { create } from "zustand";

interface ZustandState {
  activeSection: string;
  setActiveSection: (section: string) => void;
  theme: string;
  setTheme: (theme: string) => void;
}

export const useZustand = create<ZustandState>((set) => ({
  setActiveSection: (section: string) => set({ activeSection: section }),
  activeSection: window.location.pathname + window.location.hash,
  setTheme: (theme: string) => set({ theme: theme }),
  theme: "",
}));
