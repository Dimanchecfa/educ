import { create } from "zustand";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const useSidebar = create<SidebarProps>((set) => ({
  isOpen: true,
  toggleSidebar: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default useSidebar;