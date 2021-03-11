import React from "react";
import background from "./TCS-ALE-Partnership-card.jpg";
import { Grid, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import gif from './37478-intelligence-ai.gif';
import UserPersona from './UserPersona';

const useStyles = makeStyles((theme) => ({
  banner: {
    background: `url(${background})`,
    backgroundRepeat: `no-repeat`,
    backgroundSize: `cover`,
    height: "calc(100vh + 70px)",
    color: "#ffffff",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      backgroundSize: "auto",
    },
  },
  grid: {
    padding: "3%",
  },
  content: {
    lineHeight: "32px",
    [theme.breakpoints.down("md")]: {
      //   marginLeft: "-3rem",
      //   marginRight: "-9rem",
      margin: 0,
      padding: 0,
    },
  },
  bolderText:{
      fontWeight:'bold',
      fontSize:"1.3rem"
  },

}));

const LandingPage = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.banner}>
        <Grid container className={classes.grid} direction="column">
          <Grid item xs={6}>
            <Typography variant="h3" style={{ color: "white" }} gutterBottom>
              TCS Jumpstart Pak for Integration
            </Typography>
          </Grid>
          <Grid item sm={6} >
            <Typography variant="body1" className={classes.content} gutterBottom>
              Cutting-edge tools and solutions to accelerate your Integration
              modernization journey. TCS’ Jumpstart kit for Integration
              encompasses <span className={classes.bolderText}>IBM Cloud Pak ® for Integration </span>platform spread across
              different levers of integration including <span className={classes.bolderText}> Cloud </span>Integration, <span className={classes.bolderText}> API first </span>
              strategy, Micro services, Containers, Hybrid Cloud and
              provides a comprehensive offering resulting in <span className={classes.bolderText}> simplification </span> and
              <span className={classes.bolderText}> faster adoption </span> of the platform.
            </Typography>
          </Grid>
          <Grid item>
              <Grid container direction="row" style={{marginTop:"1em"}}>
                  <Grid item style={{marginRight:"2em"}}>
                      <Button variant="contained" color="primary" size="small">Log In</Button>
                  </Grid>
                  <Grid item>
                      <Button variant="contained" color="secondary" size="small">Sign Up</Button>
                  </Grid>
              </Grid>
          </Grid>
          <Grid item>
              {/* <img src={gif} alt="gif dis"/> */}
          </Grid>
        </Grid>
      </div>
      <UserPersona/>
      

    </React.Fragment>
  );
};

export default LandingPage;
