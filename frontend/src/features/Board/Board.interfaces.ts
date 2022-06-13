import PropTypes, { InferProps } from "prop-types";

export interface IBoardColumn {
  title: string;
  description: string;
}

export interface IBoard {
  id: string;
  description: string;
  name: string;
  columns?: Array<IBoardColumn>;
}
export interface ICardItem {
  id: number;
  title: string;
  prefix: string;
  content: string;
  author: string;
}

export interface IAddBoardPayload {
  account: string;
  name: string;
  description: string;
}

export type IAddBoard = Omit<IAddBoardPayload, 'account'>;

export type IBoardResponse = IBoard;

interface IAddBoardRef {
  submitForm: typeof PropTypes.func.isRequired
}

export type TAddBoardRef = InferProps<IAddBoardRef>;