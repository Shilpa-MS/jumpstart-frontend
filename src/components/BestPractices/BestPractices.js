import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Refactoring from "./Refactoring";

const useStyles = makeStyles((theme) => ({
  container: {
   flexGrow:1,
   padding:'1em'
  },

  image: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      height: "100%",
      width: "100%",
      margin: 0,
    },
  },
  text: {
    marginLeft: "1em",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0",
      textAlign: "center",
    },
  },
}));

const BestPractices = () => {
  const classes = useStyles();
  const handleClick = (filename) => {
    window.open(`/best-practices/docs/${filename}`);
  };
  return (
    <React.Fragment>
      <Grid
        container
        direction="column"
        justify="space-around"
        className={classes.container}
      >
        <Grid item>
          <Typography
            variant="h4"
            gutterBottom
            className={classes.text}
            style={{ marginTop: "1em" }}
          >
            Best Practices
          </Typography>
        </Grid>
        <Grid item>
          <Grid container direction="row">
            <Grid item md>
              <Typography variant="subtitle1" className={classes.text}>
                Integration being the backbone in all the enterprises carries a
                great responsibility to ensure all the upstream and downstream
                applications are able to publish/consume the services in an
                uninterrupted way.
              </Typography>
              <Typography variant="subtitle1" className={classes.text}>
                TCS Integration experts along with IBM and Solution Architects
                from different industries have laid out integration best
                practices to help customers in creating more value out of the
                existing investments
              </Typography>
              <br />
              <br />
              <Typography variant="subtitle1" className={classes.text}>
                Download the MQ Best Practices.&nbsp;
                <span>
                  <Button
                    variant="outlined"
                    color="secondary"
                    size="small"
                    onClick={() => handleClick("MQ_BestPractices_v0.1.docx")}
                  >
                    Download
                  </Button>
                </span>
              </Typography>
              <Typography variant="subtitle1" className={classes.text}>
                Download the Best Practices for CP4I and Openshift Installation
                for Azure and AWS.&nbsp;
                <span>
                  <Button
                    variant="outlined"
                    color="secondary"
                    size="small"
                    onClick={() => handleClick("CP4I_And_OpenShift_Installation_Azure&AWS.docx")}
                  >
                    Download
                  </Button>
                </span>
              </Typography>
            </Grid>
            <Grid item>
              <img
                src="/best-practices/best_practices.jpg"
                alt="Best Practices"
                className={classes.image}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item style={{ marginTop: "2em" }}>
          <Typography
            variant="h4"
            gutterBottom
            className={classes.text}
            style={{ marginBottom: "1em" }}
          >
            Refactoring
          </Typography>
        </Grid>
        <Grid item>
          <Refactoring />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default BestPractices;
