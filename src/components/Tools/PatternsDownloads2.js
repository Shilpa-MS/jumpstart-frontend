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
    height: "5em",
    width: "34em",
    fontSize: "0.7rem",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "5em",
      fontSize: "0.6rem",
    },
  },
  gridItem: {
    marginBottom: "2rem",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      marginBottom:"1rem"
    },
  },
  helperText: {
    color: theme.palette.common.pink,
    fontSize: "0.7rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.6rem",
      textAlign: "center",
    },
  },
}));

const Patterns = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = theme.breakpoints.down("sm");

  const handleClick=(filename)=>{
    window.open(`/tools/patterns/${filename}`)
  }

  return (
    <React.Fragment>
      <Grid container direction="column">
        <Grid item >
          <Grid container direction={matchesSM?"row":"column"} justify="space-evenly">
            <Grid item className={classes.gridItem}>
              <Button
                color="secondary"
                variant="outlined"
                size="small"
                className={classes.button}
                onClick={()=>handleClick("kafka-pattern.zip")}
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
                onClick={()=>handleClick("HybridIntegrationPatternsUsingAppconnect.zip")}
              >
                <GetAppIcon color="secondary" />
                Hybrid Integration Pattern using APPCONNECT
              </Button>
            </Grid>
            <Grid item className={classes.gridItem}>
              <Button
                color="secondary"
                variant="outlined"
                size="small"
                className={classes.button}
                onClick={()=>handleClick("ACE_DB2_JDBC.zip")}
              >
                <GetAppIcon color="secondary" />
                ACE_DB2_JDBC Pattern
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid item >
          <Grid container direction={matchesSM?"row":"column"} justify="space-evenly">
            <Grid item className={classes.gridItem}>
              <Button
                color="secondary"
                variant="outlined"
                size="small"
                className={classes.button}
                onClick={()=>handleClick("AggregatePattern.zip")}
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
                onClick={()=>handleClick("HybridIntegration_SFToOnPrem_CallableFlow.zip")}
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
                onClick={()=>handleClick("iPaaS_EventStreamsToCloudantOnCloud.zip")}
              >
                <GetAppIcon color="secondary" />
                Event Streams to Cloudant
              </Button>
            </Grid>
          </Grid>
        </Grid>


        <Grid item >
          <Grid container direction={matchesSM?"row":"column"} justify="space-evenly">
            <Grid item className={classes.gridItem}>
              <Button
                color="secondary"
                variant="outlined"
                size="small"
                className={classes.button}
                onClick={()=>handleClick("SFToEventStreams.zip")}
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
                onClick={()=>handleClick("GroupNodePattern.zip")}
              >
                <GetAppIcon color="secondary" />
                ACE11-GroupNodePattern
              </Button>
            </Grid>
            <Grid item className={classes.gridItem} style={{marginBottom:0}}>
              <Button
                color="secondary"
                variant="outlined"
                size="small"
                className={classes.button}
                onClick={()=>handleClick("IBMFHIRServer_HL7ToFHIR.zip")}
              >
                <GetAppIcon color="secondary" />
                IBMFHIRServer_HL7ToFHIR_Solution
              </Button>
              <Typography variant="subtitle1" className={classes.helperText}>
            Please refer to the document IBMFHIRServer_HL7ToFHIR_Solution <br/>in
            Services&Solutions page.
          </Typography>
            </Grid>
          </Grid>
        </Grid>


        <Grid item >
          <Grid container direction={matchesSM?"row":"column"} justify="space-evenly">
            <Grid item className={classes.gridItem}>
              <Button
                color="secondary"
                variant="outlined"
                size="small"
                className={classes.button}
                onClick={()=>handleClick("RunTimeRuleInjection_Retail.yaml")}
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
                onClick={()=>handleClick("RunTimeRuleInjection_BFSI.yaml")}
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
                onClick={()=>handleClick("Inventoryintegration.yaml")}
              >
                <GetAppIcon color="secondary" />
                Retail_IVIntegration_Pattern
              </Button>
            </Grid>
          </Grid>
        </Grid>


        <Grid item >
          <Grid container direction={matchesSM?"row":"column"} justify="space-evenly">
            <Grid item className={classes.gridItem}>
              <Button
                color="secondary"
                variant="outlined"
                size="small"
                className={classes.button}
                onClick={()=>handleClick("Manufacturing_SAPPattern.zip")}
              >
                <GetAppIcon color="secondary" />
                Manufacturing_SAPIntegrationPattern
              </Button>
            </Grid>
            
          </Grid>
        </Grid>


        


      </Grid>
      
   
   
      
    
      {/* <Grid
        item
        container
        direction={matchesSM ? "row" : "column"}
        alignItems="space-evenly"
      >
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
      </Grid> */}

     
      
    </React.Fragment>
  );
};

export default Patterns;
