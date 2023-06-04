import { createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import { db, storage } from "../../firebase/config";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  increment,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const uploadPicture = async (picture) => {
  // Upload file
  const response = await fetch(picture);
  const file = await response.blob();

  const storageRef = ref(storage, `images/${nanoid()}.jpg`);

  const snapshot = await uploadBytes(storageRef, file);

  const url = await getDownloadURL(snapshot.ref);

  return url;
};

export const createPost = createAsyncThunk(
  "posts/create",
  async (credentials, thunkApi) => {
    const { userId, coords, login, location, picture, title } = credentials;

    try {
      // Upload file
      const pictureUrl = await uploadPicture(picture);

      const newPost = {
        picture: pictureUrl,
        title,
        location,
        coords,
        author: login,
        authorId: userId,
        commentsCount,
        likesCount,
        date: new Date().toISOString(),
      };

      try {
        const postRef = await addDoc(collection(db, "posts"), newPost);

        return { ...newPost, id: postRef.id };
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    } catch (error) {
      const rejectMsg = error.message;
      return thunkApi.rejectWithValue(rejectMsg);
    }
  }
);

export const getPosts = createAsyncThunk("posts/get", async (_, thunkApi) => {
  try {
    // const first = query(
    //   collection(db, "cities"),
    //   orderBy("population"),
    //   limit(25)
    // );
    // const documentSnapshots = await getDocs(first);

    const coll = collection(db, "posts");
    const querySnapshot = await getDocs(coll);

    const posts = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    return posts;
  } catch (error) {
    const rejectMsg = error.message;
    return thunkApi.rejectWithValue(rejectMsg);
  }
});

export const getUserPosts = createAsyncThunk(
  "posts/getUserPosts",
  async (userId, thunkApi) => {
    try {
      // const first = query(
      //   collection(db, "cities"),
      //   orderBy("population"),
      //   limit(25)
      // );
      // const documentSnapshots = await getDocs(first);

      const q = query(collection(db, "posts"), where("authorId", "==", userId));

      const querySnapshot = await getDocs(q);

      const posts = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      return posts;
    } catch (error) {
      const rejectMsg = error.message;
      return thunkApi.rejectWithValue(rejectMsg);
    }
  }
);

export const createComment = createAsyncThunk(
  "posts/createComment",
  async (credentials, thunkApi) => {
    const { userId, avatar, comment, login, postId } = credentials;

    try {
      // Upload file

      const newComment = {
        comment,
        avatar,
        author: login,
        authorId: userId,
        createdAt: new Date().toISOString(),
      };

      const postDocRef = doc(db, "posts", postId);

      const commentRef = await addDoc(
        collection(postDocRef, "comments"),
        newComment
      );

      // Atomically increment the comments Count
      await updateDoc(postDocRef, {
        commentsCount: increment(1),
      });

      // console.log("Document written with ID: ", commentRef.id);

      return { ...newComment, id: commentRef.id };
    } catch (error) {
      const rejectMsg = error.message;
      return thunkApi.rejectWithValue(rejectMsg);
    }
  }
);

export const getComments = createAsyncThunk(
  "posts/getComments",
  async (postId, thunkApi) => {
    try {
      const querySnapshot = await getDocs(
        collection(db, "posts", postId, "comments")
      );

      const comments = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      return comments;
    } catch (error) {
      const rejectMsg = error.message;
      return thunkApi.rejectWithValue(rejectMsg);
    }
  }
);
