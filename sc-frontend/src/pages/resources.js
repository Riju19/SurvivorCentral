//render selected resources
import React, { Component } from "react";
import Resource from "../components/resource/Resource";
import { resourcesDetails } from "../constants/resource_details.js";
import { resources } from "../constants/resources.js";
import "../index.css";

export default class Resources extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resources: resources,
    };
  }
  componentDidMount() {
    if (this.props.location.props) {
      console.log(this.props.location.resources);
      this.setState(this.props.location.resources);
    }
  }

  render() {
    const resources = this.state.resources;
    const resourceKeys = Object.keys(resources);
    return (
      <div>
        <div className="header">
          <h1>Resources</h1>
        </div>
        {resources != null &&
          resourceKeys.map(function (keyName) {
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
  }
}
