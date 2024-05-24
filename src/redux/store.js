// store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import roleReducer from "./slice/roleSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    role: roleReducer,
  },
});

export default store;
