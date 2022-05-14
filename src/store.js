import { configureStore } from "@reduxjs/toolkit";
import getAllcountries from "./features/slicer/getAllcountriesSlicer";
import favourite from "./features/slicer/addToFavouriteSlicer";
export const store = configureStore({
  reducer: { getAllcountries, favourite },
});
