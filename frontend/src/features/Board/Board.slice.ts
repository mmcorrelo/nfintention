import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IBoard } from './Board.interfaces';

const BASE_URL = 'https://nfintention-default-rtdb.firebaseio.com';

export const boardApiSlice = createApi({
    reducerPath: '',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        prepareHeaders(headers) {
            headers.set('Content-Type', 'application/json');

            return headers;
        },
    }),
    endpoints(builder) {
        return {
            fetchBoards: builder.query<Array<IBoard>, number | void>({
                query: () => ({
                    url: '/boards.json',
                    responseHandler: (response) => response.json()
                }),
            }),
            createBoard: builder.mutation<IBoard, IBoard | void>({
                query: (board: IBoard) => ({
                    url: '/boards.json',
                    method: 'POST',
                    body: JSON.stringify(board),
                    responseHandler: (response) => response.json()
                }),

            }),
        }
    }
});


export const { useFetchBoardsQuery, useCreateBoardMutation } = boardApiSlice;
