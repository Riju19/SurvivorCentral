import React from "react";

function Resource(props) {
  // Map over props.details and print out each value
  return (
    <div>
      <ul>
        {props.details.map((detail) => {
          return <li>{detail}</li>;
        })}
      </ul>
    </div>
  );
}
export default App;
