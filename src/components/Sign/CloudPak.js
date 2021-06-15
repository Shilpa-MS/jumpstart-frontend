import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import jumpstart from "./media/CloudPak2.gif";
import CapabilitiesCard from "./CapabilitiesCard";
import capabilitiesJson from "./data/capabilities.json";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "3em",
  },
  image: {
    width: "40em",
    height: "30em",
  },
  tile: {
    padding: "1em",
    width: "20em",
    background: "#eeeeee",
    border: "2px solid white",
  },
  appHead: {
    fontSize: "0.9em",
    paddingBottom: "0.9em",
    fontWeight: 500,
  },
  appDesc: {
    fontSize: "0.8em",
    paddingBottom: "0.6em",
  },
  link: {
    fontFamily: "Roboto",
    color: theme.palette.common.blue,
  },
  blueText: {
    color: theme.palette.common.blue,
    fontWeight: 500,
  },
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
            alignItems="flex-start"
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
                IBM Cloud Paks helps you intelligently access, integrate and
                deliver your data, applications, and workflows –anywhere.
              </Typography>
              <ul>
                <li>
                  <Typography variant="body1" style={{ marginTop: "1em" }}>
                    <b>ACCELERATE</b> innovation and efficiency to unlock
                    immediate value
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" style={{ marginTop: "1em" }}>
                    <b>INTEGRATE</b> and connect applications, data, and
                    services across multiple clouds
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" style={{ marginTop: "1em" }}>
                    <b>MANAGE</b> applications intelligently across your
                    environment
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" style={{ marginTop: "1em" }}>
                    <b>RUN</b> on Red Hat OpenShift, so you can build once and
                    deploy anywhere
                  </Typography>
                </li>
              </ul>
            </Grid>
            <Grid item md>
              <img src={jumpstart} className={classes.image} alt="Jumpstart" />
            </Grid>
          </Grid>
        </Grid>

        <Grid item style={{ padding: "2em", background: "black" }}>
          <Typography variant="h5" style={{ color: "white" }}>
            Cloud Pak for Integration
          </Typography>
        </Grid>
        <Grid item className={classes.root}>
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
              <Typography variant="h6" gutterBottom style={{ color: "black",marginBottom:"1em",fontWeight:400 }}>
                Everything you need in a comprehensive cloud integration
                solution
              </Typography>
              <Typography variant="body1" align="justify">
                IBM Cloud Pak® for Integration helps deliver a new,
                AI-accelerated approach that enables extended teams to meet
                escalating demand,
               help reduce costs and increase operational agility with
                capabilities including API management,
                 application and data integration, messaging and events,
                high-speed transfer, and end-to-end security.
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Grid item>
            <Grid container direction="row">
              <Grid item style={{ width: "50%" }}>
                <Typography
                  variant="body1"
                  gutterBottom
                  style={{ padding: "2em" ,fontSize:"1.2rem"}}
                  align="left"
                  className={classes.blueText}
                >
                  Modernize one aspect of integration — or all of them
                </Typography>
              </Grid>
            </Grid>
          </Grid>

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

            <Grid item md>
              <Typography variant="body1">
                Explore what you can do with flexible AI-powered software
                components for hybrid cloud.
              </Typography>
              <Grid container direction="column" style={{ marginTop: "2em" }} spacing={2}>
                <Grid item>
                  <Grid
                    container
                    direction="row"
                    justify="space-between"
                   
                  >
                    <Grid item  >
                    <CapabilitiesCard
                        title={capabilitiesJson[0].title}
                        description={capabilitiesJson[0].desc}
                        url={capabilitiesJson[0].url}
                        link={capabilitiesJson[0].link}
                      />
                    </Grid>
                    <Grid item >
                      <CapabilitiesCard
                        title={capabilitiesJson[1].title}
                        description={capabilitiesJson[1].desc}
                        url={capabilitiesJson[1].url}
                        link={capabilitiesJson[1].link}
                      />                   
                    </Grid>                   
                  </Grid>
                </Grid>

                <Grid item>
                  <Grid
                    container
                    direction="row"                  
                    justify="space-between"
                  
                    
                  >
                     <Grid item  >
                    <CapabilitiesCard
                        title={capabilitiesJson[2].title}
                        description={capabilitiesJson[2].desc}
                        url={capabilitiesJson[2].url}
                        link={capabilitiesJson[2].link}
                      />
                    </Grid>
                    <Grid item  >
                    <CapabilitiesCard
                        title={capabilitiesJson[3].title}
                        description={capabilitiesJson[3].desc}
                        url={capabilitiesJson[3].url}
                        link={capabilitiesJson[3].link}
                      />
                    </Grid>
                   
                  </Grid>
                </Grid>
                <Grid item>
                <Grid
                    container
                    direction="row"                  
                    justify="space-between"
                  
                    
                  >
                  <Grid item  >
                    <CapabilitiesCard
                        title={capabilitiesJson[4].title}
                        description={capabilitiesJson[4].desc}
                        url={capabilitiesJson[4].url}
                        link={capabilitiesJson[4].link}
                      />
                    </Grid>
                    <Grid item  >
                    <CapabilitiesCard
                        title={capabilitiesJson[5].title}
                        description={capabilitiesJson[5].desc}
                        url={capabilitiesJson[5].url}
                        link={capabilitiesJson[5].link}
                      />
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
