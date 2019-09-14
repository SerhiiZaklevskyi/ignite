import {SAVE_PLAYLIST, REMOVE_MY_TRACK} from "../actions/savePlaylistAction";

const initialState = {
  savedPlaylist: []
};

export function savePlaylistReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_PLAYLIST:
      return {
        ...state,
        savedPlaylist: action.payload
      };
    case REMOVE_MY_TRACK:
      return {
        ...state,
        savedPlaylist: [
          ...state.savedPlaylist.filter(item => item !== action.payload)
        ]
      };
    default:
      return state;
  }
}
