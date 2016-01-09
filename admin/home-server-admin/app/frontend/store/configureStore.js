import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import createLoggerMiddleware from "redux-logger";
import rootReducer from "app/reducers";

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  createLoggerMiddleware()
)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
};
