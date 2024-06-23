'use client'

import Container from "@/stories/container/Container";
import { useItemsStore } from "./useItemsStore";


export default function DragAndDropApp() {
  const mainItems = useItemsStore(state => state.mainContainer);
  const belowItems = useItemsStore(state => state.belowContainer);
  return (
    <main>
      <Container itemsList={mainItems} />
      <br></br>
      <Container itemsList={belowItems} />
    </main>
  );
}
