import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Card, ListState } from "../types";

const initialState: ListState = {
  isLoading: false,
  list: [],
};

const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    updateList(state, action: PayloadAction<Card[]>) {
      state.list = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
});

export const { updateList, setLoading } = listSlice.actions;

export default listSlice.reducer;
