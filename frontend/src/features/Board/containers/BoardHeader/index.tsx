import { InferType } from "prop-types";
import { useEffect } from "react";
import { useUpdateAccountDefaultBoardMutation } from "../../../Account/Account.hooks";
import { useFetchAccountBoards } from "../../Board.hooks";

import BoardHeader from "../../components/BoardHeader";

const propTypes = {};
const defaultProps: InferType<typeof propTypes> = {}

const BoardHeaderContainer = (props: InferType<typeof propTypes> = defaultProps) => {
  const { data: boards } = useFetchAccountBoards();
  const [updateAccount] = useUpdateAccountDefaultBoardMutation()

  useEffect(() => {
    const fn = async () => {
      if (boards && boards.length) {
        await updateAccount(boards[0]);
      }
    };

    fn();
  }, [boards]);

  return (
      <BoardHeader />
  );
}

BoardHeaderContainer.propTypes = propTypes;
BoardHeaderContainer.defaultProps = defaultProps;

export default BoardHeaderContainer;
