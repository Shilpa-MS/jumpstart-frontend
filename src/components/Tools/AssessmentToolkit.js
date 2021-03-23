import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid, Typography, Button,Breadcrumbs} from "@material-ui/core";
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  toolContainer: {
    flexGrow:1,
    padding: "3em",
  },
  assessmentText: {
    // margin: "0 1em",
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

  const handleDownload = (filename) => {
    window.open(`/tools/docs/${filename}`);
  };
  const handleRoute = () => {
    window.open("https://cp4i-assessment-frontend.eu-gb.mybluemix.net/#/home");
  };
  return (
    <React.Fragment>
       <Breadcrumbs className={classes.breadcrumbs}>
                <Link to="/tools" className={classes.link}>Tools</Link>
                <Link to="/assessment-toolkit" className={classes.active}>Assessment Toolkit</Link>
                </Breadcrumbs> 
      <Grid container direction="column" className={classes.toolContainer}>
        <Grid item className={classes.assessmentText}>
          <Typography variant="h4" gutterBottom>
            Assessment Toolkit
          </Typography>
        </Grid>
        <Grid item container direction="column" alignItems="center">
          <Grid item className={classes.assessmentText}>
            <Typography variant="subtitle1" gutterBottom>
              Assessment Toolkit is a starting point to assess customer(s)
              existing integration landscape. The tool breaks the entire
              integration ecosystem into technical, business, infrastructure and
              operations domains, analyzing the answers received and creates a
              comprehensive report detailing tools, accelerators, RoI and best
              practices, which can be leveraged towards customer integration
              modernization journey.
            </Typography>
          </Grid>
          <Grid
            item
            container
            style={{ padding: "1rem" }}
            justify={matchesSM ? "center" : "flex-start"}
          >
            <Button variant="outlined" color="secondary" onClick={handleRoute}>
              Go to Toolkit
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() =>
                handleDownload(
                  "ABC Enterprise_Cloud Pak for Integration Assessment Report v1.0.pdf"
                )
              }
            >
              Download Report
            </Button>
          </Grid>
          <Grid item md>
            <img
              src="/tools/images/assess-toolkit.jpg"
              alt="Assessment toolkit"
              className={classes.image}
            />
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default AssessmentToolkit;
