import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import logger from "redux-logger";

import capitalsReducer from "../features/capitals/capitalsSlice";
import citiesReducer from "../features/cities/citiesSlice";

import { apiSlice } from "../features/weather/weatherSlice";

export const store = configureStore({
  reducer: {
    capitals: capitalsReducer,
    cities: citiesReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([/*logger*/ apiSlice.middleware]),
});

setupListeners(store.dispatch);
