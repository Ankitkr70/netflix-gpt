import { createSlice } from "@reduxjs/toolkit";

const paginationSlice = createSlice({
  name: "pagination",
  initialState: {
    currentPage: 1,
    totalPages: 1,
  },

  reducers: {
    changeCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },

    updateTotalPages: (state, action) => {
      state.totalPages = action.payload;
    },
    resetDefaultPage: (state, _) => {
      state.currentPage = 1;
      state.totalPages = 1;
    },
  },
});

export const { changeCurrentPage, updateTotalPages, resetDefaultPage } =
  paginationSlice.actions;
export default paginationSlice.reducer;
