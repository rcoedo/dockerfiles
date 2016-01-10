import React from "react";

export const Container = (props) =>
  <div className="item">{props.container.Image}</div>;

export default (props) =>
  <div className="docker-container-list">{props.containers.map((c) => <Container key={c.Id} container={c}/>)}</div>;
