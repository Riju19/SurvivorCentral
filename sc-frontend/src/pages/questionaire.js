//questionaire page
import React, { Component } from "react";

// First thing I'm doing is creating the array of objects. Each object in the array will have two Properties:
// 1. A question property, holding the actual question text
// 2. A response property, which will initially be empty
// Note: Sub-questions are dependent on the answers of previous questions

let questions = [
  {
    // Question 1
    question: "What State are you from?",
    response: ""
  },
  {
    // Question 2
    question: "Are you a survivor of domestic violence, sexual assault or both?",
    response: ""
  },
  {
    // Sub-question - dependent on Q2
    question: "Did the person who sexually assaulted you have HIV/Aids, or are you unsure of the HIV/Aids status of the person who assaulted you?",
    response: ""
  },
  {
    // Question 3
    question: "Do you have an open case with the police / Do you have any interest in opening a police report?",
    response: ""
  },
  {
    // Sub-question - dependent on Q3
    question: "If the offender is in custody, or possibly expected to be in custody at some point: Would you like to get immediate updates when the offender's custody status changes?",
    response: ""
  },
  {
    // Question 4
    question: "Do you have or live with any children?",
    response: ""
  },
  {
    // Question 5
    question: "Were children present (anywhere in the household) during any of the incidents?",
    response: ""
  },
  {
    // Sub-question - dependent on Q5
    question: "Were children ever recipients of physical, verbal or emotional abuse?",
    response: ""
  },
  {
    // Question 6
    question: "Did you ever experience or face threats of physical violence (personal injury, propert damage, etc) OR have a family member pass away from violence?",
    response: ""
  },
  {
    // Sub-question - dependent on Q6
    question: "Have you ever filed a police report within 10 days of the incident?",
    response: ""
  },
  {
    // Sub-question - dependent on previous sub-question
    question: "Would you be interested in potentailly filing a police report? If so, this would make you eligble for up to $25,000 for medical expenses, psychological counseling, relocation aid and more.",
    response: ""
  },
  {
    // Question 7
    question: "Are you under the age of 18?",
    response: ""
  },
  {
    // Question 8
    question: "Would you be interested in free and confidential psychological counseling and therapy resources?",
    response: ""
  },
  {
    // Question 9
    question: "Would you be interested in clinical/advocacy services?",
    response: ""
  },
  {
    // Question 10
    question: "Do you fear for your own physical safety (and/or your child's safety) from your abuser, and would you like to legally prevent your abuser from contacting/coming near you?",
    response: ""
  },
  {
    // Sub-question - dependent on Q10
    question: "Do you currently have an open case with the police / do you have any interest in opening a police report?",
    response: ""
  },
  {
    // Question 11
    question: "Are you currently an undocumented immigrant?",
    response: ""
  },
  {
    // Question 12
    question: "Are you a survivor of human trafficking?",
    response: ""
  },
  {
    // Sub-question - dependent on Q12
    question: "Would you be interested in free legal counseling to evaluate your options and potentially get restitution?",
    response: ""
  },
  {
    // Question 13
    question: "Do you want free legal assistance?",
    response: ""
  },
  {
    // Sub-question - dependent on Q13
    question: "Would you be interested in having an attorney to sue the offender through a CIVIL case?",
    response: ""
  },
  {
    // Sub-question - dependent on previous sub-question
    question: "Do you identify as low income?",
    response: ""
  },
  {
    // Question 14
    question: "Are you currently experiencing homelessness?",
    response: ""
  },
  {
    // sub-question - dependent on Q14
    question: "Do you need immediate relocation support to escape any abusive/unsafe situations?",
    response: ""
  },
  {
    // Question 15
    question: "Do you identify as LGBTQ?",
    response: ""
  },
  {
    // Question 16
    question: "Do you have difficulty speaking or hearing?",
    response: ""
  },
  {
    // Question 17
    question: "Do you have any suicidal thoughts?",
    response: ""
  }
]

export default class Questionaire extends Component {
  constructor(props) {
    super(props);

    // Added the questions to state
    this.state = {
      questions: questions
    };
  }

  // This function will fire off when the componenet mounts, 
  // we can have it call the function that loads questions
  componentDidMount(){
    // Load first question
  }

  // Control the question flow
  questionManager(){
    
  }

  render() {
    return <div>questionaire</div>;
  }
}
