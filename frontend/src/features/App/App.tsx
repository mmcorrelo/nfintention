import React, { useContext } from 'react';

import MetamaskContext from '../../contexts/MetamaskContext';
import HomeContainer from '../Home/containers/Home';
import Login from '../Login/components/Login';
import MainFooter from '../MainFooter/components';
import MainHeader from '../MainHeader/components';

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
