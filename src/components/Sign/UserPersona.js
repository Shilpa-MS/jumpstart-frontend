import React from "react";
import { Grid, Typography, Paper } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
    root:{
flexGrow:1,
padding:40
    },
    paper:{
        padding:theme.spacing(2)
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
        justify={matchesSM?"center":"center"}
        alignItems={matchesSM?"space-between":"space-evenly"}
        spacing={10}
      >
        <Grid  item xs>
          <Paper elevation={3} className={classes.paper}>
            <Typography>Item 1</Typography>
          </Paper>
        </Grid>
        <Grid  item xs>
          <Paper elevation={3} className={classes.paper}>
            <Typography>Item 2</Typography>
          </Paper>
        </Grid>
        <Grid  item xs>
          <Paper elevation={3} className={classes.paper}>
            <Typography>Item 3</Typography>
          </Paper>
        </Grid>
      </Grid>
        </div>
     
    </React.Fragment>
  );
};

export default UserPersona;
