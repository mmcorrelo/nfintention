import { Draggable, DraggableProvided, DraggableStateSnapshot, DroppableId, DroppableProvided } from "react-beautiful-dnd";
import styled from "styled-components";
import PropTypes, { InferProps } from 'prop-types';
import { generateFromString } from "generate-avatar";
import { ICardItem } from "../Board.interfaces";

const Avatar = styled.img`
  height: 30px;
  width: 30px;
  border: 3px solid white;
  border-radius: 50%;
`;

const CardHeader = styled.div`
  font-weight: 500;
`;

const Author = styled.div`
  display: flex;
  align-items: center;
`;
const CardFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DragItem = styled.div`
  padding: 10px;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  background: white;
  margin: 0 0 8px 0;
  display: grid;
  grid-gap: 20px;
  flex-direction: column;
`;

const propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    prefix: PropTypes.string,
    content: PropTypes.string,
  }),
  index: PropTypes.number.isRequired,
};

const BoardCard = ({ item, index }: { item: ICardItem, index: number }) => {
  const randomHeader = 'Cenas';

  return (
    <Draggable draggableId={`${item.id}` as DroppableId} index={index}>
      {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => {
        return (
          <DragItem
            ref={provided.innerRef}
            snapshot={snapshot}
            {...provided.draggableProps}
            {...provided.dragHandleProps}>
            <CardHeader>{randomHeader}</CardHeader>
            <span>Content</span>
            <CardFooter>
              <span>{item.content}</span>
              <Author>
                {item.id}
                <Avatar src={`data:image/svg+xml;utf8,${ generateFromString(`${item.id}`) }`}/>
              </Author>
            </CardFooter>
          </DragItem>
        );
      }}
    </Draggable>
  );
};

BoardCard.propTypes = propTypes;

export default BoardCard;
