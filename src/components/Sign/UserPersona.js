import React, { useState } from "react";
import { Grid, Typography, Paper } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import automator from "./46525-automation.gif";
import integrator from "./14153-integrations.gif";
import developer from "./41504-developer-is-programming-using-notebook.gif";
import ReactCardFlip from "react-card-flip";

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

  const [isFlipped1, setIsFlipped1] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);
  const [isFlipped3, setIsFlipped3] = useState(false);

  const handleClick1 = (e) => {
    setIsFlipped1(!isFlipped1);
  };
  const handleClick2 = (e) => {
    setIsFlipped2(!isFlipped2);
  };
  const handleClick3 = (e) => {
    setIsFlipped3(!isFlipped3);
  };

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
              style={{ color: "#616161", textAlign: "center", fontWeight: 500 }}
            >
              Integration User Persona
            </Typography>
          </Grid>

          <Grid item xs className={classes.cardContainer}>
            <ReactCardFlip isFlipped={isFlipped1} flipDirection="vertical">
              <div>
                <Paper
                  elevation={3}
                  className={classes.paper}
                  onClick={handleClick1}
                >
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
                </Paper>
              </div>

              <div>
                <Paper
                  elevation={3}
                  className={classes.paper}
                  onClick={handleClick1}
                >
                  <Typography
                    variant="body1"
                    className={classes.text}
                    style={{ fontSize: "0.9rem", marginTop: "3em" }}
                    gutterBottom
                  >
                    Knowledge workers and citizen integrators in lines of
                    business can take advantage of the simpler,
                    configuration-based designer tooling to connect applications
                    in the cloud.
                  </Typography>
                  <Typography
                    variant="body1"
                    className={classes.text}
                    style={{ fontSize: "0.9rem" }}
                    gutterBottom
                  >
                    Alternatively, they can learn from common process flows by
                    using a no-code patterns.
                  </Typography>
                </Paper>
              </div>
            </ReactCardFlip>
          </Grid>
          <Grid item xs className={classes.cardContainer}>
            <ReactCardFlip isFlipped={isFlipped2} flipDirection="vertical">
              <div>
                <Paper
                  elevation={3}
                  className={classes.paper}
                  onClick={handleClick2}
                >
                  <img
                    src={integrator}
                    className={classes.image}
                    alt="Integrator gif"
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
                </Paper>
              </div>

              <div>
                <Paper
                  elevation={3}
                  className={classes.paper}
                  onClick={handleClick2}
                >
                  <Typography
                    variant="body1"
                    className={classes.text}
                    style={{ fontSize: "0.9rem", marginTop: "3em" }}
                    gutterBottom
                  >
                    Integration specialists can use the features part of the
                    Design, Deploy and Operations to tackle more detailed and
                    challenging requirements.
                  </Typography>
                </Paper>
              </div>
            </ReactCardFlip>
          </Grid>
          <Grid item xs className={classes.cardContainer}>
            <ReactCardFlip isFlipped={isFlipped3} flipDirection="vertical">
              <div>
                <Paper
                  elevation={3}
                  className={classes.paper}
                  onClick={handleClick3}
                >
                  <img
                    src={developer}
                    className={classes.image}
                    alt="Developer gif"
                  />

                  <Typography
                    variant="body1"
                    className={classes.text}
                    gutterBottom
                    style={{ marginTop: 0 }}
                  >
                    Are you a{" "}
                    <span className={classes.highlightText}> Developer </span>?
                  </Typography>
                </Paper>
              </div>

              <div>
                <Paper
                  elevation={3}
                  className={classes.paper}
                  onClick={handleClick3}
                >
                  <Typography
                    variant="body1"
                    className={classes.text}
                    style={{ fontSize: "0.9rem", marginTop: "3em" }}
                    gutterBottom
                  >
                    For the core IT teams that manage the key systems and
                    packaged applications, there are artefacts to build an
                    integration flow with ease.
                  </Typography>
                  <Typography
                    variant="body1"
                    className={classes.text}
                    style={{ fontSize: "0.9rem" }}
                    gutterBottom
                  >
                    Patterns for to support all styles of interaction, powerful
                    mapping, parsing, and transformation.
                  </Typography>
                  <Typography
                    variant="body1"
                    className={classes.text}
                    style={{ fontSize: "0.9rem" }}
                  >
                    A broad range of functions - including built-in unit testing
                    code and the ability to perform pre-deploy checks and
                    validation.
                  </Typography>
                </Paper>
              </div>
            </ReactCardFlip>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default UserPersona;
