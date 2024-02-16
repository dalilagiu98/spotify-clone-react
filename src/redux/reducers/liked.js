import { TOGGLE_FAVORITE } from "../actions";

const initialState = {
  likedSongs: [],
};

const likedReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.likedSongs.findIndex(
        (song) => song.id === action.payload.id
      );
      if (existingIndex !== -1) {
        // If song is already in favorites, remove it
        return {
          ...state,
          likedSongs: state.likedSongs.filter(
            (song) => song.id !== action.payload.id
          ),
        };
      } else {
        // If song is not in favorites, add it
        return {
          ...state,
          likedSongs: [...state.likedSongs, action.payload],
        };
      }
    default:
      return state;
  }
};

export default likedReducer;
