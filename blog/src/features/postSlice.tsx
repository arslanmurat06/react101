import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  createPost,
  deletePost,
  getAllPosts,
  getPost,
  updatePost,
} from "../api/posts";
import { PostDTO } from "../types/PostDTO";

export interface PostState {
  data: PostDTO[] | null;
  loading: boolean;
  error: string;
  deleted: boolean;
  updated: boolean;
  created: boolean;
}

const initialState: PostState = {
  data: null,
  loading: false,
  error: "",
  deleted: false,
  updated: false,
  created: false,
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //#region  Get All Posts
    builder.addCase(getAllPosts.pending, (state, action) => {
      state.loading = true;
      state.error = "";
      state.deleted = false;
      state.updated = false;
      state.created = false;
    });

    builder.addCase(
      getAllPosts.fulfilled,
      (state, action: PayloadAction<PostDTO[]>) => {
        state.loading = false;
        state.data = action.payload;
        state.error = "";
      }
    );

    builder.addCase(getAllPosts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? "";
    });

    //#endregion

    //#region Get Single Post

    builder.addCase(getPost.pending, (state, action) => {
      state.loading = true;
      state.error = "";
      state.deleted = false;
      state.updated = false;
      state.created = false;
    });

    builder.addCase(
      getPost.fulfilled,
      (state, action: PayloadAction<PostDTO>) => {
        state.loading = false;
        state.data = [action.payload];
        state.error = "";
      }
    );

    builder.addCase(getPost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? "";
    });

    //#endregion

    //#region Save Post

    builder.addCase(createPost.pending, (state, action) => {
      state.loading = true;
      state.error = "";
      state.data = [];
      state.deleted = false;
      state.updated = false;
      state.created = false;
    });

    builder.addCase(
      createPost.fulfilled,
      (state, action: PayloadAction<PostDTO>) => {
        state.data = [action.payload];
        state.loading = false;
        state.error = "";
        state.created = true;
      }
    );

    builder.addCase(createPost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? "";
    });

    //#endregion

    //#region delete post
    builder.addCase(deletePost.pending, (state) => {
      state.loading = true;
      state.error = "";
      state.deleted = false;
      state.updated = false;
      state.created = false;
    });

    builder.addCase(deletePost.fulfilled, (state) => {
      state.loading = false;
      state.error = "";
      state.deleted = true;
    });

    builder.addCase(deletePost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? "";
    });
    //#endregion

    //#region update post
    builder.addCase(updatePost.pending, (state, action) => {
      state.loading = true;
      state.error = "";
      state.data = [];
      state.deleted = false;
      state.updated = false;
      state.created = false;
    });

    builder.addCase(
      updatePost.fulfilled,
      (state, action: PayloadAction<PostDTO>) => {
        state.data = [action.payload];
        state.loading = false;
        state.error = "";
        state.updated = true;
      }
    );

    builder.addCase(updatePost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? "";
    });
    //#endregion
  },
});

export default postSlice.reducer;
