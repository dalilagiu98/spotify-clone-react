export const ADD_TO_PLAYLIST = "ADD_TO_PLAYLIST";
export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";
export const SAVE_SEARCH_RESULTS = "SAVE_SEARCH_RESULTS";

export const addToPlaylistAction = (song) => ({
  type: ADD_TO_PLAYLIST,
  payload: song,
});

export const toggleFavoriteAction = (song) => ({
  type: TOGGLE_FAVORITE,
  payload: song,
});

export const saveSearchResultsAction = (results) => ({
  type: SAVE_SEARCH_RESULTS,
  payload: results,
});

export const searchSongAction = (searchQuery) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${searchQuery}`
      );
      if (response.ok) {
        const data = await response.json();
        dispatch(saveSearchResultsAction(data.data.slice(0, 5)));
      } else {
        throw new Error("Errore nella fetch");
      }
    } catch (error) {
      console.error(error);
    }
  };
};
