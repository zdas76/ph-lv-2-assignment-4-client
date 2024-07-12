import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  // baseUrl: "https://assig-4-server.vercel.app/api/v1/",
  baseUrl: "http://localhost:5000/api/v1/",
  // credentials: "include",
  // prepareHeaders: (headers, { getState }) => {
  //   return headers.set("Content-Type", `application/json`);
  // },
});

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQuery,
  tagTypes: ["product"],
  endpoints: () => ({}),
});
