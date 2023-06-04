import { createSlice } from "@reduxjs/toolkit";
import {
  createComment,
  createPost,
  getComments,
  getPosts,
  getUserPosts,
} from "./posts.operations";
import { STATUS } from "../../constants/status.constants";

const initialState = {
  posts: [],
  userPosts: [],
  comments: [],
  status: STATUS.idle,
  error: null,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    incrementCommentsCount: (state, { payload }) => {
      const index = state.posts.findIndex(({ id }) => id === payload);
      state.posts[index].commentsCount += 1;

      const userIndex = state.userPosts.findIndex(({ id }) => id === payload);
      if (userIndex >= 0) {
        state.posts[userIndex].commentsCount += 1;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createPost.pending, (state) => {
        state.status = STATUS.loading;
      })
      .addCase(createPost.fulfilled, (state, { payload }) => {
        state.posts.push(payload);
        state.status = STATUS.success;
        state.error = null;
      })
      .addCase(createPost.rejected, (state, { payload }) => {
        state.status = STATUS.error;
        state.error = payload;
      })
      .addCase(getPosts.pending, (state) => {
        state.status = STATUS.loading;
      })
      .addCase(getPosts.fulfilled, (state, { payload }) => {
        state.posts = payload;
        state.status = STATUS.success;
        state.error = null;
      })
      .addCase(getPosts.rejected, (state, { payload }) => {
        state.status = STATUS.error;
        state.error = payload;
      })
      .addCase(getUserPosts.pending, (state) => {
        state.status = STATUS.loading;
      })
      .addCase(getUserPosts.fulfilled, (state, { payload }) => {
        state.userPosts = payload;
        state.status = STATUS.success;
        state.error = null;
      })
      .addCase(getUserPosts.rejected, (state, { payload }) => {
        state.status = STATUS.error;
        state.error = payload;
      })
      .addCase(createComment.pending, (state) => {
        state.status = STATUS.loading;
      })
      .addCase(createComment.fulfilled, (state, { payload }) => {
        // console.log("createComment payload =>", payload);
        state.comments.push(payload);
        // state.userPosts.commentCount = payload;
        state.status = STATUS.success;
        state.error = null;
      })
      .addCase(createComment.rejected, (state, { payload }) => {
        state.status = STATUS.error;
        state.error = payload;
      })
      .addCase(getComments.pending, (state) => {
        state.status = STATUS.loading;
      })
      .addCase(getComments.fulfilled, (state, { payload }) => {
        state.comments = payload;
        state.status = STATUS.success;
        state.error = null;
      })
      .addCase(getComments.rejected, (state, { payload }) => {
        state.status = STATUS.error;
        state.error = payload;
      });
  },
});

export const postsReducer = postsSlice.reducer;

export const { incrementCommentsCount } = postsSlice.actions;
