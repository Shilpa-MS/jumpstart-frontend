import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  toolContainer: {
    flexGrow:1,
    padding:"3em"
  },
  assessmentText: {
    margin: "0 1em",
    textAlign: "justify",
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

const Services = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container direction="column" className={classes.toolContainer}>
        <Grid item className={classes.assessmentText}>
          <Typography variant="h4" gutterBottom>
            Stories
          </Typography>
        </Grid>
        <Grid item container direction="row" alignItems="center">
          <Grid item className={classes.assessmentText} md>
            <Typography variant="subtitle1" gutterBottom>
              Easy to use references.
              <br />
              Sharing some of the customer stories who have already started
              their journey on Cloud Pak for Integration.
            </Typography>
           
          </Grid>

          <Grid item md>
            <img
              src="/stories/stories.jpg"
              alt="Stories"
              className={classes.image}
            />
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Services;
