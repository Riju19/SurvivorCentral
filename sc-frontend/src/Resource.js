import React from "react";

function Resource(props) {
  // Map over props.details and print out each value
  return (
    <div>
      <h2>{props.name}</h2>
      <ul>
        {Object.keys(props.details).map(function (keyName, keyIndex) {
          // use keyName to get current key's name
          // and a[keyName] to get its value
          return <li>{props.details[keyName]}</li>;
        })}
      </ul>
    </div>
  );
}
export default Resource;
