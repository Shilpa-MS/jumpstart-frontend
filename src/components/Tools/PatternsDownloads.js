import React from "react";
import { Grid, Button, Typography } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import GetAppIcon from "@material-ui/icons/GetApp";

const useStyles = makeStyles((theme) => ({
  iconText: {
    fontSize: "0.8rem",
    textAlign: "justify",
  },
  button: {
    height: "2rem",
    width: "27rem",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "2rem",
      fontSize: "0.6rem",
    },
  },
  gridItem: {
    marginLeft: "1rem",
    marginBottom: "1rem",
    [theme.breakpoints.down("sm")]:{
      marginLeft:0
    }
  },
  helperText:{
    color:theme.palette.common.pink,
    [theme.breakpoints.down("sm")]:{
      fontSize:"0.6rem",
      textAlign:"center"
    }
  }
}));

const Patterns = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = theme.breakpoints.down("sm");
  return (
    <React.Fragment>
      <Grid container direction="column">
        <Grid item className={classes.gridItem}>
          <Button
            color="secondary"
            variant="outlined"
            size="small"
            className={classes.button}
          >
            <GetAppIcon color="secondary" />
            Kafka Integration Pattern
          </Button>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Button
            color="secondary"
            variant="outlined"
            size="small"
            className={classes.button}
          >
            <GetAppIcon color="secondary" />
            Hybrid Integration Pattern using APPCONNECT
          </Button>
        </Grid>{" "}
        <Grid item className={classes.gridItem}>
          <Button
            color="secondary"
            variant="outlined"
            size="small"
            className={classes.button}
          >
            <GetAppIcon color="secondary" />
            ACE_DB2_JDBC Pattern
          </Button>
        </Grid>
      </Grid>
      <Grid item className={classes.gridItem}>
        <Button
          color="secondary"
          variant="outlined"
          size="small"
          className={classes.button}
        >
          <GetAppIcon color="secondary" />
          Aggregate Pattern
        </Button>
      </Grid>
      <Grid item className={classes.gridItem}>
        <Button
          color="secondary"
          variant="outlined"
          size="small"
          className={classes.button}
        >
          <GetAppIcon color="secondary" />
          Hybrid Integration using Callable Flow Pattern
        </Button>
      </Grid>
      <Grid item className={classes.gridItem}>
        <Button
          color="secondary"
          variant="outlined"
          size="small"
          className={classes.button}
        >
          <GetAppIcon color="secondary" />
          Event Streams to Cloudant
        </Button>
      </Grid>
      <Grid item className={classes.gridItem}>
        <Button
          color="secondary"
          variant="outlined"
          size="small"
          className={classes.button}
        >
          <GetAppIcon color="secondary" />
          SalesForce to Event Streams
        </Button>
      </Grid>
      <Grid item className={classes.gridItem}>
        <Button
          color="secondary"
          variant="outlined"
          size="small"
          className={classes.button}
        >
          <GetAppIcon color="secondary" />
          ACE11-GroupNodePattern
        </Button>
      </Grid>
      <Grid item container direction={matchesSM ? "row" : "column"} alignItems="space-evenly">
        <Grid item className={classes.gridItem}>
          <Button
            color="secondary"
            variant="outlined"
            size="small"
            className={classes.button}
          >
            <GetAppIcon color="secondary" />
            IBMFHIRServer_HL7ToFHIR_Solution
          </Button>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1" className={classes.helperText}>
            please refer to the document IBMFHIRServer_HL7ToFHIR_Solution in
            Services&Solutions page
          </Typography>
        </Grid>
      </Grid>

      <Grid item className={classes.gridItem}>
        <Button
          color="secondary"
          variant="outlined"
          size="small"
          className={classes.button}
        >
          <GetAppIcon color="secondary" />
          NoCode_RuntimeRuleInjection_Retail_UsingAppConnect
        </Button>
      </Grid>
      <Grid item className={classes.gridItem}>
        <Button
          color="secondary"
          variant="outlined"
          size="small"
          className={classes.button}
        >
          <GetAppIcon color="secondary" />
          NoCode_RuntimeRuleInjection_BFSI_UsingAppConnect
        </Button>
      </Grid>
      <Grid item className={classes.gridItem}>
        <Button
          color="secondary"
          variant="outlined"
          size="small"
          className={classes.button}
        >
          <GetAppIcon color="secondary" />
          Retail_IVIntegration_Pattern
        </Button>
      </Grid>
      <Grid item className={classes.gridItem}>
        <Button
          color="secondary"
          variant="outlined"
          size="small"
          className={classes.button}
        >
          <GetAppIcon color="secondary" />
          Manufacturing_SAPIntegrationPattern
        </Button>
      </Grid>
    </React.Fragment>
  );
};

export default Patterns;
