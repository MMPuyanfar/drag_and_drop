import React from "react";
import { ItemIcon } from "../item icon/ItemIcon";
import "./item.css";
import Image from "next/image";
import removeIconPNG from "./remove.png";

interface ItemPropsType {
  showRemoveIcon?: boolean;
  // removeIconURL?: string;
  itemColor?: string;
  itemSize?: number;
  itemLabel?: string;
  handleRemove?: () => void;
}

export function Item({
  showRemoveIcon = false,
  // removeIconURL = "./remove.png",
  itemColor = "gray",
  itemSize = 90,
  itemLabel = "icon",
  // handleRemove
}: ItemPropsType) {
  return (
    <div className="size item">
      <ItemIcon fillColor={itemColor} size={itemSize} />
      <span className="label">{itemLabel}</span>
      {showRemoveIcon && (
        <Image
          src={removeIconPNG}
          title="remove"
          alt="remove"
          className="remove"
          // onClick={handleRemove}
          width={0.2 * itemSize}
          height={0.2 * itemSize}
        />
      )}
      <style jsx>
        {`
          .size {
            width: ${itemSize * 1.1}px;
            height: ${itemSize * 1.1}px;
          }
          .label {
            font-size: ${0.2 * itemSize}px;
          }
        `}
      </style>
    </div>
  );
}
