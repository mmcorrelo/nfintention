import React from 'react';

import BoardDragList from '../Board/components/BoardDragList';
import BoardHeader from '../Board/components/BoardHeader';

const propTypes = {};

const Board = () => {
  return (
    <React.Fragment>
      <BoardHeader />
      <BoardDragList />
    </React.Fragment>
  );
};

Board.propTypes = propTypes;

export default Board;