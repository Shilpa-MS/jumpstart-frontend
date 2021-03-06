import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "3em",
    background: theme.palette.common.lightBlue,
  },
  image: {
    width: "30em",
    height: "20em",
  },
}));

const Cloudpak = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid
        container
        className={classes.root}
        direction="row"
        alignItems="center"
        justify="space-evenly"
      >
        <Grid item xs style={{padding:"2em 0"}}>
          <Typography
            variant="h2"
            gutterBottom
            style={{ color: "black", lineHeight: "1.3em" ,paddingBottom:"0.8em"}}
          >
            What is Jumpstart?
          </Typography>
          <Typography
            variant="body1"
            style={{ marginTop: "1.2em", textAlign: "justify",fontSize:"1rem" }}
            
          >
            TCS Integration Jumpstart Kit is a common marketplace for all the
            offerings and solutions under one hood.
          </Typography>
          <Typography variant="body1" style={{ textAlign: "justify",fontSize:"1rem", padding:"1em 0" }}>
            The kit helps the customers to quickly adapt and simplify their
            integration modernization journey using Cloud Pak for Integration.
            TCS Integration architects and experts are continuously building
            reusable solutions and assets to address Technology Challenges and
            to find means to enable business adopt Modern Integration Solutions
            in a Quick and Risk Free Manner. The services and solutions listed
            here are the outcome of series of discussions and brain storming
            sessions with industry leaders and Architects to help the customers
            and account teams in modernization their integration journey.
          </Typography>
        </Grid>
        <Grid item md>
          <Typography variant="body1" style={{ marginTop: "1em", textAlign:"center" }} gutterBottom>
            Video.
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Cloudpak;
