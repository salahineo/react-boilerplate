import { create } from 'zustand';

interface UIState {
  isSidebarOpen: boolean;
  actions: {
    toggleSidebar: () => void;
    setSidebar: (open: boolean) => void;
  };
}

export const useUIStore = create<UIState>((set) => ({
  isSidebarOpen: false,
  actions: {
    toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
    setSidebar: (open) => set({ isSidebarOpen: open }),
  },
}));

export const useSidebarOpen = () => useUIStore((state) => state.isSidebarOpen);
