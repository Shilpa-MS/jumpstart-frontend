import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid, Typography ,Breadcrumbs} from "@material-ui/core";
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  toolContainer: {
    flexGrow:1,
    padding: "3em",
  },
  assessmentText: {
    textAlign: "justify",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      margin: 0,
    },
  },
  image: {
    marginTop: "1em",
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
  link:{
    textDecoration:"none",
    color:theme.palette.text.secondary,        
  },
  active:{
    textDecoration:"none",
    color:theme.palette.text.primary
  },
  breadcrumbs:{
    margin:" 1em 0em -2em 3em",
  }
}));

const MultiCloud = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = theme.breakpoints.down("md");
  return (
    <React.Fragment>
      <Breadcrumbs className={classes.breadcrumbs}>
                <Link to="/tools" className={classes.link}>Tools</Link>
                <Link to="/multi-cloud-deployment" className={classes.active}>Multi Cloud Deployment</Link>
                </Breadcrumbs> 
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
