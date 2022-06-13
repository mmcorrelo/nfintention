import React, { useEffect, useMemo, useState } from "react";
import { IAccountResponse } from "../../features/Account/Account.interfaces";
import { accountApiSlice, useCreateAccountMutation } from "../../features/Account/Account.slice";
import { useAppDispatch, useAppSelector } from "../../features/App/App.hooks";

const { ethereum } = window;

export interface IAuthContext {
  isConnected: boolean;
  isInstalled: boolean;
  isConnecting: boolean;
  isLoading: boolean;
  wallet: Partial<IAccountResponse>;
  connect: () => Promise<void>;
  desconnect: () => void;
}

const defaultContext = {
  isConnected: false,
  isInstalled: false,
  isConnecting: false,
  isLoading: false,
  wallet: {},
  connect: () => Promise.resolve(),
  desconnect: () => { }
};

const AuthContext: React.Context<IAuthContext> = React.createContext(defaultContext);

const propTypes = {};

export const AuthContextProvider = (props: typeof propTypes & { children: JSX.Element }) => {
  const dispatch = useAppDispatch();
  const [isInstalled, setIsInstalled] = useState<boolean>(false);
  const [isConnecting, setIsConnecting] = useState<boolean>(false);
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [address, setAddress] = useState<string | undefined>(undefined);
  const [createAccountTrigger] = useCreateAccountMutation();

  const selectAccount = useMemo(
    () => accountApiSlice.endpoints.fetchAccount.select(address),
    [address]
  )
  const { data, isLoading } = useAppSelector(selectAccount);

  useEffect(() => {
    if (address) {
      const result = dispatch(accountApiSlice.endpoints.fetchAccount.initiate(address));

      return result.unsubscribe;
    }
  }, [dispatch, address]);

  useEffect(() => {
    const createAccount = async () => {
      if (address && !data?.id) {
        await createAccountTrigger({ address, defaultBoard: undefined });
      }

    }
    createAccount();
  }, [data, createAccountTrigger]);

  const handleConnection = async () => {
    let currentAddress = undefined;

    setIsInstalled(!!ethereum);
    setIsConnected(false);

    if (ethereum) {
      setIsConnecting(true);

      try {
        const accounts = await (ethereum.request({ method: "eth_requestAccounts" }) as Promise<Array<string>>);
        const [address] = accounts;
        currentAddress = address;

        setIsConnecting(false);
        setIsConnected(true);
      } catch (err) {
        setIsConnecting(false);
        setIsConnected(false);

        currentAddress = undefined;
      }
    }

    setAddress(currentAddress);
  };

  const handleDesconnection = () => {
    setIsConnecting(false);
    setIsConnected(false);
    setAddress(undefined);
  }

  return (
    <AuthContext.Provider value={{
      isConnected,
      isConnecting,
      isInstalled,
      isLoading,
      wallet: data || {},
      connect: handleConnection,
      desconnect: handleDesconnection,
    }}>
      {props.children}
    </AuthContext.Provider>
  )
}

AuthContextProvider.propTypes = propTypes;

export default AuthContext;