//render selected resources
import React, { useState, useEffect } from "react";
import Resource from "../components/resource/Resource";
import { resourcesDetails } from "../constants/resource_details.js";
import { resources as rsr } from "../constants/resources.js";
import "../index.css";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const Resources = (props) => {
  console.log(`PROPS: `);
  console.log(props);
  const [resources, setResources] = useState(rsr);

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  }));

  const classes = useStyles();

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     resources: resources,
  //   };
  // }
  // componentDidMount() {
  //   if (this.props.location.props) {
  //     console.log(this.props.location.resources);
  //     this.setState(this.props.location.resources);
  //   }
  // }

  useEffect(() => {
    if (props.location.props) {
      console.log(props.location.resources);
      setResources(props.location.resources);
    }
  }, [props.location.props]);

  const resourceKeys = Object.keys(resources);

  return (
    <div>
      <div className="header">
        <h1>Resources</h1>
      </div>
      <Grid container spacing={1}>
        {resources != null &&
          resourceKeys.map(function (keyName) {
            // use keyName to get current key's name
            // and resources[keyName] to get its value
            return resources[keyName] ? (
              <Grid item xs={3} spacing={3}>
                <Resource name={keyName} details={resourcesDetails[keyName]} />
              </Grid>
            ) : null;
          })}
      </Grid>
    </div>
  );
};

export default Resources;
