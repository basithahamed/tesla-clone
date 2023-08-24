import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import carReducer from "../features/carslice/carSlice"
export const store = configureStore({
  reducer: {
    car: carReducer,
  },
});
