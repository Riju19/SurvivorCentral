//render selected resources
import React from "react";
import Resource from "../Resource";

const resourcesDetails = {};

export const Resources = (props) => {
  return (
    <>
      {props.resources.map((resource) => {
        // Render each resource if its value is 'true'
        {
          if (resource) {
            <Resource details={}></Resource>;
          }
        }
      })}
    </>
  );
};

export default Resources;

// Make resourcves data structure that holds links and numbers
