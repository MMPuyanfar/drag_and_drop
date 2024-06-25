import ContainerCell from "../container cell/ContainerCell";
import "./container.css";

export interface ItemType {
  id: number;
  itemLabel: string;
  itemColor: string;
}
export type CellsType = (ItemType|null)[];

interface ContainerPropsType {
  cells: CellsType
}

export default function Container({
  cells
}: ContainerPropsType) {

  return (
    <div className="container">
        {cells.map((cell, index) => (
          <ContainerCell key={index} position={index} itemObj={cell} />
        ))}
    </div>
  );
}
