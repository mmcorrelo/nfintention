import { configureStore } from '@reduxjs/toolkit';
import { boardApiSlice } from '../Board/Board.slice';

export const store = configureStore({
    reducer: {
        [boardApiSlice.reducerPath]: boardApiSlice.reducer
    },
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware()
            .concat(boardApiSlice.middleware);
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;