import React, { Component } from "react";
import { connect } from "react-redux";
import ContainerList from "app/components/container";

class App extends Component {
  render() {
    //this.props.dispatch(add());
    const { containers } = this.props
    return (
      <ContainerList containers={containers}/>
    );
  }
}

function stateToProps(state) {
  return {
    containers: state.containers
  };
}

export default connect(stateToProps)(App);
