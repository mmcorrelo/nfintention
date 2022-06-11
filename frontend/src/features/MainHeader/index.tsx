import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAstronaut, faSquareNfi } from '@fortawesome/free-solid-svg-icons';

import styles from './MainHeader.module.scss';
import MetamaskContext from '../../contexts/MetamaskContext';
import Button from '../../shared/components/Button';

const MainHeader = () => {
  const metaMaskContext = useContext(MetamaskContext);

  return (
    <header className={styles.container}>
      <nav>
        <div className={`${ styles.item } ${ styles.left }`}>
          <FontAwesomeIcon icon={faSquareNfi} size="3x" />
          <span>ntention</span>
        </div>
        <ul>
          {
            metaMaskContext.isConnected &&
            <li className={`${ styles.item } ${ styles.right }`}>
              <FontAwesomeIcon icon={faUserAstronaut} size="2x" tabIndex={0} />
            </li>
          }
          {
            !metaMaskContext.isConnected && 
            <li className={`${ styles.item } ${ styles.right }`}>
              <Button onClick={metaMaskContext.connect}>Connect Wallet</Button>
            </li>
          }
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
