import React from "react";
import { Grid, Typography, Paper } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import automator from "./46525-automation.gif";
import integrator from "./14153-integrations.gif";
import developer from "./41504-developer-is-programming-using-notebook.gif";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 40,
    background: "black",
  },
  paper: {
    padding: theme.spacing(2),
    height: "20em",
    position: "relative",
  },
  image: {
    height: "15em",
    width: "15em",
    margin: "5px auto 2px",
    display: "block",
  },
  highlightText: {
    color: theme.palette.common.red,
    fontSize: "1.2rem",
  },
  text: {
    textAlign: "center",
  },
}));

const UserPersona = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <React.Fragment>
      <div className={classes.root}>
        <Grid
          container
          className={classes.container}
          direction={matchesSM ? "column" : "row"}
          justify={matchesSM ? "center" : "center"}
          alignItems={matchesSM ? "space-between" : "space-evenly"}
          spacing={10}
        >
          <Grid item xs={12}>
            <Typography
              variant="h4"
              style={{ color: "#616161", textAlign: "center",fontWeight:500 }}
            >
              Integration User Persona
            </Typography>
          </Grid>

          <Grid item xs>
            <Paper elevation={3} className={classes.paper}>
              <img
                src={automator}
                className={classes.image}
                alt="Automator gif"
              />

              <Typography
                variant="body1"
                className={classes.text}
                gutterBottom
                style={{ marginTop: 0 }}
              >
                Are you an{" "}
                <span className={classes.highlightText}> Automator </span>?
              </Typography>
              <Typography
                variant="body1"
                className={classes.text}
                style={{ fontSize: "0.9rem" }}
              >
                Anyone can do it, even without technical skills.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper elevation={3} className={classes.paper}>
              <img
                src={integrator}
                className={classes.image}
                alt="Integrator"
              />

              <Typography
                variant="body1"
                className={classes.text}
                gutterBottom
                style={{ marginTop: 0 }}
              >
                Are you an{" "}
                <span className={classes.highlightText}> Integrator </span>?
              </Typography>
              <Typography
                variant="body1"
                className={classes.text}
                style={{ fontSize: "0.9rem" }}
              >
                Technical person in a business environment/Skilled integration
                practitioners.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper elevation={3} className={classes.paper}>
              <img src={developer} className={classes.image} alt="Developer" />

              <Typography
                variant="body1"
                className={classes.text}
                gutterBottom
                style={{ marginTop: 0 }}
              >
                Are you a{" "}
                <span className={classes.highlightText}> Developer </span>?
              </Typography>
              <Typography
                variant="body1"
                className={classes.text}
                style={{ fontSize: "0.9rem" }}
              >
                Application Developer.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default UserPersona;
