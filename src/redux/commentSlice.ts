import { createSlice } from "@reduxjs/toolkit";

type Comment = { title: string; comment?: string };

export interface InitialState {
  data: Comment[];
}

const initialState: InitialState = {
  data: [
    { title: "comentario 1", comment: "Comentario..." },
    { title: "comentario 2", comment: "Comentario..." },
  ],
};

export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    addComment: (state, action: { type: string; payload: Comment }) => {
      state.data = [...state.data, action.payload];
    },
  },
});

export const { addComment } = commentSlice.actions;
export default commentSlice.reducer;
