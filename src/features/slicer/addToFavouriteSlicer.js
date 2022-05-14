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
    removeFromFavourite: (state, action) => {
      state.favouriteData = state.favouriteData.filter(
        (item) => item.name !== action.payload
      );
    },
  },
});
export const { addToFavourite, removeFromFavourite } = favourite.actions;
export default favourite.reducer;
