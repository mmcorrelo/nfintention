import PropTypes, { InferProps } from 'prop-types';
import { IAddBoard } from '../Board.interfaces';

import styles from './AddBoardModal.container.module.scss';

import AddBoardModal from '../components/AddBoardModal';

const propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
};

const AddBoardModalContainer = (props: InferProps<typeof propTypes>) => {
  const onSubmitHandler = (formData: IAddBoard) => { 
    //TODO submit to server
    console.log('formData: ', formData);
  }

  return (
    <AddBoardModal
      show={props.show}
      onHide={props.onHide}
      onSubmit={onSubmitHandler}
    />
  )
};

AddBoardModalContainer.propTypes = propTypes;

export default AddBoardModalContainer;