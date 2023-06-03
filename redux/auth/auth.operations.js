import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase/config";

export const signUpUser = createAsyncThunk(
  "auth/signUp",
  async (credentials, thunkApi) => {
    console.log("credentials ", credentials);
    const { email, password } = credentials;

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // Signed in
      const user = userCredential.user;
      console.log("user ", user);
    } catch (error) {
      const rejectMsg = error.message;
      thunkApi.rejectWithValue(rejectMsg);
    }
  }
);

export const signInUser = createAsyncThunk(
  "auth/signIn",
  async (credentials, thunkApi) => {
    console.log("credentials ", credentials);
    const { email, password } = credentials;

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      // Signed in
      const user = userCredential.user;
      console.log("user ", user);
    } catch (error) {
      const rejectMsg = error.message;
      thunkApi.rejectWithValue(rejectMsg);
    }
  }
);
