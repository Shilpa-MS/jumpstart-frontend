import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  toolContainer: {
    marginTop: "2em",
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

const MultiCloud = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = theme.breakpoints.down("md");
  return (
    <React.Fragment>
      <Grid container direction="column" className={classes.toolContainer}>
        <Grid item className={classes.assessmentText}>
          <Typography variant="h4" gutterBottom>
            Multi Cloud Deployment
          </Typography>
        </Grid>
        <Grid item container direction="column" alignItems="center">
          <Grid item className={classes.assessmentText}>
            <Typography variant="subtitle1" gutterBottom>
              It is very likely that the customer is running their application
              and integration workloads across variety of products and vendors.
              TCS Multi Cloud Deployment solution enables customer to deploy,
              run and manage their existing integration workloads inside
              container platform of their choice (Azure, AWS, IBM Cloud etc)
            </Typography>
          </Grid>
         
          <Grid item md>
            <img
              src="/tools/images/multi-cloud.jpg"
              alt="MultiCloud Deployment"
              className={classes.image}
            />
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default MultiCloud;
