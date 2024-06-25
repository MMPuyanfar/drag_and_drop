import Image from "next/image";
import { useState } from "react";
import { ItemIcon } from "../item icon/ItemIcon";
import "./item.css";
import removeIconPNG from "./remove.png";

interface ItemPropsType {
  itemColor?: string;
  itemLabel?: string;
  id: number;
}

export function Item({
  itemColor = "gray",
  itemLabel = "icon",
  id,
}: ItemPropsType) {
  const [showRemoveIcon, setShowremoveIcon] =
    useState(false);

  const handleClick = () => {
    setShowremoveIcon(!showRemoveIcon);
    console.log(showRemoveIcon);
  };

  return (
    <div
      className="item"
      onClick={handleClick}
      draggable
    >
      <ItemIcon fillColor={itemColor} />
      <span className="label">{itemLabel}</span>
      {showRemoveIcon && (
        <Image
          src={removeIconPNG}
          title="remove"
          alt="remove"
          className="remove"
          // onClick={handleRemove}
          width={20}
          height={20}
        />
      )}
    </div>
  );
}
