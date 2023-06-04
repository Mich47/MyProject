import { configureStore } from "@reduxjs/toolkit";

import { authReducer } from "./auth/auth.slice";
import { postsReducer } from "./posts/posts.slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postsReducer,
  },
});

export default { store };
