import { createStore, applyMiddleware, compose } from "redux";
import { syncHistory } from "react-router-redux";
import { browserHistory } from "react-router";
import thunk from "redux-thunk";
import DevTools from "app/components/dev-tools";
import rootReducer from "app/reducers";

const reduxRouter = syncHistory(browserHistory);

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk, reduxRouter),
      DevTools.instrument()
    )
  );

  reduxRouter.listenForReplays(store);

  // Enable Webpack hot module replacement for reducers
  if (module.hot) {
    module.hot.accept("../reducers", () => {
      const nextRootReducer = require("../reducers");
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};
