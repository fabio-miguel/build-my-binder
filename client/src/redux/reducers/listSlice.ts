import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Card, ListState } from "../types";

const initialState: ListState = {
  isLoading: false,
  list: [],
  moreListCardsToLoad: false,
  nextListPageToLoad: "",
  selectedCards: [],
};

const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    updateList(state, action: PayloadAction<[]>) {
      state.list = action.payload;
      console.log(state.list);
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    moreListCardsToLoad(state, action: PayloadAction<boolean>) {
      state.moreListCardsToLoad = action.payload;
    },
    nextListPageToLoad(state, action: PayloadAction<string>) {
      state.nextListPageToLoad = action.payload;
    },
    selectedCard(state, action: PayloadAction<Card>) {
      state.selectedCards = [...state.selectedCards, action.payload];
    },
  },
});

export const {
  updateList,
  setLoading,
  moreListCardsToLoad,
  nextListPageToLoad,
  selectedCard,
} = listSlice.actions;

export default listSlice.reducer;
