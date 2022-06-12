import { InferProps } from 'prop-types';
import React, { useContext, useState } from 'react';
import MetamaskContext from '../../../../contexts/MetamaskContext';
import AddBoardModalContainer from '../../../Board/containers/AddBoardModal/AddBoardModal.container';
import { EAccountOverlay } from '../../Account.enums';
import AccountOverlay from '../../components/AccountOverlay/AccountOverlay';

const propTypes = {};

const AccountOverlayContainer = (props: InferProps<typeof propTypes>) => {
  const metamaskContext = useContext(MetamaskContext);
  const [modalType, setModalType] = useState<EAccountOverlay>(EAccountOverlay.None);

  const onHideHandler = () => setModalType(EAccountOverlay.None);
  const onOverlayItemClickedHandler = (type: EAccountOverlay) => {
    switch (type) {
      case EAccountOverlay.Disconnect:
        metamaskContext.desconnect();
        break;
    }

    setModalType(type);
  };

  return (
    <React.Fragment>
      <AccountOverlay onOverlayItemClicked={onOverlayItemClickedHandler} />
      {
        <AddBoardModalContainer show={modalType === EAccountOverlay.AddBoard} onHide={onHideHandler} />
      }
    </React.Fragment>
  );
}

AccountOverlayContainer.propTypes = propTypes;

export default AccountOverlayContainer;