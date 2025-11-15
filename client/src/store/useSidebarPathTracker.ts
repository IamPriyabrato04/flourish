import { create } from 'zustand';

export type SidebarPathTrackerState = {
  path: string;
  setPath: (path: string) => void;
};

export const useSidebarPathTracker = create<SidebarPathTrackerState>(set => ({
  path: '',
  setPath: (path: string) => set({ path }),
}));

export const useSidebarPath = () =>
  useSidebarPathTracker((state: SidebarPathTrackerState) => state.path);
