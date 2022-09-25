import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { Song, SongDetails } from "./shazamCore.types";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", import.meta.env.VITE_API_KEY);

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query<Song[], void>({
      query: () => "/charts/world",
    }),
    getSongDetails: builder.query<SongDetails, string>({
      query: (songid) => `/tracks/details?track_id=${songid}`,
    }),
    getSongRelated: builder.query<Song[], string>({
      query: (songid) => `/tracks/related?track_id=${songid}`,
    }),
    getArtistDetails: builder.query({
      query: (artistId) => `/artists/details?artist_id=${artistId}`,
    }),
    getSongsByCountry: builder.query<Song[], string>({
      query: (countryCode) => `/charts/country?country_code=${countryCode}`,
    }),
    getSongsByGenre: builder.query<Song[], string>({
      query: (genre) => `/charts/world?genre_code=${genre}`,
    }),
    getSongsBySearch: builder.query<Song[], string>({
      query: (searchTerm) =>
        `/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`,
    }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
  useGetArtistDetailsQuery,
  useGetSongsByCountryQuery,
  useGetSongsByGenreQuery,
  useGetSongsBySearchQuery,
} = shazamCoreApi;
