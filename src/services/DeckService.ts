import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const deckAPI = createApi({
  reducerPath: 'deckAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://leitnersystemapp-db.herokuapp.com/' }),
  endpoints: (build) => ({
    fetchAllDecks: build.query({
      query: () => ({
        url: `/decks`,
      }),
    }),
  }),
});
