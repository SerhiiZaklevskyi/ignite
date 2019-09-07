import {ADD_TRACK, REMOVE_TRACK} from "../actions/trackAction";

const initialState = {
  playlistTracks: [],
  track: {}
};

export function trackReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TRACK:
      return {...state, playlistTracks: action.playlistTracks};
    case REMOVE_TRACK:
      return {...state, playlistTracks: action.payload};

    default:
      return state;
  }
}
