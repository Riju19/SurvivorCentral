import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

// const useStyles = makeStyles((theme) =>
//   createStyles({
//     root: {
//       '& > * + *': {
//         marginLeft: theme.spacing(2),
//       },
//     },
//   }),
// );

const useStyles = makeStyles({
  root: {
    minWidth: 275,
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
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className="classes.root">
      <CardContent>
        <div>
          <h2>{props.name}</h2>
          <Typography className={classes.root}>
            {Object.keys(props.details).map(function (keyName, keyIndex) {
              // use keyName to get current key's name
              // and props.details[keyName] to get its value
              return <Typography>{props.details[keyName]}</Typography>;
            })}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};
export default Resource;
