import {
  ADD_TRACK,
  REMOVE_TRACK,
  PLAYLIST_SAVED,
  DISPLAY_SAVEMSG,
  SAVE_NAME,
  NEW_SEARCH
} from "../actions/trackAction";

const initialState = {
  playlistTracks: [],
  saveMsg: "",
  nameValue: "New Playlist"
};

export function trackReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TRACK:
      return {
        ...state,
        playlistTracks: [...state.playlistTracks, action.payload]
      };
    case REMOVE_TRACK:
      return {
        ...state,
        playlistTracks: [
          ...state.playlistTracks.filter(item => item !== action.payload)
        ]
      };
    case DISPLAY_SAVEMSG:
      return {
        ...state,
        saveMsg: action.payload
      };
    case PLAYLIST_SAVED:
      return {
        ...state,
        playlistTracks: []
      };
    case SAVE_NAME:
      return {
        ...state,
        nameValue: action.payload
      };
    case NEW_SEARCH:
      return {
        ...state,
        saveMsg: "",
        nameValue: "New Playlist"
      };

    default:
      return state;
  }
}
