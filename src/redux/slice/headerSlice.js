// src/features/header/headerSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk for fetching the header
export const fetchHeader = createAsyncThunk(
  "header/fetchHeader",
  async ({ roleId }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/header/${roleId}`
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const headerSlice = createSlice({
  name: "header",
  initialState: {
    headers: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHeader.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchHeader.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.headers = action.payload;
      })
      .addCase(fetchHeader.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default headerSlice.reducer;
