import { createSlice } from "@reduxjs/toolkit";
import { getCountryData } from "../actions/action";

const initialState = {
  singleCountryDetails: [],
  countryLoading: false,
  countryLoadedSuccess: false,
  countryLoadedFailed: false,
};

const getSingleDetails = createSlice({
  name: "getSingleDetails",
  initialState,
  extraReducers: {
    [getCountryData.pending]: (state) => {
      state.countryLoading = true;
    },
    [getCountryData.fulfilled]: (state, action) => {
      state.countryLoading = false;
      state.countryLoadedSuccess = true;
      state.countryLoadedFailed = false;
      state.singleCountryDetails = action.payload;
    },
    [getCountryData.rejected]: (state) => {
      state.countryLoading = false;
      state.countryLoadedSuccess = false;
      state.countryLoadedFailed = true;
    },
  },
});

export default getSingleDetails.reducer;
