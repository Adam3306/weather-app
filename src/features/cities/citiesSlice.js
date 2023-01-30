import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  savedCapitals: [],
  value: 10,
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
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
  },
});

export const { addCity, increment } = citiesSlice.actions;

export default citiesSlice.reducer;
