import { configureStore, combineReducers } from "@reduxjs/toolkit";
import likedReducer from "../reducers/liked";
import mainReducer from "../reducers";
import searchReducer from "../reducers/searchReducer";

const bigReducer = combineReducers({
  main: mainReducer,
  liked: likedReducer,
  search: searchReducer,
});

const store = configureStore({
  reducer: bigReducer,
});

export default store;
