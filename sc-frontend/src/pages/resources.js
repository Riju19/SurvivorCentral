//render selected resources
import React, {Component} from "react";
import Resource from "../Resource";
import {resourcesDetails} from "../constants/resource_details.js"
import {resources} from "../constants/resources.js"

export default class Resources extends Component {
  constructor(props) {
    super(props);
    this.resources = resources;
  }
  componentDidMount() {
    if (this.props.location.props) {
      this.resources = this.props.location.props
    }
  }

  render(){
    
    return (
      <div>
        <div>
          <h1>Resources</h1>
        </div>
        { this.resources !=null && Object.keys(this.resources).map(function (keyName, keyIndex) {
          // use keyName to get current key's name
          // and resources[keyName] to get its value
          return resources[keyName] ? (
            <Resource
              name={keyName}
              details= {resourcesDetails[keyName]}
            ></Resource>
          ) : null;
        })}
      </div>
    );
    };
  } 

