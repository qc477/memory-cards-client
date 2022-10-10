import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IDeck } from '../models/IDeck';

export const deckAPI = createApi({
  reducerPath: 'deckAPI',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.BASE_URL as string }),
  endpoints: (build) => ({
    fetchAllDecks: build.query<IDeck[], string>({
      query: () => ({
        url: `/decks`,
      }),
    }),
  }),
});
