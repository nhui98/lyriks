import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { RootObject } from "./shazamCore.types";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "d51e2af3c4msh7fded9acca13f47p16757cjsnf6c500ab14f0"
      );

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query<RootObject[], void>({
      query: () => "/charts/world",
    }),
  }),
});

export const { useGetTopChartsQuery } = shazamCoreApi;
