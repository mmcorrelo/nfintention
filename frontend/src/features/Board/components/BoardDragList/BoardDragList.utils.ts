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

const defaultCardsTitle: Array<string> = ["todo", "working", "done"];
const staticElements: Record<string, Array<ICardItem>> = {
  todo: [
    {
      id: 1,
      title: 'Task 1',
      prefix: 'aa-',
      author: 'Jonh',
      content: 'Some description'
    },
    {
      id: 2,
      title: 'Task 2',
      author: 'Tom',
      prefix: 'ab-',
      content: 'Some description'
    }
  ],
  working: [
    {
      id: 3,
      title: 'Task 3',
      author: 'Math',
      prefix: 'ab-',
      content: 'Some description'
    }
  ],
  done: [
    {
      id: 4,
      title: 'Task 4',
      author: 'Kira',
      prefix: 'ac-',
      content: 'Some description'
    }
  ]
};

export {
  removeFromList,
  addToList,
  defaultCardsTitle,
  staticElements
}

