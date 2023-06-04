import { createSlice } from "@reduxjs/toolkit";
import {
  getCurrentlySignedIn,
  signInUser,
  signOutUser,
  signUpUser,
} from "./auth.operations";
import { STATUS } from "../../constants/status.constants";

const initialState = {
  user: {
    avatar: "",
    login: null,
    email: null,
    userId: null,
  },
  status: STATUS.idle,
  isLoggedIn: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(signUpUser.pending, (state) => {
        state.status = STATUS.loading;
      })
      .addCase(signUpUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.status = STATUS.success;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(signUpUser.rejected, (state, { payload }) => {
        state.status = STATUS.error;
        state.error = payload;
      })
      .addCase(signInUser.pending, (state) => {
        state.status = STATUS.loading;
      })
      .addCase(signInUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.status = STATUS.success;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(signInUser.rejected, (state, { payload }) => {
        state.status = STATUS.error;
        state.error = payload;
      })
      .addCase(signOutUser.pending, (state) => {
        state.status = STATUS.loading;
      })
      .addCase(signOutUser.fulfilled, () => initialState)
      .addCase(signOutUser.rejected, (state, { payload }) => {
        state = initialState;
        state.error = payload;
      })
      .addCase(getCurrentlySignedIn.fulfilled, () => {})
      .addCase(getCurrentlySignedIn.rejected, (state, { payload }) => {
        state = initialState;
        state.error = payload;
      });
  },
});

export const authReducer = authSlice.reducer;
