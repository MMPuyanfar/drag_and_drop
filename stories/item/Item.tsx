import Image from "next/image";
import { MouseEvent, useState } from "react";
import { ItemIcon } from "../item icon/ItemIcon";
import "./item.css";

interface ItemPropsType {
  itemColor?: string;
  itemLabel?: string;
  id: number;
  removePicURL?: string;
  handleRemove: (e:MouseEvent) => void;
}

export function Item({
  itemColor = "gray",
  itemLabel = "icon",
  id,
  removePicURL = "/remove.png",
  handleRemove
}: ItemPropsType) {
  const [showRemoveIcon, setShowremoveIcon] =
    useState(false);

  const handleClick = () => {
    setShowremoveIcon(!showRemoveIcon);
  };

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>): void => {
    event.dataTransfer.setData('text/plain', event.currentTarget.id);
    setShowremoveIcon(false);
  };
  const handleDragEnd = (event: React.DragEvent<HTMLDivElement>): void => {
    setShowremoveIcon(false);
  };



  return (
    <div
      className="item"
      onClick={handleClick}
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      id={`${id}`}
    >
      <ItemIcon fillColor={itemColor} />
      <span className="label">{itemLabel}</span>
      {showRemoveIcon && (
        <Image
          src={removePicURL}
          title="remove"
          alt="remove"
          className="remove"
          onClick={handleRemove}
          width={20}
          height={20}
        />
      )}
    </div>
  );
}
