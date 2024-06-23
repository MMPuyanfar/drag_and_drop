import { Item } from "../item/Item";
import './container.css'

export interface ItemType {
  id: number;
  itemLabel: string;
  showRemoveIcon?: boolean;
  itemColor?: string;
  itemSize?: number;
  handleRemove?: () => void;
}

interface ContainerPropsType {
  itemsList: ItemType[];
}


export default function Container({
  itemsList,
}: ContainerPropsType) {
  return (
    <div className="container">
      {itemsList.map((item) => (
        <Item
          itemLabel={item.itemLabel}
          itemColor={item.itemColor}
          key={item.id}
        />
      ))}
    </div>
  );
}
