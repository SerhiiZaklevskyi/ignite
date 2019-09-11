import {combineReducers} from "redux";
import {fetchReducer} from "./fetchReducer";
import {trackReducer} from "./trackReducer";
import {savePlaylistReducer} from "./savePlaylistReducer";

export const rootReducer = combineReducers({
  fetchMusic: fetchReducer,
  trackAction: trackReducer,
  savePlaylist: savePlaylistReducer
});
