//questionaire page
import React, { Component } from "react";
import SlidingQuestion from "../components/slidingQuestion/SlidingQuestion"
import "../index.css"

export default class Questionaire extends Component {
  constructor(props) {
    super(props);
    this.state = {questions:[{
      // index 1
      // Question 2
      question: "Are you a survivor of domestic violence, sexual assault or both?",
      responseChoices: ["Sexual Assault", "Domestic Violence", "Both", "Neither"],
      usersResponse: ""
    },
    {
      // index 2
      // Sub-question - dependent on Q2
      question: "Did the person who sexually assaulted you have HIV/Aids, or are you unsure of the HIV/Aids status of the person who assaulted you?",
      responseChoices: ["Yes", "No"],
      usersResponse: ""
    }], 
    index:0
  };
  }
  onResponse(response){
    let newQuestions = this.state.questions;
    newQuestions[this.state.index].usersResponse = response;

    // Save the new response in state
    this.setState({
      questions: newQuestions,
      index:this.state.index+1
    })
  }
  render() {
    return <>
    <div className="questionCenter">
    <SlidingQuestion questionObject={this.state.questions[this.state.index]}/>
    </div>
    </>;
  }
}
