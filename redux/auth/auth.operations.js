import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase/config";

export const signUpUser = createAsyncThunk(
  "auth/signUp",
  async (credentials, thunkApi) => {
    const { email, password, login, avatar } = credentials;

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Signed in

      await updateProfile(auth.currentUser, {
        displayName: login,
        photoURL: avatar,
      });
      // Profile updated!

      const user = auth.currentUser;

      return {
        avatar: user.photoURL,
        login: user.displayName,
        email: user.email,
        userId: user.uid,
      };
    } catch (error) {
      const rejectMsg = error.message;
      return thunkApi.rejectWithValue(rejectMsg);
    }
  }
);

export const signInUser = createAsyncThunk(
  "auth/signIn",
  async (credentials, thunkApi) => {
    const { email, password } = credentials;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Signed in

      const user = auth.currentUser;

      return {
        avatar: user.photoURL,
        login: user.displayName,
        email: user.email,
        userId: user.uid,
      };
    } catch (error) {
      const rejectMsg = error.message;
      return thunkApi.rejectWithValue(rejectMsg);
    }
  }
);

export const signOutUser = createAsyncThunk(
  "auth/signOut",
  async (_, thunkApi) => {
    try {
      await auth.signOut();
    } catch (error) {
      const rejectMsg = error.message;
      return thunkApi.rejectWithValue(rejectMsg);
    }
  }
);

export const getCurrentlySignedIn = createAsyncThunk(
  "auth/CurrentlySignedIn",
  async (_, thunkApi) => {
    try {
      onAuthStateChanged(auth, async (user) => {
        if (!user) {
          await thunkApi.dispatch(signOutUser()).unwrap();
        }
      });
    } catch (error) {
      const rejectMsg = error.message;
      return thunkApi.rejectWithValue(rejectMsg);
    }
  }
);
