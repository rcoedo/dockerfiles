import React from "react";
import { render } from "react-dom";
import configureStore from "app/store/configure-store";
import Root from "app/containers/root";
import "app/styles/index.scss";

render(<Root store={configureStore(globalInitState)} />, document.getElementById("app"));
