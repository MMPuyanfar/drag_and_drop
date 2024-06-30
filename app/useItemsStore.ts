import { create } from "zustand";

const initialItemsList = [
  {
    itemObj: {
      id: 110,
      itemColor: "red",
      itemLabel: "label",
    },
    position: 0,
    containerId: "main",
  },
  {
    itemObj: {
      id: 10,
      itemColor: "aqua",
      itemLabel: "icon",
    },
    position: 2,
    containerId: "main",
  },
  {
    itemObj: {
      id: 20,
      itemColor: "gray",
      itemLabel: "folan",
    },
    position: 1,
    containerId: "alt",
  },
  {
    itemObj: {
      id: 30,
      itemColor: "blue",
      itemLabel: "bahman",
    },
    position: 0,
    containerId: "alt",
  },
];

export interface ItemObjType {
  id: number;
  itemLabel: string;
  itemColor: string;
}

export interface ItemsListType {
  itemObj: ItemObjType;
  position: number;
  containerId: string;
}

interface State {
  itemsList: ItemsListType[];
  updateItemsList: (newItemsList: ItemsListType[]) => void;
}

export const useItemsStore = create<State>()((set) => ({
  itemsList: initialItemsList,
  updateItemsList: (newItemsList) =>
    set(() => ({ itemsList: newItemsList })),
}));
