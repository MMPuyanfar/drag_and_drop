import { ItemsListType, useItemsStore } from "@/app/useItemsStore";
import {ContainerCell} from "../container cell/ContainerCell";
import "./container.css";

interface ContainerPropsType {
  containerId: string;
  row?: number;
  column?: number;
  automaticLayout?: boolean;
}

export function Container({containerId, row=2, column=3, automaticLayout=false}:ContainerPropsType) {
  const itemsList = useItemsStore((state) => state.itemsList);
  const containerItems:ItemsListType[] = [];
  itemsList.forEach(item => {
    if (item.containerId === containerId) {containerItems.push(item)};
  });
  const length = row * column;
  const cellsData = new Array(length).fill(null);
  containerItems.forEach(item => {if (item.position < length) {cellsData[item.position] = item.itemObj}});


  return (
    <div className="container" style={{gridTemplateColumns: `repeat(${column}, 1fr)`, gridTemplateRows: `repeat(${row}, 1fr)`}}>
        {cellsData.map((cell, index) => (
          <ContainerCell key={index} position={index+containerId} itemObj={cell} />
        ))}
    </div>
  );
}
