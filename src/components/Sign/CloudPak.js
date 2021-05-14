import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import jumpstart from "./36596-the-woman-sitting-on-the-phone.gif";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "3em",
  },
  image: {
    width: "30em",
    height: "20em",
  },
  tile:{
    padding:"1em",
    width:"20em",
    background:"#f5f5f5",
    border:"2px solid white"
  },
  appHead:{
    fontSize:"0.9em",
    paddingBottom:"0.9em",
    fontWeight:500
  },
  appDesc:{
    fontSize:"0.8em",
    paddingBottom:"0.6em"
  },
  link:{
    fontFamily:"Roboto",
    color:theme.palette.common.blue
  }
}));

const Cloudpak = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container direction="column">
        <Grid item>
          <Grid
            container
            className={classes.root}
            direction="row"
            alignItems="center"
            justify="space-evenly"
          >
            <Grid item xs>
              <Typography
                variant="h2"
                gutterBottom
                style={{ color: "black", lineHeight: "1.3em" }}
              >
                What is Cloud Pak?
              </Typography>
              <Typography variant="body1" style={{ marginTop: "1em" }}>
                Watch this short video to find out more about IBM Cloud Paks in
                just 2 minutes!
              </Typography>
            </Grid>
            <Grid item>
              <img src={jumpstart} className={classes.image} alt="Jumpstart" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item style={{ background: "#f5f5f5" }} className={classes.root}>
          <Grid
            container
            direction="row"
            alignItems="center"
            justify="space-evenly"
          >
            <Grid item xs>
              <Typography
                variant="h6"
                gutterBottom
                style={{ color: "black", lineHeight: "1.3em" }}
              >
                Overview
              </Typography>
            </Grid>
            <Grid item md>
              <Typography variant="h5" gutterBottom>
                Everything you need in a comprehensive cloud integration
                solution
              </Typography>
              <Typography variant="body1">
                IBM Cloud Pak® for Integration helps deliver a new,
                AI-accelerated approach that enables extended teams to meet
                escalating demand, help reduce costs and increase operational
                agility with capabilities including API management, application
                and data integration, messaging and events, high-speed transfer,
                and end-to-end security.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            className={classes.root}
            direction="row"
            alignItems="center"
            justify="space-evenly"
          >
            <Grid item xs>
              <Typography
                variant="h6"
                gutterBottom
                style={{ color: "black", lineHeight: "1.3em" }}
              >
                Capabilities
              </Typography>
            </Grid>
            <Grid item lg>
              <Typography variant="h5" gutterBottom>
                Modernize one aspect of integration — or all of them
              </Typography>
              <Typography variant="body1">
                Explore what you can do with flexible AI-powered software
                components for hybrid cloud.
              </Typography>
              <Grid container direction="column" style={{marginTop:"2em"}}>
                <Grid item>
                  <Grid
                    container
                    direction="row"
                    alignItems="flex-start"
                    justify="space-between"
                    style={{flexGrow:1}}
                    spacing={5}
                  >
                    <Grid item xs className={classes.tile}>
                      <Typography variant="body1" className={classes.appHead}gutterBottom>API management</Typography>
                      <Typography variant="body1" className={classes.appDesc} gutterBottom>
                        Rapidly secure and manage your entire API ecosystem
                        across multiple clouds.
                      </Typography>
                      <a href="https://www.ibm.com/uk-en/cloud/api-connect" className={classes.link} target="_blank" rel="noreferrer noopener">IBM API Connect</a>
                    </Grid>
                    <Grid item xs className={classes.tile}>
                      <Typography variant="body1" className={classes.appHead}>Application integration</Typography>
                      <Typography variant="body1" className={classes.appDesc}>
                      Integrate applications and data no matter where they live.
                      </Typography>
                      <a href="https://www.ibm.com/uk-en/cloud/app-connect" className={classes.link} target="_blank" rel="noreferrer noopener">IBM App Connect</a>
                    </Grid>
                    <Grid item xs className={classes.tile}>
                      <Typography variant="body1" className={classes.appHead}gutterBottom>Enterprise Messaging</Typography>
                      <Typography variant="body1" className={classes.appDesc} gutterBottom>
                      Receive the information you need when you need it — once and once only.
                      </Typography>
                      <a href="https://www.ibm.com/uk-en/cloud/api-connect" className={classes.link} target="_blank" rel="noreferrer noopener">IBM MQ</a>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item>
                  <Grid
                    container
                    direction="row"
                    alignItems="flex-start"
                    justify="space-between"
                    style={{flexGrow:1,marginTop:"1em"}}
                    spacing={5}
                  >
                    <Grid item xs className={classes.tile}>
                      <Typography variant="body1" className={classes.appHead}gutterBottom>Event streaming</Typography>
                      <Typography variant="body1" className={classes.appDesc} gutterBottom>
                      Build intelligent, responsive applications that react to events in real time.
                      </Typography>
                      <a href="https://www.ibm.com/uk-en/cloud/api-connect" className={classes.link} target="_blank" rel="noreferrer noopener">IBM Event Streams</a>
                    </Grid>
                    <Grid item xs className={classes.tile}>
                      <Typography variant="body1" className={classes.appHead}>High-speed data transfer</Typography>
                      <Typography variant="body1" className={classes.appDesc}>
                      Move data of any size or volume around the world at maximum speed.
                      </Typography>
                      <a href="https://www.ibm.com/uk-en/cloud/app-connect" className={classes.link} target="_blank" rel="noreferrer noopener">IBM Aspera</a>
                    </Grid>
                    <Grid item xs className={classes.tile}>
                      <Typography variant="body1" className={classes.appHead}gutterBottom>End-to-end security</Typography>
                      <Typography variant="body1" className={classes.appDesc} gutterBottom>
                      Create a persistent encrypted connection between environments.
                      </Typography>
                      <a href="https://www.ibm.com/uk-en/cloud/api-connect" className={classes.link} target="_blank" rel="noreferrer noopener">IBM DataPower Gateway</a>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Cloudpak;
