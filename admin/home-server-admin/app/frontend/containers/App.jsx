import React, { Component } from "react";
import { connect } from "react-redux";
import { add } from "app/actions";

class App extends Component {
  constructor() {
    super();
    this.add = this.add.bind(this);
  }

  add(event) {
    event.preventDefault();
    this.props.dispatch(add());
  }

  render() {
    const { count } = this.props
    return(
      <div>
        <button onClick={this.add} type="button">Add</button>&nbsp;
        {count}
      </div>
    );
  }
}

function stateToProps(state) {
  return {
    count: state.count
  };
}

export default connect(stateToProps)(App);
