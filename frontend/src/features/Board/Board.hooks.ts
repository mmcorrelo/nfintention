
import { useContext, useEffect, useMemo } from "react";
import AuthContext from "../../contexts/AuthContext";
import { useAppDispatch, useAppSelector } from "../App/App.hooks";
import { boardApiSlice } from "./Board.slice";

export const useFetchAccountBoards = () => {
    const dispatch = useAppDispatch();
    const authContext = useContext(AuthContext);
    const { address } = authContext.wallet;
    const selectAccount = useMemo(() => boardApiSlice.endpoints.fetchBoards.select(address), [address]);
    const result = useAppSelector(selectAccount);

    useEffect(() => {
        let subscription;

        if (address) {
            subscription = dispatch(boardApiSlice.endpoints.fetchBoards.initiate(address));
        }

        return subscription?.unsubscribe;

    }, [dispatch, address]);

    return result;
};
