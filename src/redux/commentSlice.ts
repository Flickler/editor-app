import { createSlice } from "@reduxjs/toolkit";

type Comment = { id: number; title: string; comment?: string };

interface InitialState {
  data: Comment[];
}

const initialState: InitialState = {
  data: [
    {
      id: 0,
      title: "Adicione comentários",
      comment: "Você pode adicionar comentários quando quiser",
    },
  ],
};

export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    addComment: (state, action: { type: string; payload: Comment }) => {
      state.data = [...state.data, action.payload];
    },
    removeComment: (state, action: { type: string; payload: number }) => {
      state.data = state.data.filter(
        (comment) => comment.id !== action.payload
      );
    },
  },
});

export const { addComment, removeComment } = commentSlice.actions;
export default commentSlice.reducer;
