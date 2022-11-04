import { IDeck } from '@Models/IDeck';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

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
