import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import {
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
} from "@material-ui/core";
import customer from "./images/customer.jpg";
import capabilities from "./images/technicalCapabilities.jpg";
import implementation from "./images/technicalImplementation.jpg";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // marginTop: "5em",
    [theme.breakpoints.down("sm")]: {
      padding: "3em",
      margin: 0,
    },
    padding:"3em"
  },
  media: {
    height: 140,
  },
  card: {
    width: 300,
    [theme.breakpoints.down("sm")]: {
      margin: "2em 0em",
    },
  },
  bolderText: {
    fontWeight: 500,
    fontSize: "1.1rem",
    color:theme.palette.common.blue
  },
}));

const Home2 = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = theme.breakpoints.down("sm");
  return (
    <React.Fragment>
      <Grid container direction="column" className={classes.root}>
        <Grid item>
          <Typography variant="body1" align="center" style={{fontWeight:300,fontSize:"1rem"}}>
          Cutting-edge tools and solutions to accelerate your Integration
              modernization journey. TCS’ Jumpstart kit for Integration
              encompasses{" "}
              <span className={classes.bolderText}>
                IBM Cloud Pak ® for Integration{" "}
              </span>
              platform spread across different levers of integration including{" "}
              <span className={classes.bolderText}> Cloud </span>Integration,{" "}
              <span className={classes.bolderText}> API first </span>
              strategy, Micro services, Containers, Hybrid Cloud and provides a
              comprehensive offering resulting in{" "}
              <span className={classes.bolderText}> simplification </span> and
              <span className={classes.bolderText}> faster adoption </span> of
              the platform.
          </Typography>
        </Grid>
        <Grid item style={{marginTop:"3em"}}>
          <Grid
            container
            direction={matchesSM ? "row" : "column"}
            justify={matchesSM ? "space-evenly" : "space-around"}
            alignItems="center"
          >
            <Grid item>
              <Card className={classes.card}>
                <CardActionArea component={Link} to="/integration-capabilities">
                  <CardMedia
                    className={classes.media}
                    image={capabilities}
                    title="Integration Capabilities"
                  />
                  <CardContent>
                    <Typography variant="h6" align="center">
                      Integration Capabilities
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item>
              <Card className={classes.card}>
                <CardActionArea component={Link} to="/technical-implementation">
                  <CardMedia
                    className={classes.media}
                    image={implementation}
                    title="Technical Implementation"
                  />
                  <CardContent>
                    <Typography variant="h6" align="center">
                      Technical Implementation
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item>
              <Card className={classes.card}>
                <CardActionArea component={Link} to="/customer-maturity">
                  <CardMedia
                    className={classes.media}
                    image={customer}
                    title="Technical Implementation"
                  />
                  <CardContent>
                    <Typography variant="h6" align="center">
                      Customer Maturity
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Home2;
