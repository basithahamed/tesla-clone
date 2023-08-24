import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cars: ["Model S", "Model 3", "Model X", "Model Y"],
};

const carSlice = createSlice({
  name: "car",
  initialState, // Corrected the variable name here
  reducers: {},
});

export const selectCars = (state) => state.car.cars;
export default carSlice.reducer;
