import React from "react";

const Greeting = props => {
  return (
    <div>
      <h1>{props.greeting}</h1>
      <h2>{props.greeting}</h2>
      <h3>{props.greeting}</h3>
      <h4>{props.greeting}</h4>
      <h5>{props.greeting}</h5>
      <h6>{props.greeting}</h6>
    </div>
  );
};
export default Greeting;
