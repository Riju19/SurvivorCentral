//questionaire page
import React, { Component } from "react";

// First thing I'm doing is creating the array of objects. Each object in the array will have two Properties:
// 1. A question property, holding the actual question text
// 2. A response property, which will initially be empty

let questions = [
  {
    question: "",
    response: ""
  }
]

export default class Questionaire extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div>questionaire</div>;
  }
}
