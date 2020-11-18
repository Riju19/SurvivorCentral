//render selected resources
import React from "react";
import Resource from "../Resource";

// ----- I copied this over for testing. When it's sent through props, we can remove it from here -----
let resources = {
  hivAidsresources: true,
  dayOne: true,
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
  NSPL: false,
};
// ----------------------------------------------------------------------------------------------------

const resourcesDetails = {
  hivAidsresources: {
    dummyResource: "I'm some text",
    dr2: "www.imAUrl.com",
    dr3: "999-8888",
  },
  dayOne: {
    dummyResource: "I'm some more text",
    dr2: "www.imAnotherUrl.com",
    dr3: "999-7777",
  },
  sojournerHouse: {},
  elizabaethBuffamChase: {},
  riChildrenAdvocacyCenter: {},
  nationalDomesticViolenceHotline: {},
  nationalResourceCenterOnDomesticViolence: {},
  officeForVictimsOfCrime: {},
  leaAndCourtAdvocateInfo: {},
  vineCrimeVictimAdvocate: {},
  dcyf: {},
  nationalCenterForVictimsOfCrime: {},
  riCvcp: {},
  bradleyHospitalAndTidesFamilyService: {},
  familyServicesOfRiAndFamilyCommunityCarePartnership: {},
  dvPartnersUnderRICADVAndCounselingResources: {},
  TRO: {},
  undocumentedInfo: {},
  trafickingSurvivorResources: {},
  legalCounselingRestitutionLink: {},
  legalAssistanceResources: {},
  victimbarLink: {},
  volunteerLawyerProgram: {},
  homelessnessResources: {},
  helplineRI: {},
  CAP: {},
  DHS: {},
  GLBTQDomesticViolenceProject: {},
  GLAD: {},
  youthPrideInc: {},
  relay: {},
  NSPL: {},
};

// Later change resources to props.resources
export const Resources = () => {
  return (
    <div>
      <div>
        <h1>Resources</h1>
      </div>
      {Object.keys(resources).map(function (keyName, keyIndex) {
        // use keyName to get current key's name
        // and resources[keyName] to get its value
        return resources[keyName] ? (
          <Resource
            name={keyName}
            details={resourcesDetails[keyName]}
          ></Resource>
        ) : null;
      })}
    </div>
  );
};

export default Resources;
