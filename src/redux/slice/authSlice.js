// authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { removeSessionToken, setSessionToken } from "../../utils/tokenUtils";

// Thunk for logging in
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userCredentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        userCredentials
      );
      const { accessToken } = response.data;
      setToken(accessToken);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    error: null,
    userId: null,
    userName: null,
    email: null,
    roleId: null,
    status: "idle",
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      setSessionToken(action.payload);
    },
    clearToken: (state) => {
      state.token = null;
      removeSessionToken();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        const { accessToken, email, username, roleId, id } = action.payload;
        state.status = "succeeded";
        state.token = accessToken;
        state.roleId = roleId;
        state.userId = id;
        state.email = email;
        state.userName = username;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { clearToken, setToken } = authSlice.actions;
export default authSlice.reducer;
