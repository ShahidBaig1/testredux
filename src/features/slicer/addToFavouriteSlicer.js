import { createSlice } from "@reduxjs/toolkit";

const data = {
  favouriteData: [],
};

const favourite = createSlice({
  name: "favourite",
  initialState: data,

  reducers: {
    addToFavourite: (state, action) => {
      state.favouriteData.push(action.payload);
    },
  },
});
export const { addToFavourite } = favourite.actions;
export default favourite.reducer;
