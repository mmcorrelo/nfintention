import styled from "styled-components";

import Board from '../Board';

const Dashboard = styled.div`
  width: 100%;
  height: calc(100vh - 40px);
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  background: #026AA7;
`;

const propTypes = {};

const Home = () => {
  return (
    <Dashboard>
      <Board/>
    </Dashboard>
  );
};

Home.propTypes = propTypes;

export default Home;