import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid, Typography, Button } from "@material-ui/core";

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
