import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import ApiUtils from '../../utils/api.utils';
import { IAddBoardPayload, IBoardResponse } from './Board.interfaces';

export const boardApiSlice = createApi({
    reducerPath: 'boards',
    baseQuery: fetchBaseQuery({
        baseUrl: ApiUtils.BASE_URL,
        prepareHeaders(headers) {
            headers.set('Content-Type', 'application/json');

            return headers;
        },
    }),
    tagTypes: ['Board'],
    endpoints(builder) {
        return {
            fetchBoards: builder.query<Array<IBoardResponse>, string | void>({
                query: (account: string) => ({
                    url: `/${ account }/boards.json`,
                    responseHandler: ApiUtils.convert
                }),
                providesTags: ['Board']
            }),
            createBoard: builder.mutation<IBoardResponse, IAddBoardPayload | void>({
                query: (request: IAddBoardPayload) => ({
                    url: `/${ request.account }/boards.json`,
                    method: 'POST',
                    body: request,
                    responseHandler: ApiUtils.convert
                }),
            }),
        }
    }
});

export const { useFetchBoardsQuery, useCreateBoardMutation } = boardApiSlice;
