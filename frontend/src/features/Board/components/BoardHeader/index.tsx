import { InferType } from "prop-types";
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
  justify-content: end;
`;

const propTypes = {};

const BoardHeader = (props: InferType<typeof propTypes>) => {
  const [show, setShow] = useState<boolean>(false);

  const onHideModalHandler = () => setShow(false);
  const onShowModalHandler = () => setShow(false);

  return (
    <React.Fragment>
      <BoardHeaderContainer>
        <Button variant="primary" onClick={onShowModalHandler}>Add Board</Button>
      </BoardHeaderContainer>
      <AddBoardModalContainer show={show} onHide={onHideModalHandler} />
    </React.Fragment>
  )
}

export default BoardHeader;

BoardHeader.propTypes = propTypes;