//questionaire page
import React, { Component } from "react";

// First thing I'm doing is creating the array of objects. Each object in the array will have two Properties:
// 1. A question property, holding the actual question text
// 2. A response property, which will initially be empty
// Note: Sub-questions are dependent on the answers of previous questions

let questions = [
  {
    // index 0
    // Question 1
    question: "What State are you from?",
    responseChoices: "",
    usersResponse: ""
  },
  {
    // index 1
    // Question 2
    question: "Are you a survivor of domestic violence, sexual assault or both?",
    responseChoices: "",
    usersResponse: ""
  },
  {
    // index 2
    // Sub-question - dependent on Q2
    question: "Did the person who sexually assaulted you have HIV/Aids, or are you unsure of the HIV/Aids status of the person who assaulted you?",
    responseChoices: "",
    responseChoices: "",
    usersResponse: ""
  },
  {
    // index 3
    // Question 3
    question: "Do you have an open case with the police / Do you have any interest in opening a police report?",
    responseChoices: "",
    usersResponse: ""
  },
  {
    // index 4
    // Sub-question - dependent on Q3
    question: "If the offender is in custody, or possibly expected to be in custody at some point: Would you like to get immediate updates when the offender's custody status changes?",
    responseChoices: "",
    usersResponse: ""
  },
  {
    // index 5
    // Question 4
    question: "Do you have or live with any children?",
    responseChoices: "",
    usersResponse: ""
  },
  {
    // index 6
    // Question 5
    question: "Were children present (anywhere in the household) during any of the incidents?",
    responseChoices: "",
    usersResponse: ""
  },
  {
    // index 7
    // Sub-question - dependent on Q5
    question: "Were children ever recipients of physical, verbal or emotional abuse?",
    responseChoices: "",
    usersResponse: ""
  },
  {
    // index 8
    // Question 6
    question: "Did you ever experience or face threats of physical violence (personal injury, propert damage, etc) OR have a family member pass away from violence?",
    responseChoices: "",
    usersResponse: ""
  },
  {
    // index 9
    // Sub-question - dependent on Q6
    question: "Have you ever filed a police report within 10 days of the incident?",
    responseChoices: "",
    usersResponse: ""
  },
  {
    // index 10
    // Sub-question - dependent on previous sub-question
    question: "Would you be interested in potentailly filing a police report? If so, this would make you eligble for up to $25,000 for medical expenses, psychological counseling, relocation aid and more.",
    responseChoices: "",
    usersResponse: ""
  },
  {
    // index 11
    // Question 7
    question: "Are you under the age of 18?",
    responseChoices: "",
    usersResponse: ""
  },
  {
    // index 12
    // Question 8
    question: "Would you be interested in free and confidential psychological counseling and therapy resources?",
    responseChoices: "",
    usersResponse: ""
  },
  {
    // index 13
    // Question 9
    question: "Would you be interested in clinical/advocacy services?",
    responseChoices: "",
    usersResponse: ""
  },
  {
    // index 14
    // Question 10
    question: "Do you fear for your own physical safety (and/or your child's safety) from your abuser, and would you like to legally prevent your abuser from contacting/coming near you?",
    responseChoices: "",
    usersResponse: ""
  },
  {
    // index 15
    // Sub-question - dependent on Q10
    question: "Do you currently have an open case with the police / do you have any interest in opening a police report?",
    responseChoices: "",
    usersResponse: ""
  },
  {
    // index 16
    // Question 11
    question: "Are you currently an undocumented immigrant?",
    responseChoices: "",
    usersResponse: ""
  },
  {
    // index 17
    // Question 12
    question: "Are you a survivor of human trafficking?",
    response: ""
  },
  {
    // index 18
    // Sub-question - dependent on Q12
    question: "Would you be interested in free legal counseling to evaluate your options and potentially get restitution?",
    responseChoices: "",
    usersResponse: ""
  },
  {
    // index 19
    // Question 13
    question: "Do you want free legal assistance?",
    responseChoices: "",
    usersResponse: ""
  },
  {
    // index 20
    // Sub-question - dependent on Q13
    question: "Would you be interested in having an attorney to sue the offender through a CIVIL case?",
    responseChoices: "",
    usersResponse: ""
  },
  {
    // index 21
    // Sub-question - dependent on previous sub-question
    question: "Do you identify as low income?",
    responseChoices: "",
    usersResponse: ""
  },
  {
    // index 22
    // Question 14
    question: "Are you currently experiencing homelessness?",
    responseChoices: "",
    usersResponse: ""
  },
  {
    // index 23
    // sub-question - dependent on Q14
    question: "Do you need immediate relocation support to escape any abusive/unsafe situations?",
    responseChoices: "",
    usersResponse: ""
  },
  {
    // index 24
    // Question 15
    question: "Do you identify as LGBTQ?",
    responseChoices: "",
    usersResponse: ""
  },
  {
    // index 25
    // Question 16
    question: "Do you have difficulty speaking or hearing?",
    responseChoices: "",
    usersResponse: ""
  },
  {
    // index 26
    // Question 17
    question: "Do you have any suicidal thoughts?",
    responseChoices: "",
    usersResponse: ""
  }
]

export default class Questionaire extends Component {
  constructor(props) {
    super(props);

    // Added the questions to state
    // index will keep track of which question to load
    this.state = {
      questions: questions,
      index: 0
    };
  }

  // This function will fire off when the componenet mounts, 
  // we can have it call the function that loads questions
  componentDidMount(){
    // Load first question
    this.questionManager();
  }

  // Control the question flow
  questionManager(){
    let subq = false;
    // We need to check if the NEXT question is a sub-question
    // Questions that have sub-questions: 2, 3, 5, 6, 10, 12, 13, 14 (index starts with zero)
    const qsWithSubQs = [1, 3, 6, 8, 9, 14, 17, 19, 20, 22]
    if (qsWithSubQs.includes(this.state.index)){
      // It does, which means the next Q is a sub-q
      subq = true;
    }

    if (subq){
      // The next question is a sub-q, so it depends on the user's response
      const { usersResponse } = this.state.questions[this.state.index] ;
      switch(this.state.index){
        case 1:
          if (usersResponse == 0){
            // Proceed to Question 2B
            this.setState({index: index + 1});
          } else if (usersResponse == 1) {
            // TO-DO: recommend resources
          } else if (usersResponse == 2) {
            // Both; show resources and then question 2B
          } else {
            // None of the above, proceed to question 3
            this.setState({index: index + 2});
          }
          break;
        case 2:
          if (usersResponse == 0) {
            // First show LEA and Court advocate info/contacts
            // Next, proceed to question 3B
            this.setState({index: index + 1});
          }
          break;
        case 4:
          break;
        case 5:
          break;
        case 9:
          break;
        case 11:
          break;
        case 12:
          break;
        case 13:
          break;
        default:
            
      }

      subq = false;
      return;
    }
    else {
      // We need to skip the sub-question
      this.setState({index: index + 1});
      // Changing index in state will rerender the component with the new question
      return;
    }
  }

  // This function should be called when the user picks a response, and it should be sent the response
  onResponse(response){
    let newQuestions = questions;
    newQuestions[this.state.index].usersResponse = response;

    // Save the new response in state
    this.setState({
      questions: newQuestions
    })
    
    // Now check if the user answered the last question, or if there are more questions:
    const numberOfQuestions = questions.length;
    if(this.state.index = numberOfQuestions - 1){
      // There are no more questions, here we'll do 2 things:
      // 1. Push the questions array in state to the database
      // 2. Redirect the user to the resources page
    } else {
      // Call the questionManager function to load the next question
      this.questionManager();
    }
  }

  // Note for Zoey: The 'questionToLoad' variable will hold the question text - render that to the screen
  // EDIT: I think it will be easier to render: questions[this.state.index].question to the screen (this way when I change index in state, 
  // it will correctly rerender the right question). Therefore, I removed the questionToLoad variable.
  render() {
    return <div>questionaire</div>;
  }
}
