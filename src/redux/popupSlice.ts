import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  visible: boolean;
}

const initialState: InitialState = {
  visible: false,
};

export const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    openModal: (state) => {
      state.visible = true;
    },
    closeModal: (state) => {
      state.visible = false;
    },
  },
});

export const { openModal, closeModal } = popupSlice.actions;
export default popupSlice.reducer;
