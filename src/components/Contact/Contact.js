import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  headText: {
    margin: "0.5em 1em",
    textAlign: "justify",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      margin: 0,
    },
  },
  bodyText: {
    margin: "0em 1em",
    textAlign: "justify",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      margin: 0,
    },
  },
}));

const Contact = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container direction="column">
        <Grid item className={classes.headText}>
          <Typography variant="h4">Contact Us</Typography>
        </Grid>
        <Grid item>
          <hr />
        </Grid>
        <Grid item className={classes.bodyText}>
          <Typography variant="subtitle1">+91 848 594 5085</Typography>
        </Grid>
        <Grid item className={classes.bodyText}>
          <Typography variant="subtitle1">jumpstart.support@tcs.com</Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Contact;
