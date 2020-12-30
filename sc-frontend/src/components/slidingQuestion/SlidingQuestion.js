import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    question:{
      flexGrow:1
    },

    buttonFormat:{
      alignItems: "center ",
      display: "flex",
      justifyContent: "center",
    },

    buttonStyles: {
      background: '#7F0FAF',
      borderRadius: '15px',
      border: '20 px',
      fontWeight: 'bold',
      color: 'white',
      height: 48,
      padding: '10px 30px',
    },

    answer: {
      textAlign: 'center',
      marginTop: "10px",
      justifyContent: "center",
      alignItems: "center",
      top: "50%",
      left: "50%",
    },
    
    root: {
      textAlign: 'center',
      padding: "20 rem",
    }
  }));

const SlidingQuestion = ({questionObject, buttonClick}) => { // input
    const classes = useStyles();
    const question = questionObject.question;
    const answer = questionObject.responseChoices;

    return(
        <Container className = {classes.root} component="main" maxWidth="xl">
            <Typography variant="h5" className="classes.question">
                    {question}
            </Typography>       
            <Grid container  direction="row" alignItems="center" spacing={3} className={classes.answer}>
            {answer.length === 0 && (<Button variant="contained" color="primary" onClick={()=>buttonClick(0)}>
                  Next
                </Button>)}
            {answer.length > 0 && (answer.map((answer,index) => (
              <Grid container item xs={12} md={6} lg={3} spacing={1} className={classes.buttonFormat}>
                <Button className={classes.buttonStyles} onClick={()=>buttonClick(index)}>
                  {answer}
                </Button>
              </Grid>
              )))}
            </Grid>
        </Container>
    );
}

export default SlidingQuestion;