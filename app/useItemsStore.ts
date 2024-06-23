import { ItemType } from "@/stories/container/Container";
import { create } from "zustand";

const mainItemsList = [
  {
    id: 0,
    itemLabel: "Icon 1",
    showRemoveIcon: false,
    itemColor: "blue",
  },
  {
    id: 1,
    itemLabel: "Icon 2",
    showRemoveIcon: false,
    itemColor: "red",
  },
  {
    id: 2,
    itemLabel: "Icon 3",
    showRemoveIcon: false,
    itemColor: "gray",
  },
 
];

const belowItemsList = [
  {
    id: 4,
    itemLabel: "Icon 4",
    showRemoveIcon: false,
    itemColor: "brown",
  },
  {
    id: 5,
    itemLabel: "Icon 5",
    showRemoveIcon: false,
    itemColor: "black",
  },
  {
    id: 6,
    itemLabel: "Icon 6",
    showRemoveIcon: false,
    itemColor: "aqua",
  },
  {
    id: 7,
    itemLabel: "Icon 7",
    showRemoveIcon: false,
    itemColor: "aquamarine",
  },
];

interface State {
  mainContainer: ItemType[];
  belowContainer: ItemType[];
}

export const useItemsStore = create<State>(() => ({
  mainContainer: mainItemsList,
  belowContainer: belowItemsList,
}))