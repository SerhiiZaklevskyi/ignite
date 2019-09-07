import {combineReducers} from "redux";
import {fetchReducer} from "./fetchReducer";
import {trackReducer} from "./trackReducer";

export const rootReducer = combineReducers({
  fetchMusic: fetchReducer,
  trackAction: trackReducer
});
