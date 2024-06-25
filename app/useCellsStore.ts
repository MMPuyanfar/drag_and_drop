import { CellsType } from "@/stories/container/Container";
import { create } from "zustand";

const initialCells = [{id:110, itemColor: 'red', itemLabel: 'label'},null,{id:10, itemColor: 'aqua', itemLabel: 'icon'},null,null,null,null,null,null,];

interface CellsStore {
  cells: CellsType;
  updateCells: (newCells:CellsType) => void;
}

export const useCellsStore = create<CellsStore>()((set) => ({
  cells: initialCells,
  updateCells: (newCells) => set(() => ({cells: newCells})),
}));
