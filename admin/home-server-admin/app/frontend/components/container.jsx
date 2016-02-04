import React from "react";

export const Container = (props) => 
  <div>
    <h1>
      {props.container.Names[0].slice(1)}
    </h1>
    <h2>
      Created on {new Date(props.container.Created).toDateString()}
    </h2>
    <ul className="status">
      <li><span>{props.container.Status}</span></li>
      <li><i className="fa fa-check"/></li>
    </ul>
    <ul className="buttons">
      <li><a href="#">restart</a></li>
      <li><a href="#">stop</a></li>
    </ul>
  </div>;

export default (props) =>
  <div className="item-list">{props.containers.map((c) => <Container key={c.Id} container={c}/>)}</div>;
