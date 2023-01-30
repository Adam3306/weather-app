import { createSlice } from "@reduxjs/toolkit";
import { getAllCapitals } from "../../utils";

const initialState = {
  capitals: getAllCapitals(),
};

export const capitalsSlice = createSlice({
  name: "capitals",
  initialState,
});

export default capitalsSlice.reducer;
