import { configureStore } from "@reduxjs/toolkit";
import commentReducer from "./commentSlice";
import popupReducer from "./popupSlice";
// ...

const store = configureStore({
  reducer: { comments: commentReducer, popup: popupReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
