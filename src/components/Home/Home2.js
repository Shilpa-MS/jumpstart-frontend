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
}));

const Home2 = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = theme.breakpoints.down("sm");
  return (
    <React.Fragment>
      <Grid container direction="column" className={classes.root}>
        <Grid item>
          <Typography variant="body1" align="center" style={{fontWeight:300}}>
            Some dummy text Some dummy textSome dummy textSome dummy textSome
            dummy textSome dummy textSome dummy textSome dummy textSome dummy
            textSome dummy textSome dummy textSome dummy textSome dummy textSome
            dummy textSome dummy textSome dummy textSome dummy textSome dummy
            textSome dummy textSome dummy textSome dummy textSome dummy textSome
            dummy textSome dummy textSome dummy textSome dummy textSome dummy
            textSome dummy textSome dummy textSome dummy textSome dummy text
            Some dummy text Some dummy textSome dummy textSome dummy textSome
            dummy textSome dummy textSome dummy textSome dummy textSome dummy
            textSome dummy textSome dummy textSome dummy textSome dummy textSome
            dummy textSome dummy textSome dummy textSome dummy textSome dummy
            textSome dummy textSome dummy textSome dummy textSome dummy textSome
            dummy textSome dummy textSome dummy textSome dummy textSome dummy
            textSome dummy textSome dummy textSome dummy textSome dummy text
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
