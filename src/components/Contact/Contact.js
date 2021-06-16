import React from "react";
import { makeStyles,useTheme } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import contactIm from './Contact.gif';

const useStyles = makeStyles((theme) => ({
  root:{
    flexGrow:1,
    padding:"3em"
  },
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
    fontWeight:400,
    color:theme.palette.common.blue,
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      margin: 0,
    },
  },
  image:{
    width:"22em",
    height:"22em"
  }
}));

const Contact = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = theme.breakpoints.down("sm");
  return (
    <React.Fragment>
      <Grid container direction="column" className={classes.root}>
        <Grid item className={classes.headText}>
          <Typography variant="h4">Contact Us</Typography>
        </Grid>
        <Grid item>
          <Grid container className={matchesSM?"row":"column"} alignItems="center" justify="space-evenly">
            <Grid item>
              <img src={contactIm} alt="Contact Us" className={classes.image}/>
            </Grid>
            <Grid item>
            <Typography variant="subtitle1" className={classes.bodyText}>+91 848 594 5085</Typography>
            <Typography variant="subtitle1" className={classes.bodyText}>jumpstart.support@tcs.com</Typography>


            </Grid>
          </Grid>
        </Grid>
       
        {/* <Grid item className={classes.bodyText}>
          <Typography variant="subtitle1">+91 848 594 5085</Typography>
        </Grid>
        <Grid item className={classes.bodyText}>
          <Typography variant="subtitle1">jumpstart.support@tcs.com</Typography>
        </Grid> */}
      </Grid>
    </React.Fragment>
  );
};

export default Contact;
