import PropTypes, { InferProps } from 'prop-types';
import { useRef } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import styles from './AddBoard.module.scss';

import AddBoard from './AddBoard';
import { TAddBoardRef } from '../Board.interfaces';

const propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  isSaving: PropTypes.bool.isRequired
};

const AddBoardModal = (props: InferProps<typeof propTypes>) => {
  const addBoardFormRef = useRef<TAddBoardRef>();

  const onSubmitHandler = () => {
    addBoardFormRef?.current?.submitForm();
    props.onHide();
  }

  return (
    <Modal
      show={props.show}
      size="lg"
      onHide={props.onHide}
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add New Board</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AddBoard ref={addBoardFormRef} onSubmit={props.onSubmit} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={props.onHide}>Close</Button>
        <Button variant="success" onClick={onSubmitHandler}>
          {props.isSaving ? 'Saving...' : 'Save'}
        </Button>
      </Modal.Footer>
    </Modal>
  )
};

AddBoardModal.propTypes = propTypes;

export default AddBoardModal;