import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareNfi } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';

import AuthContext from '../../contexts/AuthContext';
import AccountOverlayContainer from '../Account/containers/AccountOverlay';

import styles from './MainHeader.module.scss';

const MainHeader = () => {
  const wallet = useContext(AuthContext);

  return (
    <header className={styles.container}>
      <nav>
        <div className={`${ styles.item } ${ styles.left }`}>
          <FontAwesomeIcon icon={faSquareNfi} size="3x" />
          <span>ntention</span>
        </div>
        <ul className={styles['main-header']}>
          {
            wallet.isConnected &&
            <li className={`${ styles.item } ${ styles.right }`}>
              <AccountOverlayContainer/>
            </li>
          }
          {
            !wallet.isConnected && 
            <li className={`${ styles.item } ${ styles.right }`}>
              <Button variant="primary" onClick={wallet.connect}>Connect Wallet</Button>
            </li>
          }
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
