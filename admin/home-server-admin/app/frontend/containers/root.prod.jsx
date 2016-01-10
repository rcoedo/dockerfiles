import React, { Component, PropTypes } from "react";
import { Provider } from "react-redux";
import { Router, browserHistory } from "react-router";

export default class Root extends Component {
  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired
}
