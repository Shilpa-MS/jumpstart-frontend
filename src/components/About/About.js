import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles,useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  aboutContainer: {
    flexGrow:1,
    padding:"3em"
  },
  text: {
    paddingTop:"1em",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0",
      textAlign: "center",
    },
  },
  image: {
    height: "20em",
    width: "40em",
    [theme.breakpoints.down("sm")]:{
        width:"100%",
        height:"100%",
        margin:0
    }
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
  const theme=useTheme();
  const matchesSM=theme.breakpoints.down("sm");

  return (
    <React.Fragment>
      <Grid
        container
        direction="column"
        className={classes.aboutContainer}
      >
        <Grid item>
          <Typography variant="h4"  >
            About Us
          </Typography>
        </Grid>
        <Grid item sm>
          <Typography variant="subtitle1" className={classes.text} >
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
        <Grid item >
          <Typography variant="h6" className={classes.text}>
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
          >
            Our Team
          </Typography>
        </Grid>
        <Grid item>
          <Grid item container direction={matchesSM?"row":"column"} justify={matchesSM?"space-evenly":"undefined"}>
            <Grid item>
              <img
                src="/about/mangesh1.jpg"
                alt="Mangesh Potdar"
                className={classes.teamPhoto}
              />
              <Typography variant="subtitle1" className={classes.teamText}>
                <b>Mangesh Potdar</b>
              </Typography>
              <Typography variant="subtitle1" className={classes.teamText}>
                Chief Architect
              </Typography>
            </Grid>
            <Grid item>
              <img
                src="/about/chris-photo.jpg"
                alt="Chris Hembrom"
                className={classes.teamPhoto}
              />
              <Typography variant="subtitle1" className={classes.teamText}>
                <b>Chris Hembrom</b>
              </Typography>
              <Typography variant="subtitle1" className={classes.teamText}>
                Integration & Cloud Architect
              </Typography>
            </Grid>
            <Grid item>
              <img
                src="/about/AkhilHada_PP.jpg"
                alt="Akhil Hada"
                className={classes.teamPhoto}
              />
              <Typography variant="subtitle1" className={classes.teamText}>
                <b>Akhil Hada</b>
              </Typography>
              <Typography variant="subtitle1" className={classes.teamText}>
                Enterprise Architect
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default About;
