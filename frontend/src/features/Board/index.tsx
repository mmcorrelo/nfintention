import React from 'react';

import BoardDragList from '../Board/components/BoardDragList';
import BoardHeaderContainer from './containers/BoardHeader';

const propTypes = {};

const Board = () => {
  return (
    <React.Fragment>
      <BoardHeaderContainer />
      <BoardDragList />
    </React.Fragment>
  );
};

Board.propTypes = propTypes;

export default Board;