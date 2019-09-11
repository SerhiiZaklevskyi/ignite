import {SAVE_PLAYLIST} from "../actions/savePlaylistAction";

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
    default:
      return state;
  }
}
