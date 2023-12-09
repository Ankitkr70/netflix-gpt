import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlaying: [],
    trailerID: null,
  },

  reducers: {
    addNowPlaying: (state, actions) => {
      state.nowPlaying = actions.payload;
    },

    addTrailerID: (state, actions) => {
      state.trailerID = actions.payload;
    },
  },
});

export const { addNowPlaying, addTrailerID } = moviesSlice.actions;
export default moviesSlice.reducer;
