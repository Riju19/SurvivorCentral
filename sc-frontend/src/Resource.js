import React from "react";

function Resource(props) {
  return (
    <ul>
      {props.details.map((detail) => {
        <li>{detail}</li>;
      })}
    </ul>
  );
}
export default App;
