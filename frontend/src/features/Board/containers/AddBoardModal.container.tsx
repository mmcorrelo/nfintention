import PropTypes, { InferProps } from 'prop-types';
import React, { useEffect } from 'react';
import { IAddBoard } from '../Board.interfaces';

import styles from './AddBoardModal.container.module.scss';

import AddBoardModal from '../components/AddBoardModal';
import { useCreateBoardMutation } from '../Board.slice';

const propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
};

const AddBoardModalContainer = (props: InferProps<typeof propTypes>) => {
  const [createBoard, { isLoading }] = useCreateBoardMutation();

  const onSubmitHandler = (formData: IAddBoard) => {
    createBoard({ ...formData, columns: [] });
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