import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Flippy, { FrontSide, BackSide } from "react-flippy";

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    minHeight: 250,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Resource = (props) => {
  // Map over props.details and print out each value
  const classes = useStyles();

  return (
    <Flippy flipOnHover={true} flipDirection="horizontal">
      <FrontSide className={classes.root}>{props.name}</FrontSide>
      <BackSide className={classes.root} style={{ overflow: "scroll" }}>
        <div>
          <h2>{props.name}</h2>
          <Typography className={classes.root} noWrap>
            {Object.keys(props.details).map(function (keyName, keyIndex) {
              // use keyName to get current key's name
              // and props.details[keyName] to get its value
              return <Typography noWrap>{props.details[keyName]}</Typography>;
            })}
          </Typography>
        </div>
      </BackSide>
    </Flippy>
  );
};
export default Resource;
