import { SAVE_SEARCH_RESULTS } from "../actions";

const initialState = {
  searchResults: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: [...state.searchResults, action.payload],
      };
    default:
      return state;
  }
};

export default searchReducer;
