import React, { useContext } from 'react';

import MetamaskContext from '../../contexts/MetamaskContext';
import HomeContainer from '../Home/containers/Home.container';
import Login from '../Login';
import MainFooter from '../MainFooter';
import MainHeader from '../MainHeader';

import './App.scss';

function App() {
  const metamaskContext = useContext(MetamaskContext);

  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!metamaskContext.isConnected && <Login />}
        {metamaskContext.isConnected && <HomeContainer />}
      </main>
      <MainFooter />
    </React.Fragment>
  )
}

export default App;
