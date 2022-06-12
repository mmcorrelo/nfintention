import { configureStore } from '@reduxjs/toolkit';
import { accountApiSlice } from '../Account/Account.slice';
import { boardApiSlice } from '../Board/Board.slice';

export const store = configureStore({
    reducer: {
        [accountApiSlice.reducerPath]: accountApiSlice.reducer,
        [boardApiSlice.reducerPath]: boardApiSlice.reducer,
    },
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware().concat(boardApiSlice.middleware, accountApiSlice.middleware);
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
