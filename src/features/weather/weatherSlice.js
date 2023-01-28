import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { WEATHER_API_BASE_URL } from "../../utils/constants";

export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: WEATHER_API_BASE_URL,
  }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    getWeather: builder.query({
      query: (city) =>
        `/weather?q=${city}&appid=${process.env.REACT_APP_OPEN_WEATHER_MAP_API_TOKEN}`,
    }),
  }),
});
export const { useGetWeatherQuery } = apiSlice;
