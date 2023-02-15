import { createSlice } from "@reduxjs/toolkit";
import { getcountries } from "../actions/action";

const initialState = {
  countryDetails: [],
  countryLoading: false,
  countryLoadedSuccess: false,
  countryLoadedFailed: false,
};

const getAllcountries = createSlice({
  name: "getAllcountries",
  initialState,
  reducers: {
    setInput: (state, action) => {
      if (action.payload != null) {
        state.countryDetails = state.countryDetails.filter((item) => {
          if (item.name.toLowerCase().includes(action.payload)) {
            return item;
          }
        });
      }
    },
  },

  extraReducers: {
    [getcountries.pending]: (state) => {
      state.countryLoading = true;
    },
    [getcountries.fulfilled]: (state, action) => {
      state.countryLoading = false;
      state.countryLoadedSuccess = true;
      state.countryLoadedFailed = false;
      state.countryDetails = action.payload;
    },
    [getcountries.rejected]: (state) => {
      state.countryLoading = false;
      state.countryLoadedSuccess = false;
      state.countryLoadedFailed = true;
    },
  },
});

export default getAllcountries.reducer;
export const { setInput } = getAllcountries.actions;
