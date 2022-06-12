import React, { useState } from "react";

const { ethereum } = window;

export interface IMetamaskContext {
  isConnected: boolean;
  isInstalled: boolean;
  isConnecting: boolean;
  accounts: Array<string>;
  connect: () => Promise<void>;
  desconnect: () => void;
}

const defaultContext = {
  isConnected: false,
  isInstalled: false,
  isConnecting: false,
  accounts: [] as Array<string>,
  connect: () => Promise.resolve(),
  desconnect: () => {}
};

const MetamaskContext: React.Context<IMetamaskContext> = React.createContext(defaultContext);

const propTypes = {};

export const MetamaskContextProvider = (props: typeof propTypes & { children: JSX.Element }) => {
  const [isInstalled, setIsInstalled] = useState<boolean>(false);
  const [isConnecting, setIsConnecting] = useState<boolean>(false);
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [accounts, setAccounts] = useState<Array<string>>([]);

  const handleConnection = async () => {
    setIsInstalled(!!ethereum);
    setIsConnected(false);
    setAccounts([]);
    if (ethereum) {
      setIsConnecting(true);

      try {
        const requestedAccounts = await (ethereum.request({ method: "eth_requestAccounts" }) as Promise<Array<string>>);
        setAccounts(requestedAccounts);
        setIsConnecting(false);
        setIsConnected(true);
      } catch (err) {
        setIsConnecting(false);
        setIsConnected(false);
      }
    }
  };

  const handleDesconnection = () => {
    setIsConnecting(false);
    setIsConnected(false);
    setAccounts([]);
  }

  return (
    <MetamaskContext.Provider value={{
      isConnected,
      isConnecting,
      isInstalled,
      accounts,
      connect: handleConnection,
      desconnect: handleDesconnection,
    }}>
      {props.children}
    </MetamaskContext.Provider>
  )
}

MetamaskContextProvider.propTypes = propTypes;

export default MetamaskContext;