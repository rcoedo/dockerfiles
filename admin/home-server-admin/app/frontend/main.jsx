import React from "react";
import createBrowserHistory from "history/lib/createBrowserHistory";
import { Provider } from "react-redux";
import { Router, Route } from "react-router";
import { render } from "react-dom";
import { syncReduxAndRouter } from "redux-simple-router";
import configureStore from "app/store/configureStore";
import App from "app/containers/app";

const history = createBrowserHistory();
const store = configureStore();

syncReduxAndRouter(history, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}/>
    </Router>
  </Provider>,
  document.getElementById("app")
);
