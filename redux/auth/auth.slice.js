import { createSlice } from "@reduxjs/toolkit";
import { signInUser, signUpUser } from "./auth.operations";

const initialState = {
  avatar: "",
  login: "",
  email: "",
  password: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(signUpUser.fulfilled, (state, action) => {
        console.log("action ", action);
        state.login = action.payload;
      })
      .addCase(signInUser.fulfilled, (state, action) => {
        console.log("action ", action);
        state = action.payload;
      });
  },
});

// const { actions, reducer } = authSlice;
// export const { createPost, updatePost, deletePost } = actions

export const authReducer = authSlice.reducer;
