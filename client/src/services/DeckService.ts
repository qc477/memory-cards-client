import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IDeck } from '../models/IDeck';

export const deckAPI = createApi({
  reducerPath: 'deckAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://leitnersystemapp-db.herokuapp.com/' }),
  endpoints: (build) => ({
    fetchAllDecks: build.query<IDeck[], string>({
      query: () => ({
        url: `/decks`,
      }),
    }),
  }),
});
