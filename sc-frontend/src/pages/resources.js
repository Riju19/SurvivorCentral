//render selected resources
import React from "react";
import Resource from "../Resource";

const resourcesDetails = {
  hivAidsresources: {},
  dayOne: {},
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

export const Resources = (props) => {
  // I'm assuming right now that props.resources holds the resources object from the previos page
  return (
    <div>
      <div>
        <h1>Resources</h1>
      </div>
      {props.resources.map((resource) => {
        // Render each resource if its value is 'true'
        {
          if (resource) {
            return <Resource details={resourcesDetails["resource"]}></Resource>;
          }
        }
      })}
    </div>
  );
};

export default Resources;
