import {
  ItemObjType,
  ItemsListType,
  useItemsStore,
} from "@/app/useItemsStore";
import { DragEvent, MouseEvent } from "react";
import { Item } from "../item/Item";
import "./container-cell.css";

interface ContainerCellProps {
  itemObj: ItemObjType | null;
  position: string;
}
export function ContainerCell({
  itemObj,
  position,
}: ContainerCellProps) {
  const itemsList = useItemsStore(
    (state) => state.itemsList
  );
  const updateItemsList = useItemsStore(
    (state) => state.updateItemsList
  );

  const swapItems = (
    startPosition: number,
    dropPosition: number,
    firstContainerId: string,
    secondContainerId: string
  ) => {
    const newItemsList = itemsList.map((item) => {
      if (
        item.position === startPosition &&
        item.containerId === firstContainerId
      ) {
        return {
          ...item,
          position: dropPosition,
          containerId: secondContainerId,
        };
      } else if (
        item.position === dropPosition &&
        item.containerId === secondContainerId
      ) {
        return {
          ...item,
          position: startPosition,
          containerId: firstContainerId,
        };
      } else {
        return item;
      }
    });

    updateItemsList(newItemsList);
  };

  const handleDrop = (
    event: DragEvent<HTMLDivElement>
  ): void => {
    event.preventDefault();

    const droppedCellId = (
      event.currentTarget as HTMLElement
    ).id;
    const sliceIndex = droppedCellId.search(/(\D+)$/);
    const droppedPosition = Number(
      droppedCellId.slice(0, sliceIndex)
    ); //extracting the position and containerId of the cell
    const droppedContainerId =
      droppedCellId.slice(sliceIndex);

    const draggableId = Number(
      event.dataTransfer.getData("text/plain")
    );
    const draggableItem = itemsList.find(
      (item) => item.itemObj.id === draggableId
    ) as ItemsListType;
    const draggableStartPosition = draggableItem.position;
    const draggableContainerId = draggableItem.containerId;

    swapItems(draggableStartPosition, droppedPosition, draggableContainerId, droppedContainerId);
  };

  const hadleDragOver = (
    e: DragEvent<HTMLDivElement>
  ): void => {
    e.preventDefault();
  };

  const handleRemove = (e:MouseEvent) => {
    e.stopPropagation();
    const parent = e.currentTarget.parentElement as HTMLDivElement;
    const draggableObjId = Number(parent.id);
    const newItemsList = itemsList.filter(item => {
      if (item.itemObj.id !== draggableObjId) {return true} else {
        if (item.containerId === 'alt') {return false} else {return true}
      }
    }).map(item => {
      if (item.itemObj.id !== draggableObjId) {return item} else {
        return {...item, containerId: 'alt', position: findFirstEmptyPositionInAltContainer()}
      }
    });
    updateItemsList(newItemsList);
  };

  const findFirstEmptyPositionInAltContainer = () => {
    const currentPositions:number[] = [];
    itemsList.forEach(item => {if (item.containerId === 'alt') {currentPositions.push(item.position)}});
    currentPositions.sort(function(a,b){return a-b});
    for (let i = 0; i<=currentPositions.length; i++){
      if (currentPositions.length === 0) {return 0}
      else if (i < currentPositions[i]) {return i}
    };
    return (currentPositions[(currentPositions.length-1)] + 1);
  };

  return (
    <div
      className={"cell "}
      onDragOver={hadleDragOver}
      onDrop={handleDrop}
      id={position}
    >
      {itemObj ? (
        <Item
          itemLabel={itemObj?.itemLabel}
          itemColor={itemObj?.itemColor}
          id={itemObj.id}
          handleRemove = {handleRemove}
          key={itemObj.id}
        />
      ) : (
        ""
      )}
    </div>
  );
}
