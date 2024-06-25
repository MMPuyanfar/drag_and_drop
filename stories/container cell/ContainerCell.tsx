import { ItemType } from "../container/Container";
import { Item } from "../item/Item";
import "./container-cell.css";

interface ItemObjType {
  itemObj: ItemType | null;
  position: number;
}
export default function ContainerCell({
  itemObj,
  position,
}: ItemObjType) {


  return (
    <div className="cell ">
      {itemObj ? (
        <Item
          itemLabel={itemObj?.itemLabel}
          itemColor={itemObj?.itemColor}
          id={itemObj.id}
        />
      ) : (
        ""
      )}
    </div>
  );
}
