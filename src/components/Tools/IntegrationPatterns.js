import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import Patterns from './PatternsDownloads2';

const useStyles = makeStyles((theme) => ({
  toolContainer: {
    marginTop: "2em",
  },
  assessmentText: {
    margin: "0 1em",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      margin: 0,
    },
  },
  image: {
    marginTop: "1em",
    marginLeft: "2em",
    height: "24em",
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
      marginRight: 0,
      width: "100%",
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}));

const IntegrationPatterns = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container direction="column" className={classes.toolContainer}>
        <Grid item >
          <Typography variant="h4" gutterBottom className={classes.assessmentText}>
            Integration Patterns
          </Typography>
        </Grid>
        <Grid item container direction="column" alignItems="center">
          <Grid item >
            <Typography variant="subtitle1" gutterBottom className={classes.assessmentText}>
              Integration pattern is a repository of reusable flows which can be
              integrated into the enterprise message flows for better
              visibility, traceability and speed of development.
            </Typography>
          </Grid>
          <Grid item md>
            <img
              src="/tools/images/PatternsOverview.jpg"
              alt="Integration patterns"
              className={classes.image}
            />
          </Grid>
         
         
        </Grid>
        <Grid item style={{marginTop:"1em"}}>
           <Patterns/>
          </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default IntegrationPatterns;
