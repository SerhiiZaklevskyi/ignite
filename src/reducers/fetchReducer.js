import {
  MUSIC_REQUEST,
  MUSIC_RESPONSE,
  MUSIC_ERROR
} from "../actions/fetchAction";

const initialState = {
  isFetching: false,
  music: [],
  error: null
};

export function fetchReducer(state = initialState, action) {
  switch (action.type) {
    case MUSIC_REQUEST:
      return {...state, isFetching: true};
    case MUSIC_RESPONSE:
      return {...state, isFetching: false, music: action.payload};
    case MUSIC_ERROR:
      return {...state, isFetching: false, error: action.payload};

    default:
      return state;
  }
}
