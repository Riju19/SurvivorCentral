import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Flippy, { FrontSide, BackSide } from "react-flippy";

const useStyles = makeStyles({
  root: {
    minWidth: 180,
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
      <FrontSide
        className={classes.root}
        style={{
          backgroundColor: "plum",
          borderRadius: 16,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h1>{props.details["title"]}</h1>
      </FrontSide>
      <BackSide
        className={classes.root}
        style={{ overflow: "auto", borderRadius: 16 }}
      >
        <div>
          <Typography className={classes.root}>
            {Object.keys(props.details).map(function (keyName, keyIndex) {
              // use keyName to get current key's name
              // and props.details[keyName] to get its value

              return (
                <div>
                  <Typography>
                    {keyName.includes("website") ? (
                      <a
                        href={props.details[keyName]}
                        style={{ color: "blue" }}
                      >
                        {props.details[keyName]}
                      </a>
                    ) : keyName.includes("name") ? (
                      <h3>{props.details[keyName]}</h3>
                    ) : keyName.includes("title") ? (
                      <h1>{props.details[keyName]}</h1>
                    ) : (
                      props.details[keyName]
                    )}
                  </Typography>
                </div>
              );
            })}
          </Typography>
        </div>
      </BackSide>
    </Flippy>
  );
};
export default Resource;
