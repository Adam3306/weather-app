import { createSlice } from "@reduxjs/toolkit";
import { getCapitalByCurrentLocation } from "../../utils";

const initialState = {
  cities: [getCapitalByCurrentLocation()],
};

export const citiesSlice = createSlice({
  name: "cities",
  initialState,
  reducers: {
    addCity: (state, action) => {
      console.log(action);
      // TODO: concat city to cities
    },
  },
});

export const { addCity } = citiesSlice.actions;

export default citiesSlice.reducer;
