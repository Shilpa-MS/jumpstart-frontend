import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  aboutContainer: {
    flexGrow: 1,
    padding: "3em",
  },
  text: {
    paddingTop: "1em",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0",
      textAlign: "center",
    },
  },
  image: {
    height: "20em",
    width: "40em",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "100%",
      margin: 0,
    },
  },
  teamPhoto: {
    height: "10em",
    width: "10em",
    borderRadius: "5em",
  },
  teamText: {
    textAlign: "center",
  },
}));

const About = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = theme.breakpoints.down("sm");

  return (
    <React.Fragment>
      <Grid container direction="column" className={classes.aboutContainer}>
        <Grid item>
          <Typography variant="h4">About Us</Typography>
        </Grid>
        <Grid item sm>
          <Typography variant="subtitle1" className={classes.text}>
            A team of integration experts delivering ready to use solutions and
            accelerators.
          </Typography>
          <Typography variant="subtitle1" gutterBottom className={classes.text}>
            We are a part of IBM Incubation Team in TCS focussing on delivering
            solution and accelerators on cutting edge integration platforms and
            tools on IBM. Each one of us have 16+ years of experience in the
            area of Enterprise Architecture implementing simple to complex
            solutions on IBM integration platform. It's been our long
            association with IBM and Integration having worked with version 6
            onwards till the latest. We have played a gamut of roles starting
            from developer, to designer to tech lead to Architect.
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="h6"
            className={classes.text}
            style={{ paddingBottom: "1em" }}
          >
            Today's Integration Requirements
          </Typography>
        </Grid>
        <Grid item container justify="center">
          <img src="/about/Slide2.jpg" alt="About" className={classes.image} />
        </Grid>
        <Grid item>
          <Typography
            variant="h6"
            className={classes.text}
            gutterBottom
            style={{ paddingBottom: "1em" }}
          >
            Our Team
          </Typography>
        </Grid>
        <Grid item>
          <Grid
            item
            container
            direction={matchesSM ? "row" : "column"}
            justify={matchesSM ? "space-evenly" : "undefined"}
          >
            <Grid item>
              <Grid
                container
                direction="column"
                alignItems="center"
                justify="space-evenly"
              >
                <Grid item>
                  <img
                    src="/about/mangesh1.jpg"
                    alt="Mangesh"
                    className={classes.teamPhoto}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1" className={classes.teamText}>
                    <b>Mangesh Potdar</b>
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1" className={classes.teamText}>
                    Chief Architect
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid
                container
                direction="column"
                alignItems="center"
                justify="space-evenly"
              >
                <Grid item>
                  <img
                    src="/about/chris-photo.jpg"
                    alt="Chris"
                    className={classes.teamPhoto}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1" className={classes.teamText}>
                    <b>Chris Hembrom</b>
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1" className={classes.teamText}>
                    Integration and Cloud Architect
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid
                container
                direction="column"
                alignItems="center"
                justify="space-evenly"
              >
                <Grid item>
                  <img
                    src="/about/AkhilHada_PP.jpg"
                    alt="Akhil"
                    className={classes.teamPhoto}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1" className={classes.teamText}>
                    <b>Akhil Hada</b>
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1" className={classes.teamText}>
                    Enterprise Architect
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction={matchesSM ? "row" : "column"}
            justify={matchesSM ? "space-evenly" : "undefined"}
            alignItems="center"
            style={matchesSM ? { paddingTop: "2em" } : undefined}
          >
            <Grid item>
              <Grid
                container
                direction="column"
                alignItems="center"
                justify="space-evenly"
              >
                <Grid item>
                  <img
                    src="/about/Santhosh.jpeg"
                    alt="Santhosh R"
                    className={classes.teamPhoto}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1" className={classes.teamText}>
                    <b>Santhosh R</b>
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1" className={classes.teamText}>
                    Cloud Pak for Integration Architect
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item style={matchesSM ? { marginLeft: "-2em" } : undefined}>
              <Grid
                container
                direction="column"
                alignItems="center"
                justify="space-evenly"
              >
                <Grid item>
                  <img
                    src="/about/Vijay.jpg"
                    alt="Vijay"
                    className={classes.teamPhoto}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1" className={classes.teamText}>
                    <b>Vijay Ram Kumar Durairaj</b>
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1" className={classes.teamText}>
                    Cloud Pak for Integration Architect
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item>
              <Grid
                container
                direction="column"
                alignItems="center"
                justify="space-evenly"
              >
                <Grid item>
                  <img
                    src="/about/Shilpa.jpg"
                    alt="Shilpa"
                    className={classes.teamPhoto}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1" className={classes.teamText}>
                    <b>Shilpa M S</b>
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1" className={classes.teamText}>
                    Developer
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default About;
