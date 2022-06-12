import React, { useRef, useState } from 'react';
import PropTypes, { InferProps } from 'prop-types';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';

import styles from './AccountOverlay.module.scss';

import { EAccountOverlay } from '../../Account.enums';

const propTypes = {
  onOverlayItemClicked: PropTypes.func.isRequired
};

const AccountOverlay = (props: InferProps<typeof propTypes>) => {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (ev: React.BaseSyntheticEvent) => {
    setShow(!show);
    setTarget(ev.target);
  };

  const onClickOptionHandler = (type: EAccountOverlay, ev: React.BaseSyntheticEvent) => {
    props.onOverlayItemClicked(type);
    setShow(false);
  };

  return (
    <div ref={ref} className={styles['account-overlay']}>
      <FontAwesomeIcon onClick={handleClick} icon={faUserAstronaut} size="2x" />
      <Overlay
        rootClose
        onHide={() => setShow(false)}
        show={show}
        target={target}
        placement="bottom"
        container={ref}
        offset={[0, 16]}
        containerPadding={0}>
        <Popover>
          <Popover.Header as="h3">Account</Popover.Header>
          <Popover.Body className={`${ styles['account-overlay'] } ${ styles.body }`}>
            <ul className={`${ styles['account-overlay'] }`}>
              <li onClick={onClickOptionHandler.bind(null, EAccountOverlay.Disconnect)}>Disconnect</li>
            </ul>
          </Popover.Body>
        </Popover>
      </Overlay>
    </div>
  );
}

AccountOverlay.propTypes = propTypes;

export default AccountOverlay;