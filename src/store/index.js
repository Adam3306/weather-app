import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import logger from "redux-logger";
import capitalsReducer from "../features/capitals/capitalsSlice";
import { apiSlice } from "../features/weather/weatherSlice";

export const store = configureStore({
  reducer: {
    capitals: capitalsReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

setupListeners(store.dispatch);
