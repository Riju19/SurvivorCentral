//questionaire page
import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import SlidingQuestion from "../components/slidingQuestion/SlidingQuestion";
import "../index.css";
import { questions } from "../constants/questions.js";
import { resources } from "../constants/resources.js";
import {Link} from "react-router-dom";

export default class Questionaire extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 1, //current question
    };

    this.questions = questions;
    this.resources = resources;
    Object.keys(this.resources).forEach(function (key) {
      key = false;
    });
  }

  // Control the question flow
  questionManager() {
    const { usersResponse } = this.questions[this.state.index];
    let under18 = false;
    let question3 = false;
    const index = this.state.index;

    switch (index) {
      default:
        console.log("Oh no! No case found");
        break;

      case 0:
        // Save the users location
        break;
      case 1:
        if (usersResponse === 0) {
          // SA, Proceed to Question 2B
          this.setState({ index: index + 1 });
        } else if (usersResponse === 1) {
          // DV, recommend resources, then proceed to Q3
          this.resources["nationalDomesticViolenceHotline"] = true;
          this.resources["nationalResourceCenterOnDomesticViolence"] = true;
          this.resources["officeForVictimsOfCrime"] = true;
          this.setState({ index: index + 2 });
        } else if (usersResponse === 2) {
          // Both; show resources and then question 2B
          this.resources["nationalDomesticViolenceHotline"] = true;
          this.resources["nationalResourceCenterOnDomesticViolence"] = true;
          this.resources["officeForVictimsOfCrime"] = true;
          this.setState({ index: index + 1 });
        } else {
          // None of the above, proceed to question 3
          this.setState({ index: index + 2 });
        }
        break;

      case 2:
        // Question 2B
        if (usersResponse === 0) {
          // yes
          this.resources["hivAidsresources"] = true;
        }
        this.resources["dayOne"] = true;
        this.resources["sojournerHouse"] = true;
        this.resources["elizabaethBuffamChase"] = true;
        this.resources["riChildrenAdvocacyCenter"] = true;
        // Proceed to Q3
        this.setState({ index: index + 1 });
        break;

      case 3:
        // Question 3
        if (usersResponse === 0) {
          // Resources and then Q3B
          question3 = true;
          this.resources["leaAndCourtAdvocateInfo"] = true;
          this.setState({ index: index + 1 });
        } else {
          // Proceed to Q4
          this.setState({ index: index + 2 });
        }
        break;

      case 4:
        // Question 3B
        if (usersResponse === 0) {
          // Resources, then Q4
          this.resources["vineCrimeVictimAdvocate"] = true;
        }
        this.setState({ index: index + 1 });
        break;

      case 5:
        // Question 4
        if (usersResponse === 0) {
          // Q5
          this.setState({ index: index + 1 });
        } else {
          // Q6
          this.setState({ index: index + 3 });
        }
        break;

      case 6:
        // Question 5
        if (usersResponse === 0) {
          // Q5b
          this.setState({ index: index + 1 });
        } else {
          // Q6
          this.setState({ index: index + 2 });
        }
        break;

      case 7:
        // Question 5B
        if (usersResponse === 0) {
          // Resources, then Q6
          this.resources["dcyf"] = true;
          this.resources["nationalCenterForVictimsOfCrime"] = true;
        }
        this.setState({ index: index + 1 });
        break;

      case 8:
        // Question 6
        if (usersResponse === 0) {
          // Q6B
          this.setState({ index: index + 1 });
        } else {
          // Q7
          this.setState({ index: index + 3 });
        }
        break;

      case 9:
        // Question 6B
        if (usersResponse === 0) {
          // Resources, then Q7
          this.resources["riCvcp"] = true;
          this.setState({ index: index + 2 });
        } else {
          // Q6C
          this.setState({ index: index + 1 });
        }
        break;

      case 10:
        // Question 6C
        if (usersResponse === 0) {
          // Resources, then Q7
          this.resources["riCvcp"] = true;
        }
        this.setState({ index: index + 1 });
        break;

      case 11:
        // Question 7
        if (usersResponse === 0) {
          // The user is under 18
          under18 = true;
        }
        this.setState({ index: index + 1 });
        break;

      case 12:
        // Question 8
        if (usersResponse === 0) {
          if (under18) {
            this.resources["bradleyHospitalAndTidesFamilyService"] = true;
          }
          if (question3) {
            this.resources[
              "familyServicesOfRiAndFamilyCommunityCarePartnership"
            ] = true;
          }
          this.resources["dvPartnersUnderRICADVAndCounselingResources"] = true;
        }
        this.setState({ index: index + 1 });
        break;

      case 13:
        // Question 9
        if (usersResponse === 0) {
          // ???????? clinical/advocacy services
        }
        this.setState({ index: index + 1 });
        break;

      case 14:
        // Question 10
        if (usersResponse === 0) {
          // Resources, then Q10B
          this.resources["TRO"] = true;
          this.setState({ index: index + 1 });
        } else {
          // Q11
          this.setState({ index: index + 2 });
        }
        break;

      case 15:
        // Question 10B
        if (usersResponse === 0) {
          // ???? Open case with police
        }
        this.setState({ index: index + 1 });
        break;

      case 16:
        if (usersResponse === 0) {
          // Resources, then Q12
          this.resources["undocumentedInfo"] = true;
        }
        this.setState({ index: index + 1 });
        break;

      case 17:
        // Question 12
        if (usersResponse === 0) {
          // Resources, then Q12B
          this.resources["trafickingSurvivorResources"] = true;
          this.setState({ index: index + 1 });
        } else {
          // Q13
          this.setState({ index: index + 2 });
        }
        break;

      case 18:
        // Question 12B
        if (usersResponse === 0) {
          this.resources["legalCounselingRestitutionLink"] = true;
        }
        this.setState({ index: index + 1 });
        break;

      case 19:
        if (usersResponse === 0) {
          // Resources, then Q13B
          this.resources["legalAssistanceResources"] = true;
          this.setState({ index: index + 1 });
        } else {
          // Q14
          this.setState({ index: index + 3 });
        }
        break;

      case 20:
        // Question 13B
        if (usersResponse === 0) {
          // Resources, then Q13C
          this.resources["victimbarLink"] = true;
          this.setState({ index: index + 1 });
        } else {
          // Q14
          this.setState({ index: index + 2 });
        }
        break;

      case 21:
        // Question 13C
        if (usersResponse === 0) {
          // Resources, then Q14
          this.resources["volunteerLawyerProgram"] = true;
        }
        this.setState({ index: index + 1 });
        break;

      case 22:
        // Question 14
        if (usersResponse === 0) {
          // Resources, then Q15
          this.resources["homelessnessResources"] = true;
          this.setState({ index: index + 2 });
        } else {
          // Q14B
          this.setState({ index: index + 1 });
        }
        break;

      case 23:
        // Question 14B
        if (usersResponse === 0) {
          // Resources, then Q15
          this.resources["helplineRI"] = true;
          this.resources["CAP"] = true;
          this.resources["DHS"] = true;
        }
        this.setState({ index: index + 1 });
        break;

      case 24:
        // Question 15
        if (usersResponse === 0) {
          // Resources, then Q16
          this.resources["GLBTQDomesticViolenceProject"] = true;
          this.resources["GLAD"] = true;
          this.resources["youthPrideInc"] = true;
        }
        this.setState({ index: index + 1 });
        break;

      case 25:
        // Question 16
        if (usersResponse === 0) {
          // Resources, then Q17
          this.resources["relay"] = true;
        }
        this.setState({ index: index + 1 });
        break;

      case 26:
        // Question 17
        if (usersResponse === 0) {
          // Resources, then form is completed
          this.resources["NSPL"] = true;
        }
          this.setState({ index: index + 1 });
        break;
    }
  }

  // This function should be called when the user picks a response, and it should be sent the response
  onResponse = (response) => {
    let newQuestions = this.questions;
    const index = this.state.index;
    newQuestions[index].usersResponse = response;

    // Save the new response in state
    this.setState({
      questions: newQuestions,
    });

    // Now check if the user answered the last question, or if there are more questions:
    const numberOfQuestions = this.questions.length;
    if (index === numberOfQuestions) {
      // There are no more questions, here we'll do 2 things:
      // 1. Push the questions array in state to the database
      // 2. Redirect the user to the this.resources page, WITH the resources object
      this.setState({ index: index + 1 });
    } else {
      // Call the questionManager function to load the next question
      this.questionManager();
    }
  };

  render() {
    const index = this.state.index;
    return (
      <>
        {questions.length > index && (
          <div className="questionCenter">
            <SlidingQuestion
              questionObject={this.questions[index]}
              buttonClick={this.onResponse}
            />
          </div>
        )}
        {questions.length === index && (
          <Button variant="contained" color="primary">
            <Link to={{
              pathname: '/resources',
              resources: this.resources
            }}>
            generate resources
            </Link>
          </Button>
        )}
      </>
    );
  }
}
