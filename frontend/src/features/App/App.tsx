import React, { useContext } from 'react';

import AuthContext from '../../contexts/AuthContext';
import Home from '../Home';
import Login from '../Login';
import MainFooter from '../MainFooter';
import MainHeader from '../MainHeader';

import './App.scss';

function App() {
  const wallet = useContext(AuthContext);

  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!wallet.isConnected && <Login />}
        {wallet.isConnected && <Home />}
      </main>
      <MainFooter />
    </React.Fragment>
  )
}

export default App;
