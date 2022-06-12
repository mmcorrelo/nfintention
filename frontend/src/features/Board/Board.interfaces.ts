import PropTypes, { InferProps } from "prop-types";

export interface IAddBoard {
  name: string;
  description: string;
}

interface IAddBoardRef {
  submitForm: typeof PropTypes.func.isRequired
}

export type TAddBoardRef = InferProps<IAddBoardRef>;