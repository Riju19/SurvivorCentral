//questionaire page
import React, { Component } from "react";
import SlidingQuestion from "../components/slidingQuestion/SlidingQuestion";
import "../index.css";
import APIHelper from "../APIHelper.js";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { questions } from "../constants/questions.js";
import { resources } from "../constants/resources.js";
import { Link } from "react-router-dom";
import LinearProgress from '@material-ui/core/LinearProgress';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

let userResponses = [];
export default class Questionaire extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 1, //current question
      lastQuestionAsked: false,
    };

    this.questions = questions;
    this.resources = resources;
    this.lastQuestions = true;
    this.lastQuestionObject ={
      question: "The next questions deal with homelessness, LGBTQ+, disabilities and low income, do you identify with any of these communities?",
      responseChoices: ["Yes", "No"],
    }

    // This initializes all the keys to false, if the user clicks 'yes' a key will turn true
    Object.keys(this.resources).forEach(function (key) {
      resources[key] = false;
    });
  }

  componentWillUnmount() {
    console.log("Storing values in Database" + userResponses);
    fetch("https://sc-backend.vercel.app/postResponses", {
      method: "post",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },

      body: JSON.stringify(userResponses),
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    APIHelper.addResponses(userResponses);
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
    userResponses.push({ question: index, answer: response });

    // Save the new response in state
    this.setState({
      questions: newQuestions,
    });

    // Now check if the user answered the last question, or if there are more questions:
    const numberOfQuestions = this.questions.length;
    if (index === numberOfQuestions) {
      // There are no more questions, here we'll do 2 things:
      // 1. Push the questions array in state to the database
      // 2. Redirect the user to the resources page

      console.log("Storing values in Databse" + userResponses);
      fetch("https://sc-backend.vercel.app/postResponses", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userResponses),
      });
      APIHelper.addResponses(userResponses);

      this.setState({ index: index + 1 });
    } else {
      // Call the questionManager function to load the next question
      this.questionManager();
    }
  };

  onLastQuestions = (response) => {
    let index = 27;
    let lastQuestionAsked = false;
    if (response === 0){
      lastQuestionAsked = true;
    }else
      index = questions.length;
    
    this.setState({index: index, lastQuestionAsked: lastQuestionAsked})
  }

  render() {
    const index = this.state.index;          
    const length = this.questions.length;
    console.log(index)

    return (
      <>
        <LinearProgressWithLabel variant="determinate" value={index/length*100} />
        <Container className ="questionCenter">
          { (index === 17) && this.state.lastQuestionAsked === false? (
             <SlidingQuestion
             questionObject={this.lastQuestionObject}
             buttonClick={this.onLastQuestions}
              />
            ):
            length > index ?  (
              <SlidingQuestion
                questionObject={this.questions[index]}
                buttonClick={this.onResponse}
              />
            ):
            length === index? (
              <>
                <Typography variant="h5" className="classes.question">
                  You have finished the Questionaire! Click below for your curated
                  list of resources.
                </Typography>
                <Button
                  variant="contained"
                  className="buttonStyle"
                  component={Link}
                  to={{
                    pathname: "/resources",
                    resources: this.resources,
                  }}
                >
                  Click Here
                </Button>
              </>
          ): console.log("unknown position reached", index)}
        </Container>
      </>
    );
  }
}
