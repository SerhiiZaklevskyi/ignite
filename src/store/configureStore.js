import {createStore, applyMiddleware} from "redux";
import {rootReducer} from "../reducers/index";
import logger from "redux-logger";
import thunk from "redux-thunk";
import {musicRequest, musicResponse, musicError} from "../actions/fetchAction";

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));

store.dispatch(dispatch => {
  dispatch(musicRequest());
  fetch("songs.json")
    .then(res => res.json())
    .then(data => {
      if (data.error) {
        throw data.error;
      }
      dispatch(musicResponse(data));
    })
    .catch(err => {
      dispatch(musicError(err));
    });
});
