import { combineReducers } from "@reduxjs/toolkit";
import ListReducer from "./listSlice";

const rootReducer = combineReducers({
  list: ListReducer,
});

export default rootReducer;
