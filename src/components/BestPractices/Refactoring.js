import React from "react";
import { Grid, Button } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import GetAppIcon from "@material-ui/icons/GetApp";

const useStyles = makeStyles((theme) => ({
  iconText: {
    fontSize: "0.8rem",
    textAlign: "justify",
  },
  button: {
    height: "2rem",
    width: "25rem",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "3rem",
      fontSize: "0.7rem",
    },
  },
}));

const Refactoring = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = theme.breakpoints.down("sm");

  const handleClick = (filename) => {
    window.open(`best-practices/docs/${filename}`);
  };
  return (
    <React.Fragment>
      <Grid container direction="column">
        <Grid
          item
          container
          direction={matchesSM ? "row" : "column"}
          justify={matchesSM ? "space-evenly" : "center"}
          alignItems="center"
          style={{ margin: "0", marginBottom: "1rem" }}
        >
          <Grid item>
            <Button
              color="secondary"
              variant="outlined"
              size="small"
              className={classes.button}
              onClick={() => handleClick("ACE_To_Event_streams_in_CP4I.docx")}
            >
              <GetAppIcon color="secondary" />
              ACE To_Event streams in CP4I
            </Button>
          </Grid>
          <Grid item>
            <Button
              color="secondary"
              variant="outlined"
              size="small"
              className={classes.button}
              onClick={() => handleClick("NodeshavingQMDependencyForACE_v1.0.docx")}

            >
              <GetAppIcon color="secondary" />
              Nodeshaving QMDependency For ACE
            </Button>
          </Grid>
          <Grid item>
            <Button
              color="secondary"
              variant="outlined"
              size="small"
              className={classes.button}
              onClick={() => handleClick("UnSupportedNodes_QueueRelatedNodes_v1.0.docx")}

            >
              <GetAppIcon color="secondary" />
              UnSupported Nodes Queue Related Node
            </Button>
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction={matchesSM ? "row" : "column"}
          justify={matchesSM ? "space-evenly" : "center"}
          alignItems="center"
          style={{ margin: "0", marginBottom: "1rem" }}
        >
          <Grid item>
            <Button
              color="secondary"
              variant="outlined"
              size="small"
              className={classes.button}
              onClick={() => handleClick("TA Advisor Problem Statements.pptx")}

            >
              <GetAppIcon color="secondary" />
              TA Advisor Problem Statements
            </Button>
          </Grid>
          <Grid item>
            <Button
              color="secondary"
              variant="outlined"
              size="small"
              className={classes.button}
              onClick={() => handleClick("MQPropertiesAutomation.zip")}

            >
              <GetAppIcon color="secondary" />
              MQ Propertiesfile Update Automation Tool
            </Button>
          </Grid>
          <Grid item>
            <Button
              color="secondary"
              variant="outlined"
              size="small"
              className={classes.button}
              onClick={() => handleClick("MQProperties_ClientConnection_UpdateAutomationDoc.docx")}

            >
              <GetAppIcon color="secondary" />
              MQ Properties Update Automation Tool Manual
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Refactoring;
