import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Description from './Desc';

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    // color: theme.palette.common.white,
    backgroundColor:"#f5f5f5"
  },
  topLeft: {
    position: "absolute",
    top: "1rem",
    left: "16px",
    fontWeight:300,
    // background:"linear-gradient(to right, #212121, #4e342e,#6d4c41)",

    background:"linear-gradient(to right, #ffffff, #b0bec5,#607d8b)",
    WebkitTextFillColor:"transparent",
    WebkitBackgroundClip:"text"
  },
}));

const Home = (props) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.container}>
       
        <img
          src="/home/images/integration2.jpeg"
          alt="TCS cover"
          style={{ width: "100%",height:"30rem" }}
        />
        <Typography className={classes.topLeft} variant="h2">YOUR INTEGRATION<br/>PARTNER</Typography>
        <Description setValue={props.setValue} />

      </div>
    </React.Fragment>
  );
};

export default Home;
