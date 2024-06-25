"use client";

import Container from "@/stories/container/Container";
import { useCellsStore } from "./useCellsStore";


export default function DragAndDropApp() {
  const cells = useCellsStore((state) => state.cells);
  const updateCells = useCellsStore((state) => state.updateCells);

  
  return (
      <Container cells={cells} />
  );
}
