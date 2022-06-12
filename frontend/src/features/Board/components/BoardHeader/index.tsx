import PropType, { InferType } from "prop-types";
import styled from "styled-components";
import Button from 'react-bootstrap/Button';
import React, { useState } from "react";

import AddBoardModalContainer from "../../containers/AddBoardModal";

const BoardHeaderContainer = styled.div`
  width: 100%;
  margin-top: 5rem;
  padding: .5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BoardHeaderTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
`;

const propTypes = {
  title: PropType.string.isRequired
};

const defaultProps: InferType<typeof propTypes> = {
  title: ''
}

const BoardHeader = (props: InferType<typeof propTypes> = defaultProps) => {
  const [show, setShow] = useState<boolean>(false);

  const onHideModalHandler = () => setShow(false);
  const onShowModalHandler = () => setShow(true);

  return (
    <React.Fragment>
      <BoardHeaderContainer>
        <BoardHeaderTitle>{props.title}</BoardHeaderTitle>
        <Button variant="primary" onClick={onShowModalHandler}>Add Board</Button>
      </BoardHeaderContainer>
      <AddBoardModalContainer show={show} onHide={onHideModalHandler} />
    </React.Fragment>
  )
}

BoardHeader.propTypes = propTypes;
BoardHeader.defaultProps = defaultProps;

export default BoardHeader;
