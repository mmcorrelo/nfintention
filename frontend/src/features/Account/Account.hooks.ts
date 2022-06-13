
import { useCallback, useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import { useUpdateAccountMutation } from "../Account/Account.slice";
import { IBoard } from "../Board/Board.interfaces";

export const useUpdateAccountDefaultBoardMutation = () => {
    const authContext = useContext(AuthContext);
    const { address } = authContext.wallet;
    const [updateAccount] = useUpdateAccountMutation();

    const updateAccountDefaultBoardCallback = useCallback(async (board: IBoard) => {
        if (board && address) {
            await updateAccount({ address, defaultBoard: board.id })
        }
    }, [address]);

    return [updateAccountDefaultBoardCallback];
};

