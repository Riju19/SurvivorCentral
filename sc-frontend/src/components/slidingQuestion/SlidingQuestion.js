import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    answer: {
      textAlign: 'center',
        },
    root: {
      textAlign: 'center',
      padding: "5 rem",
    }
  }));

const SlidingQuestion = ({questionObject, buttonClick}) => { // input
    const classes = useStyles();
    const question = questionObject.question;
    const answer=questionObject.responseChoices;
    console.log(questionObject);
    console.log(buttonClick)
    return(
        <Container className={classes.root} component="main" maxWidth="xl">
            <Typography component="h1" variant="h6">
                    {question}
            </Typography>       
            <Grid container spacing={1}>
            {answer.length === 0 && (<Button variant="contained" color="primary" onClick={()=>buttonClick(0)}>
                  Next
                </Button>)}
            {answer.length > 0 && (answer.map((answer,index) => (
               <Grid item xs={4}>
                <Button variant="contained" color="primary" onClick={()=>buttonClick(index)}>
                  {answer}
                </Button>
                </Grid>
              )))}
            </Grid>
        </Container>
    );
}

export default SlidingQuestion;