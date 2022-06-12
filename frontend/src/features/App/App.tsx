import React, { useContext } from 'react';

import MetamaskContext from '../../contexts/MetamaskContext';
import Home from '../Home';
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
        {metamaskContext.isConnected && <Home />}
      </main>
      <MainFooter />
    </React.Fragment>
  )
}

export default App;
