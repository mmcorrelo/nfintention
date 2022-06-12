
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IAccountPayload, IAccountResponse } from './Account.interfaces';
import ApiUtils from '../../utils/api.utils';

export const accountApiSlice = createApi({
    reducerPath: 'account',
    baseQuery: fetchBaseQuery({
        baseUrl: ApiUtils.BASE_URL,
        prepareHeaders(headers) {
            headers.set('Content-Type', 'application/json');

            return headers;
        },
    }),
    tagTypes: ['Account'],
    endpoints(builder) {
        return {
            fetchAccount: builder.query<IAccountResponse, string | void>({
                query: (account: string) => ({
                    url: `/accounts/${ account }.json`,
                    responseHandler: ApiUtils.convert
                }),
                providesTags: ['Account'],
            }),
            createAccount: builder.mutation<IAccountResponse, IAccountPayload | void>({
                query: (request: IAccountPayload) => ({
                    url: `/accounts/${ request.address }.json`,
                    method: 'POST',
                    body: request,
                    responseHandler: ApiUtils.convertToId
                })
            }),
            updateAccount: builder.mutation<IAccountResponse, IAccountPayload | void>({
                query: (request: IAccountPayload) => ({
                    url: `/accounts/${ request.address }.json`,
                    method: 'PUT',
                    body: request,
                    responseHandler: ApiUtils.convert
                })
            }),
        }
    }
});

export const { useFetchAccountQuery, useCreateAccountMutation, useUpdateAccountMutation } = accountApiSlice;
