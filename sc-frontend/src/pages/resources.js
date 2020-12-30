//render selected resources
import React, { useState, useEffect } from "react";
import Resource from "../components/resource/Resource";
import { resourcesDetails } from "../constants/resource_details.js";
import { resources as rsr } from "../constants/resources.js";
import "../index.css";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

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
    gridContainer: {
      paddingLeft: "20px",
      paddingRight: "20px",
      paddingTop: "20px",
    },
  }));

  const classes = useStyles();

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
      <Grid
        container
        spacing={4}
        className={classes.gridContainer}
        justify="center"
      >
        {resources != null &&
          resourceKeys.map(function (keyName) {
            // use keyName to get current key's name
            // and resources[keyName] to get its value
            return resources[keyName] ? (
              <Grid item xs={12} sm={6} m={3} lg={3} xl={3}>
                <Resource name={keyName} details={resourcesDetails[keyName]} />
              </Grid>
            ) : null;
          })}
      </Grid>
    </div>
  );
};

export default Resources;
