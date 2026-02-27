import { create } from "zustand";
import { Item } from "../data/types";

interface WorkspaceState {
  desk: Item | null;
  chair: Item | null;
  accessories: Item[];
  setDesk: (desk: Item) => void;
  setChair: (chair: Item) => void;
  toggleAccessory: (accessory: Item) => void;
  clearWorkspace: () => void;
}

export const useWorkspaceStore = create<WorkspaceState>(set => ({
  desk: null,
  chair: null,
  accessories: [],

  setDesk: desk =>
    set(state => ({
      desk: state.desk?.id === desk.id ? null : desk,
    })),

  setChair: chair =>
    set(state => ({
      chair: state.chair?.id === chair.id ? null : chair,
    })),

  toggleAccessory: accessory =>
    set(state => {
      const exists = state.accessories.find(a => a.id === accessory.id);
      if (exists) {
        return {
          accessories: state.accessories.filter(a => a.id !== accessory.id),
        };
      }
      return { accessories: [...state.accessories, accessory] };
    }),

  clearWorkspace: () => set({ desk: null, chair: null, accessories: [] }),
}));
