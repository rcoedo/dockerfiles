import { combineReducers } from "redux";
import { ADD_ACTION } from "app/actions";
import { routeReducer } from "redux-simple-router";

function count(state = 0, action) {
  switch (action.type) {
  case ADD_ACTION:
    return state + 1;
  default:
    return state;
  }
}

const rootReducer = combineReducers({
  count,
  routing: routeReducer
});

export default rootReducer;
