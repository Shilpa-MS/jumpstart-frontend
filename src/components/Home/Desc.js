import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid, Typography, Button, Toolbar } from "@material-ui/core";
import { Card, CardContent } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import arrowbg from "./images/Page-Turner.svg";
import infoBg from "./images/Endless-Constellation.svg";
import { Link } from "react-router-dom";
import GetAppIcon from "@material-ui/icons/GetApp";

const useStyles = makeStyles((theme) => ({
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  subtitle: {
    marginBottom: "1em",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      marginRight: 0,
    },
  },
  descriptionContainer: {
    marginTop: "6em",
    backgroundColor: "#f5f5f5",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
  },
  icon: {
    marginLeft: "2em",
    height: "12em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
      marginRight: 0,
      width: "100%",
    },
  },
  skillsBackground: {
    backgroundImage: `url(${arrowbg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  skillsCard: {
    position: "absolute",
    boxShadow: theme.shadows[8],
    borderRadius: 15,
    padding: "3em",
    width: "40em",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "2em",
      paddingBottom: "2em",
      paddingLeft: 0,
      paddingRight: 0,
      borderRadius: 0,
      width: "100%",
    },
  },
  cardSubtitles: {
    fontWeight: 300,
  },
  infoBackground: {
    backgroundImage: `url(${infoBg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    // backgroundRepeat:"no-repeat",
    height: "100%",
    width: "100%",
  },
  infoText: {
    color: "white",
  },
}));

const Description = ({ setValue }) => {
  const [more, setMore] = useState(false);
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <React.Fragment>
      <Grid container>
        <Grid item>
          <Grid
            container
            direction="row"
            className={classes.descriptionContainer}
            justify={matchesSM ? "center" : undefined}
          >
            <Grid
              item
              md
              style={{
                marginLeft: matchesSM ? 0 : "5em",
                textAlign: matchesSM ? "center" : undefined,
              }}
            >
              <Typography variant="h4">TCS Jumpstart Pak</Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Cutting-edge tools and solutions to accelerate your Integration
                modernization journey.
              </Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                TCS’ Jumpstart kit for Integration encompasses IBM’ Cloud Pak
                for Integration platform spread across different levers of
                integration including Cloud Integration, API first strategy,
                Micro services, Containers, Hybrid Cloud and provides a
                comprehensive offering resulting in simplification and faster
                adoption of the platform.
              </Typography>

              {!more ? (
                <Grid item>
                  <Button
                    variant="outlined"
                    color="secondary"
                    className={classes.learnButton}
                    onClick={() => setMore(true)}
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                  </Button>
                </Grid>
              ) : (
                <Grid item>
                  <Toolbar>
                    <Typography variant="subtitle1">
                      To know more about Jumpstart, please download the User
                      Guide.
                    </Typography>
                    <a
                      href="/home/doc/TCS Jumpstart Portal User Guide.pdf"
                      target="_blank"
                    >
                      <GetAppIcon />
                    </a>
                  </Toolbar>

                  <Button
                    variant="outlined"
                    color="secondary"
                    className={classes.learnButton}
                    onClick={() => setMore(false)}
                  >
                    <span style={{ marginRight: 10 }}>Show less</span>
                  </Button>
                </Grid>
              )}
            </Grid>
            <Grid
              item
              style={{
                marginLeft: matchesSM ? 0 : "auto",
                marginRight: matchesSM ? 0 : "3em",
              }}
            >
              <img
                alt="TCS Jumpstart Pak"
                src="/home/images/integration.jpg"
                className={classes.icon}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          alignItems="center"
          justify="center"
          style={{ height: "40em", marginTop: "4em" }}
        >
          <Card className={classes.skillsCard}>
            <CardContent>
              <Grid container direction="column">
                <Grid item>
                  <Typography variant="h3" gutterBottom>
                    Our Skills
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="subtitle1"
                    className={classes.cardSubtitles}
                  >
                    Enterprise Architecture
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">
                    Integration Consulting
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">
                    Solution Development
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">
                    Cloud Pak for Integration Adaption
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <div className={classes.skillsBackground} />
        </Grid>
        {/*-------------------Information-----------------*/}
        <Grid
          container
          style={{ height: "40em" }}
          direction="row"
          alignItems="center"
          className={classes.infoBackground}
        >
          <Grid
            item
            container
            style={{
              // position: "absolute",
              textAlign: matchesXS ? "center" : "inherit",
            }}
            direction={matchesXS ? "column" : "row"}
          >
            <Grid
              item
              sm
              style={{ marginLeft: matchesXS ? 0 : matchesSM ? "1em" : "3em" }}
            >
              <Grid
                container
                style={{ marginBottom: matchesXS ? "10em" : 0 }}
                direction="column"
              >
                <Typography variant="h2" className={classes.infoText}>
                  About Us
                </Typography>
                <Typography variant="subtitle2" className={classes.infoText}>
                  {" "}
                  Know more about us!
                </Typography>
                <Grid item>
                  <Button
                    variant="outlined"
                    color="secondary"
                    className={classes.learnButton}
                    style={{ color: "white", borderColor: "white" }}
                    component={Link}
                    to="/about"
                    onClick={() => setValue(1)}
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              sm
              style={{
                marginRight: matchesXS ? 0 : matchesSM ? "1em" : "3em",
                textAlign: matchesXS ? "center" : "right",
              }}
            >
              <Grid container direction="column">
                <Typography variant="h2" className={classes.infoText}>
                  Contact Us
                </Typography>
                <Typography variant="subtitle2" className={classes.infoText}>
                  Stay connected!
                </Typography>
                <Grid item>
                  <Button
                    variant="outlined"
                    color="primary"
                    className={classes.learnButton}
                    style={{ color: "white", borderColor: "white" }}
                    component={Link}
                    to="/contact"
                    onClick={() => setValue(7)}
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Description;
