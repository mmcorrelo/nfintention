import { Droppable, DroppableId, DroppableProvided } from "react-beautiful-dnd";
import BoardCard from "./BoardCard";
import PropTypes, { InferProps } from 'prop-types';
import styled from "styled-components";
import { ICardItem } from "../Board.interfaces";

const ColumnHeader = styled.div`
  text-transform: uppercase;
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 16px;
`;

const DroppableStyles = styled.div`
  padding: 10px;
  border-radius: 3px;
  box-sizing: border-box;
  background: linear-gradient(rgb(234,230,255),rgb(255,255,255)) no-repeat;
`;

const propTypes = {
  elements: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    prefix: PropTypes.string,
    content: PropTypes.string,
  })),
  prefix: PropTypes.string.isRequired,
};

const DraggableBoardCard = ({ elements, prefix }: { elements: Array<ICardItem>, prefix: string }) => (
  <DroppableStyles>
    <ColumnHeader>{prefix}</ColumnHeader>
    <Droppable droppableId={prefix as DroppableId}>
      {(provided: DroppableProvided) => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          {elements.map((item: ICardItem, index: number) => (
            <BoardCard key={item.id} item={item} index={index} />
          ))}
          {provided.placeholder}
        </div>

      )}
    </Droppable>
  </DroppableStyles>
);


DraggableBoardCard.propTypes = propTypes;

export default DraggableBoardCard;
