import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid, Typography, Button,Breadcrumbs } from "@material-ui/core";
import ReactPlayer from "react-player";
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  toolContainer: {
    flexGrow:1,
    padding:"3em"
  },
  assessmentText: {
    textAlign: "justify",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      margin: 0,
    },
  },
  video: {
    height: 400,
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

const AssessmentToolkit = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = theme.breakpoints.down("md");
  const handleDownload=(filename)=>{
    window.open(`tools/docs/${filename}`)
  }
  return (
    <React.Fragment>
       <Breadcrumbs className={classes.breadcrumbs}>
                <Link to="/tools" className={classes.link}>Tools</Link>
                <Link to="/one-click-deployment" className={classes.active}>One Click Deployment</Link>
                </Breadcrumbs> 
      <Grid container direction="column" className={classes.toolContainer}>
        <Grid item className={classes.assessmentText}>
          <Typography variant="h4" gutterBottom>
            One-Click Deployment
          </Typography>
        </Grid>
        <Grid item container direction="column" alignItems="center">
          <Grid item className={classes.assessmentText}>
            <Typography variant="subtitle1" gutterBottom>
              One-click solution is designed for migrating existing IIB or ACE
              workload to IBM Cloudpak for Integration. It provides end-to-end
              automation that includes Checking out the Code from SCM system,
              Build deployable artifacts and Deploy to OpenShift container
              platform.
            </Typography>
          </Grid>
          <Grid
            item
            container
            style={{ padding: "1rem" }}
            justify={matchesSM ? "center" : "undefined"}
            alignItems="center"
          >
            <Button variant="outlined" color="secondary" onClick={()=>handleDownload("TCS-CP4I-One-Click-Deployment-Users-Manual.pdf")}>
              Download Manual
            </Button>
          </Grid>
          <Grid item md>
            <ReactPlayer
              url={`/tools/videos/cp4i-ci-cd-demo.mp4`}
              controls={true}
              className={classes.video}
            />
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default AssessmentToolkit;
