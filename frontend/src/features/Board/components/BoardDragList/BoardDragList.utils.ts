import { ICardItem } from "../../Board.interfaces";

const removeFromList: (list: Array<ICardItem>, index: number) => [ICardItem, Array<ICardItem>] = (list: Array<ICardItem>, index: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(index, 1);

  return [removed, result];
};

const addToList = (list: Array<ICardItem>, index: number, element: ICardItem) => {
  const result = Array.from(list);

  result.splice(index, 0, element);

  return result;
};

const defaultCardsTitle: Array<string> = ["todo", "inProgress", "done"];
const staticElements: Record<string, Array<ICardItem>> = {
  todo: [
    {
      id: 1,
      prefix: 'aa-',
      content: 'this is content todo 1'
    },
    {
      id: 2,
      prefix: 'ab-',
      content: 'this is content todo 2'
    }
  ],
  inProgress: [
    {
      id: 3,
      prefix: 'ab-',
      content: 'this is content inProgress 3'
    }
  ],
  done: [
    {
      id: 4,
      prefix: 'ac-',
      content: 'this is content done 4'
    }
  ]
};

export {
  removeFromList,
  addToList,
  defaultCardsTitle,
  staticElements
}

