import {createStore, applyMiddleware, compose} from "redux";
import {rootReducer} from "../reducers/index";
import logger from "redux-logger";
import thunk from "redux-thunk";

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
