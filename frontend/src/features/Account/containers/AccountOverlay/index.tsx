import { InferProps } from 'prop-types';
import React, { useContext, useState } from 'react';
import AuthContext from '../../../../contexts/AuthContext';
import AddBoardModalContainer from '../../../Board/containers/AddBoardModal';
import { EAccountOverlay } from '../../Account.enums';
import AccountOverlay from '../../components/AccountOverlay';

const propTypes = {};

const AccountOverlayContainer = (props: InferProps<typeof propTypes>) => {
  const authContext = useContext(AuthContext);
  // const [modalType, setModalType] = useState<EAccountOverlay>(EAccountOverlay.None);

  // const onHideHandler = () => setModalType(EAccountOverlay.None);
  const onOverlayItemClickedHandler = (type: EAccountOverlay) => {
    switch (type) {
      case EAccountOverlay.Disconnect:
        authContext.desconnect();
        break;
    }

    // setModalType(type);
  };

  return (
    <React.Fragment>
      <AccountOverlay onOverlayItemClicked={onOverlayItemClickedHandler} />
      {/* {
        <AddBoardModalContainer show={modalType === EAccountOverlay.AddBoard} onHide={onHideHandler} />
      } */}
    </React.Fragment>
  );
}

AccountOverlayContainer.propTypes = propTypes;

export default AccountOverlayContainer;