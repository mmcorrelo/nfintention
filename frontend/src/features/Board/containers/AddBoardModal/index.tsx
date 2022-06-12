import PropTypes, { InferProps } from 'prop-types';
import { IAddBoard, IAddBoardPayload } from '../../Board.interfaces';

import AddBoardModal from '../../components/AddBoardModal'
import { useCreateBoardMutation } from '../../Board.slice';
import { useContext } from 'react';
import AuthContext from '../../../../contexts/AuthContext';

const propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
};

const AddBoardModalContainer = (props: InferProps<typeof propTypes>) => {
  const [createBoard, { isLoading }] = useCreateBoardMutation();
  const authContext = useContext(AuthContext)

  const onSubmitHandler = (boardData: IAddBoard) => {
    const address = authContext?.wallet?.address;

    if (address) {
      const payload: IAddBoardPayload = { ...boardData, account: address };

      createBoard(payload);
    }
  }

  return (
    <AddBoardModal
      show={props.show}
      isSaving={isLoading}
      onHide={props.onHide}
      onSubmit={onSubmitHandler}
    />
  )
};

AddBoardModalContainer.propTypes = propTypes;

export default AddBoardModalContainer;