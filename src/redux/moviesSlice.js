import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlaying: [],
    popularMovies: [],
    topRatedMovies: [],
    upcomingMovies: [],
    searchedMovies: [],
    searchQuery: "",
    trailerID: null,
  },

  reducers: {
    addNowPlaying: (state, actions) => {
      state.nowPlaying = actions.payload;
    },
    addPopularMovies: (state, actions) => {
      state.popularMovies = actions.payload;
    },
    addTopRatedMovies: (state, actions) => {
      state.topRatedMovies = actions.payload;
    },
    addUpcomingMovies: (state, actions) => {
      state.upcomingMovies = actions.payload;
    },

    addSearchedMovies: (state, actions) => {
      state.searchedMovies = actions.payload;
    },

    addSearchQuery: (state, actions) => {
      state.searchQuery = actions.payload;
    },

    addTrailerID: (state, actions) => {
      state.trailerID = actions.payload;
    },
  },
});

export const {
  addNowPlaying,
  addTrailerID,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  addSearchedMovies,
  addSearchQuery,
} = moviesSlice.actions;
export default moviesSlice.reducer;
