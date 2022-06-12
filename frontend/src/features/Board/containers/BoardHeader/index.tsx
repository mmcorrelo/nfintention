import PropType, { InferType } from "prop-types";
import { useContext, useEffect } from "react";
import AuthContext from "../../../../contexts/AuthContext";
import { IBoardResponse } from "../../Board.interfaces";
import { useFetchBoardsQuery } from "../../Board.slice";

import BoardHeader from "../../components/BoardHeader";

const propTypes = {};

const defaultProps: InferType<typeof propTypes> = {}

const BoardHeaderContainer = (props: InferType<typeof propTypes> = defaultProps) => {
  const authContext = useContext(AuthContext);
  const address = authContext.wallet.address;

  // const { data = [], isLoading } = useFetchBoardsQuery(address);
const data = {}
  return (
    <>
      <BoardHeader />
      {JSON.stringify(data)}
    </>
  )
}

BoardHeaderContainer.propTypes = propTypes;
BoardHeaderContainer.defaultProps = defaultProps;

export default BoardHeaderContainer;
