import React from "react";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
  }),
);

const Resource = (props) => {
  // Map over props.details and print out each value
  const classes = useStyles();

  return (
    <div>
      <h2>{props.name}</h2>
      <Typography className={classes.root}>
        {Object.keys(props.details).map(function (keyName, keyIndex) {
          // use keyName to get current key's name
          // and props.details[keyName] to get its value
          return (
            <Typography>
              {props.details[keyName]}
            </Typography>
        )})}
      </Typography>
    </div>
  );
}
export default Resource;
