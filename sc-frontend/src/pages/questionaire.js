//questionaire page
import React, { Component } from "react";
import SlidingQuestion from "../components/slidingQuestion/SlidingQuestion"
import "../index.css"

// First thing I'm doing is creating the array of objects. Each object in the array will have two Properties:
// 1. A question property, holding the actual question text
// 2. A response property, which will initially be empty
// Note: Sub-questions are dependent on the answers of previous questions

export default class Questionaire extends Component {
  constructor(props) {
    super(props);

    // Added the questions to state
    // index will keep track of which question to load
    this.state = {
      questions: [
        {
          // index 0
          // Question 1
          question: "What State are you from?",
          responseChoices: "", // Either a states dropdown or a textbox
          usersResponse: ""
        },
        {
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
        },
        {
          // index 3
          // Question 3
          question: "Do you have an open case with the police / Do you have any interest in opening a police report?",
          responseChoices: ["Yes", "No"],
          usersResponse: ""
        },
        {
          // index 4
          // Sub-question - dependent on Q3
          question: "If the offender is in custody, or possibly expected to be in custody at some point: Would you like to get immediate updates when the offender's custody status changes?",
          responseChoices: ["Yes", "No"],
          usersResponse: ""
        },
        {
          // index 5
          // Question 4
          question: "Do you have or live with any children?",
          responseChoices: ["Yes", "No"],
          usersResponse: ""
        },
        {
          // index 6
          // Question 5
          question: "Were children present (anywhere in the household) during any of the incidents?",
          responseChoices: ["Yes", "No"],
          usersResponse: ""
        },
        {
          // index 7
          // Sub-question - dependent on Q5
          question: "Were children ever recipients of physical, verbal or emotional abuse?",
          responseChoices: ["Yes", "No"],
          usersResponse: ""
        },
        {
          // index 8
          // Question 6
          question: "Did you ever experience or face threats of physical violence (personal injury, propert damage, etc) OR have a family member pass away from violence?",
          responseChoices: ["Yes", "No"],
          usersResponse: ""
        },
        {
          // index 9
          // Sub-question - dependent on Q6
          question: "Have you ever filed a police report within 10 days of the incident?",
          responseChoices: ["Yes", "No"],
          usersResponse: ""
        },
        {
          // index 10
          // Sub-question - dependent on previous sub-question
          question: "Would you be interested in potentailly filing a police report? If so, this would make you eligble for up to $25,000 for medical expenses, psychological counseling, relocation aid and more.",
          responseChoices: ["Yes", "No"],
          usersResponse: ""
        },
        {
          // index 11
          // Question 7
          question: "Are you under the age of 18?",
          responseChoices: ["Yes", "No"],
          usersResponse: ""
        },
        {
          // index 12
          // Question 8
          question: "Would you be interested in free and confidential psychological counseling and therapy resources?",
          responseChoices: ["Yes", "No"],
          usersResponse: ""
        },
        {
          // index 13
          // Question 9
          question: "Would you be interested in clinical/advocacy services?",
          responseChoices: ["Yes", "No"],
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
          responseChoices: ["Yes", "No"],
          usersResponse: ""
        },
        {
          // index 16
          // Question 11
          question: "Are you currently an undocumented immigrant?",
          responseChoices: ["Yes", "No"],
          usersResponse: ""
        },
        {
          // index 17
          // Question 12
          question: "Are you a survivor of human trafficking?",
          responseChoices: ["Yes", "No"],
          response: ""
        },
        {
          // index 18
          // Sub-question - dependent on Q12
          question: "Would you be interested in free legal counseling to evaluate your options and potentially get restitution?",
          responseChoices: ["Yes", "No"],
          usersResponse: ""
        },
        {
          // index 19
          // Question 13
          question: "Do you want free legal assistance?",
          responseChoices: ["Yes", "No"],
          usersResponse: ""
        },
        {
          // index 20
          // Sub-question - dependent on Q13
          question: "Would you be interested in having an attorney to sue the offender through a CIVIL case?",
          responseChoices: ["Yes", "No"],
          usersResponse: ""
        },
        {
          // index 21
          // Sub-question - dependent on previous sub-question
          question: "Do you identify as low income?",
          responseChoices: ["Yes", "No"],
          usersResponse: ""
        },
        {
          // index 22
          // Question 14
          question: "Are you currently experiencing homelessness?",
          responseChoices: ["Yes", "No"],
          usersResponse: ""
        },
        {
          // index 23
          // sub-question - dependent on Q14
          question: "Do you need immediate relocation support to escape any abusive/unsafe situations?",
          responseChoices: ["Yes", "No"],
          usersResponse: ""
        },
        {
          // index 24
          // Question 15
          question: "Do you identify as LGBTQ?",
          responseChoices: ["Yes", "No"],
          usersResponse: ""
        },
        {
          // index 25
          // Question 16
          question: "Do you have difficulty speaking or hearing?",
          responseChoices: ["Yes", "No"],
          usersResponse: ""
        },
        {
          // index 26
          // Question 17
          question: "Do you have any suicidal thoughts?",
          responseChoices: ["Yes", "No"],
          usersResponse: ""
        }
      ],
      index: 1
    };
  }

  // This function will fire off when the componenet mounts
  componentDidMount(){
    // Load first question
    this.questionManager();
  }

  // Control the question flow
  questionManager(){
    let resources = {
      hivAidsresources: false,
      dayOne: false,
      sojournerHouse: false,
      elizabaethBuffamChase: false,
      riChildrenAdvocacyCenter: false,
      nationalDomesticViolenceHotline: false,
      nationalResourceCenterOnDomesticViolence: false,
      officeForVictimsOfCrime: false,
      leaAndCourtAdvocateInfo: false,
      vineCrimeVictimAdvocate: false,
      dcyf: false,
      nationalCenterForVictimsOfCrime: false,
      riCvcp: false,
      bradleyHospitalAndTidesFamilyService: false,
      familyServicesOfRiAndFamilyCommunityCarePartnership: false,
      dvPartnersUnderRICADVAndCounselingResources: false,
      TRO: false,
      undocumentedInfo: false,
      trafickingSurvivorResources: false,
      legalCounselingRestitutionLink: false,
      legalAssistanceResources: false,
      victimbarLink: false,
      volunteerLawyerProgram: false,
      homelessnessResources: false,
      helplineRI: false,
      CAP: false,
      DHS: false,
      GLBTQDomesticViolenceProject: false,
      GLAD: false,
      youthPrideInc: false,
      relay: false,
      NSPL: false
    
    }

    const { usersResponse } = this.state.questions[this.state.index] ;
    let under18 = false;
    let question3 = false;
    switch(this.state.index){
      default: 
        console.log("Oh no! No case found");
        break;
      case 0:
        // Save the users location
        break;
      case 1:
        if (usersResponse === 0){
          // SA, Proceed to Question 2B
          this.setState({index: this.state.index + 1});
        } else if (usersResponse === 1) {
          // DV, recommend resources, then proceed to Q3
          resources["nationalDomesticViolenceHotline"] = true;
          resources["nationalResourceCenterOnDomesticViolence"] = true;
          resources["officeForVictimsOfCrime"] = true;
          this.setState({index: this.state.index + 2});
        } else if (usersResponse === 2) {
          // Both; show resources and then question 2B
          resources["nationalDomesticViolenceHotline"] = true;
          resources["nationalResourceCenterOnDomesticViolence"] = true;
          resources["officeForVictimsOfCrime"] = true;
          this.setState({index: this.state.index + 1});
        } else {
          // None of the above, proceed to question 3
          this.setState({index: this.state.index + 2});
        }
        break;

      case 2:
        // Question 2B
        if (usersResponse === 0) {
          // yes
          resources["hivAidsresources"] = true;
        }
        resources["dayOne"] = true;
        resources["sojournerHouse"] = true;
        resources["elizabaethBuffamChase"] = true;
        resources["riChildrenAdvocacyCenter"] = true;
        // Proceed to Q3
        this.setState({index: this.state.index + 1});
        break

      case 3:
        // Question 3
        if (usersResponse === 0) {
          // Resources and then Q3B
          question3 = true;
          resources["leaAndCourtAdvocateInfo"] = true;
          this.setState({index: this.state.index + 1});
        } else {
          // Proceed to Q4
          this.setState({index: this.state.index + 2});
        }
        break;

      case 4:
        // Question 3B
        if (usersResponse === 0) {
          // Resources, then Q4
          resources["vineCrimeVictimAdvocate"] = true;
        }
        this.setState({index: this.state.index + 1});
        break;

      case 5:
        // Question 4
        if (usersResponse === 0) {
          // Q5
          this.setState({index: this.state.index + 1});
        } else {
          // Q6
          this.setState({index: this.state.index + 3});
        }
        break;

      case 6:
        // Question 5
        if (usersResponse === 0) {
          // Q5b
          this.setState({index: this.state.index + 1});
        } else {
          // Q6
          this.setState({index: this.state.index + 2});
        }
        break;

      case 7:
        // Question 5B
        if (usersResponse === 0) {
          // Resources, then Q6
          resources["dcyf"] = true;
          resources["nationalCenterForVictimsOfCrime"] = true;
        }
        this.setState({index: this.state.index + 1});
        break;

      case 8:
        // Question 6
        if (usersResponse === 0) {
          // Q6B
          this.setState({index: this.state.index + 1});
        } else {
          // Q7
          this.setState({index: this.state.index + 3});
        }
        break;

      case 9:
        // Question 6B
        if (usersResponse === 0) {
          // Resources, then Q7
          resources["riCvcp"] = true;
          this.setState({index: this.state.index + 2});
        } else {
          // Q6C
          this.setState({index: this.state.index + 1});
        }
        break;

      case 10:
        // Question 6C
        if (usersResponse === 0) {
          // Resources, then Q7
          resources["riCvcp"] = true;
        }
        this.setState({index: this.state.index + 1});
        break;

      case 11:
        // Question 7
        if (usersResponse === 0) {
          // The user is under 18
          under18 = true;
        }
        this.setState({index: this.state.index + 1});
        break;

      case 12:
        // Question 8
        if (usersResponse === 0) {
          if (under18) {
            resources["bradleyHospitalAndTidesFamilyService"] = true;
          }
          if (question3) {
            resources["familyServicesOfRiAndFamilyCommunityCarePartnership"] = true;
          }
          resources["dvPartnersUnderRICADVAndCounselingResources"] = true;
        }
        this.setState({index: this.state.index + 1});
        break;

      case 13:
        // Question 9
        if (usersResponse === 0) {
          // ???????? clinical/advocacy services
        }
        this.setState({index: this.state.index + 1});
        break;

      case 14:
        // Question 10
        if (usersResponse === 0) {
          // Resources, then Q10B
          resources["TRO"] = true;
          this.setState({index: this.state.index + 1});
        } else {
          // Q11
          this.setState({index: this.state.index + 2});
        }
        break;

      case 15:
        // Question 10B
        if (usersResponse === 0) {
          // ???? Open case with police
        }
        this.setState({index: this.state.index + 1});
        break;

      case 16:
        // Question 11
        if (usersResponse === 0) {
          // Resources, then Q12
          resources["undocumentedInfo"] = true;
        }
        this.setState({index: this.state.index + 1});
        break;

      case 17:
        // Question 12
        if (usersResponse === 0) {
          // Resources, then Q12B
          resources["trafickingSurvivorResources"] = true;
          this.setState({index: this.state.index + 1});
        } else {
          // Q13
          this.setState({index: this.state.index + 2});
        }
        break;

      case 18:
        // Question 12B
        if (usersResponse === 0) {
          resources["legalCounselingRestitutionLink"] = true;
        }
        this.setState({index: this.state.index + 1});
        break;

      case 19:
        // Question 13
        if (usersResponse === 0) {
          // Resources, then Q13B
          resources["legalAssistanceResources"] = true;
          this.setState({index: this.state.index + 1});
        } else {
          // Q14
          this.setState({index: this.state.index + 3});
        }
        break;

      case 20:
        // Question 13B
        if (usersResponse === 0) {
          // Resources, then Q13C
          resources["victimbarLink"] = true
          this.setState({index: this.state.index + 1});
        } else {
          // Q14
          this.setState({index: this.state.index + 2});
        }
        break;

      case 21:
        // Question 13C
        if (usersResponse === 0) {
          // Resources, then Q14
          resources["volunteerLawyerProgram"] = true;
        }
        this.setState({index: this.state.index + 1});
        break;

      case 22:
        // Question 14
        if (usersResponse === 0) {
          // Resources, then Q15
          resources["homelessnessResources"] = true;
          this.setState({index: this.state.index + 2});
        } else {
          // Q14B
          this.setState({index: this.state.index + 1});
        }
        break;
      
      case 23:
        // Question 14B
        if (usersResponse === 0) {
          // Resources, then Q15
          resources["helplineRI"] = true;
          resources["CAP"] = true;
          resources["DHS"] = true;
        }
        this.setState({index: this.state.index + 1});
        break;

      case 24:
        // Question 15
        if (usersResponse === 0) {
          // Resources, then Q16
          resources["GLBTQDomesticViolenceProject"] = true;
          resources["GLAD"] = true;
          resources["youthPrideInc"] = true;
        }
        this.setState({index: this.state.index + 1});
        break;

      case 25:
        // Question 16
        if (usersResponse === 0) {
          // Resources, then Q17
          resources["relay"] = true;
        }
        this.setState({index: this.state.index + 1});
        break;

      case 26:
        // Question 17
        if (usersResponse === 0) {
          // Resources, then form is completed
          resources["NSPL"] = true
          this.setState({index: this.state.index + 1});
        }
        break;
      }
    
      return;
    
  }

  // This function should be called when the user picks a response, and it should be sent the response
  onResponse=(response) => {
    console.log("button clicked!")
    console.log(response)
    let newQuestions = this.state.questions;
    newQuestions[this.state.index].usersResponse = response;

    // Save the new response in state
    this.setState({
      questions: newQuestions
    })
    
    // Now check if the user answered the last question, or if there are more questions:
    const numberOfQuestions = this.state.questions.length;
    if (this.state.index === numberOfQuestions ){
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
    return(
    <>
        <div className="questionCenter">
          <SlidingQuestion questionObject={this.state.questions[this.state.index]} buttonClick={this.onResponse}/>
        </div>
    </>
    )
  }
}
