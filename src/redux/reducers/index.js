import { ADD_TO_PLAYLIST } from "../actions";

const initialState = {
  isActive: [],
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_PLAYLIST:
      return {
        ...state,
        isActive: [action.payload],
      };
    default:
      return state;
  }
};

export default mainReducer;
