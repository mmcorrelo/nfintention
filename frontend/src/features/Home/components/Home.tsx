import DragList from '../../Board/components/BoardDragList';

import styled from "styled-components";

const Dashboard = styled.div`
  width: 100%;
  height: calc(100vh - 40px);
  display: flex;
  justify-content: center;
  align-items: start;
  background: #026AA7;
`;

const propTypes = {};

const Home = () => {
  return (
    <Dashboard>
      <DragList />
    </Dashboard>
  );
};

Home.propTypes = propTypes;

export default Home;