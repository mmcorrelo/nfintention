import React from "react";
import styled from "styled-components";
import { DragDropContext, DropResult, ResponderProvided } from "react-beautiful-dnd";

import DraggableBoardCard from "../DragableBoardCard";
import { ICardItem } from "../../Board.interfaces";
import { staticElements, removeFromList, addToList, defaultCardsTitle } from "./BoardDragList.utils";

const DragDropContextContainer = styled.div`
  padding: 20px;
  border-radius: 6px;
  max-height: 100%;
  margin-top: 75px;
  width: 100%;
`;

const ListGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 8px;
`;

const DragList = () => {
  const [elements, setElements] = React.useState<Record<string, Array<ICardItem>>>(staticElements);

  const onDragEnd = (result: DropResult, provided: ResponderProvided) => {
    if (!result.destination) {
      return;
    }

    const elementCards: Record<string, Array<ICardItem>> = { ...elements };
    const sourceList: Array<ICardItem> = elementCards[result.source.droppableId];
    const [removedElement, newSourceList]: [ICardItem, Array<ICardItem>] = removeFromList(sourceList, result.source.index);
    
    elementCards[result.source.droppableId] = newSourceList;
    
    const destinationList = elementCards[result.destination.droppableId];
    
    elementCards[result.destination.droppableId] = addToList(destinationList, result.destination.index, removedElement);

    setElements(elementCards);
  };

  return (
    <DragDropContextContainer>
      <DragDropContext onDragEnd={onDragEnd}>
        <ListGrid>
          {defaultCardsTitle.map((listKey: string) => (
            <DraggableBoardCard
              elements={elements[listKey]}
              key={listKey}
              prefix={listKey}
            />
          ))}
        </ListGrid>
      </DragDropContext>
    </DragDropContextContainer>
  );
}

export default DragList;
