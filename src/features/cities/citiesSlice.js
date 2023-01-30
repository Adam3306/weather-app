import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  savedCapitals: [],
};

export const citiesSlice = createSlice({
  name: "cities",
  initialState,
  reducers: {
    addCity: (state, action) => {
      if (state.savedCapitals.includes(action.payload)) return state;
      const newState = state.savedCapitals.concat(action.payload);

      return {
        ...state,
        savedCapitals: newState,
      };
    },
  },
});

export const { addCity, increment } = citiesSlice.actions;

export default citiesSlice.reducer;
