import { combineReducers } from "redux";
import { routeReducer } from "react-router-redux";

function containers(state = [], action) {
  switch (action.type) {
  default:
    return state;
  }
}

const rootReducer = combineReducers({
  containers,
  routing: routeReducer
});

export default rootReducer;
