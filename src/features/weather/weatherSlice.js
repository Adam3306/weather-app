import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { constants, getCityId } from "../../utils";

export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: constants.WEATHER_API_BASE_URL,
  }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    getWeather: builder.query({
      query: (city) =>
        `/weather?id=${getCityId(city)}&appid=${
          process.env.REACT_APP_OPEN_WEATHER_MAP_API_TOKEN
        }&units=metric`,
    }),
  }),
});
export const { useGetWeatherQuery } = apiSlice;
