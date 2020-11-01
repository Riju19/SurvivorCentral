import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(15),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        },
  }));

const SlidingQuestion = ({questionObject}) => { // input
    const classes = useStyles();
    const question = questionObject.question;
    const answer=questionObject.responseChoices;
    return(
        <Container component="main" maxWidth="xs">
            <Typography component="h1" variant="h5">
                    {question}
            </Typography>       
            {answer.map((answer,index) => (
                <Button variant="contained" color="primary">
                  {answer}
                </Button>
              ))}
        </Container>
    );
}

export default SlidingQuestion;