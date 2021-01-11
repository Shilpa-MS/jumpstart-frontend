import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid, Typography, Button } from "@material-ui/core";
import ReactPlayer from "react-player";

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
