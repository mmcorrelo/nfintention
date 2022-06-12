import PropTypes, { InferProps } from 'prop-types';
import React, { useState, forwardRef, useImperativeHandle } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styles from './AddBoard.module.scss';

import { IAddBoard, TAddBoardRef } from '../../Board.interfaces';

const propTypes: Record<string | symbol | number, PropTypes.Validator<any>> = {
  onSubmit: PropTypes.func.isRequired
};

const AddBoard = forwardRef((props: InferProps<typeof propTypes>, ref: React.ForwardedRef<TAddBoardRef | undefined>) => {
  const [data, setData] = useState<IAddBoard>({
    name: '',
    description: ''
  });

  useImperativeHandle(ref, () => ({
    submitForm() {
      props.onSubmit(data);
    }
  }));

  const onInputChangedHandler = (fieldName: string, ev: React.BaseSyntheticEvent) => {
    setData((prevData: IAddBoard) => ({ ...prevData, [fieldName]: ev.target.value }));
  };

  return (
    <Container>
      <Form>
        <Row>
          <Col sm={12}>
            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Board Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Board Name"
                value={data.name}
                onChange={onInputChangedHandler.bind(null, 'name')} />
            </Form.Group>
          </Col>
          <Col sm={12}>
            <Form.Group className="mb-3" controlId="owner">
              <Form.Label>Owner</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col sm={12}>
            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                value={data.description}
                onChange={onInputChangedHandler.bind(null, 'description')} />
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </Container>
  )
});

AddBoard.propTypes = propTypes;

export default AddBoard;