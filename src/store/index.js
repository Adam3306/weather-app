import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import capitalsReducer from "../features/capitals/capitalsSlice";

export const store = configureStore({
  reducer: {
    capitals: capitalsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
