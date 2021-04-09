import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid, Typography, Button } from "@material-ui/core";
import {
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
  CardActions,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import tools from "./tools.json";
import axios from "axios";
import env from "../env";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  toolsContainer: {
    flexGrow:1,
    padding:"3em"
  },
  item:{
    paddingTop:"1em"
  },
  specialText: {
    color: theme.palette.common.blue,
    fontWeight: 500,
  },
  cardMedia: {
    height: 140,
    maxWidth: 300,
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
}));

const Tools = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const [data, setData] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios.defaults.headers.post["Content-Type"] =
      "application/json;charset=utf-8";
    // axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    axios
      .post(`${env}/fetchUserDataJumpstart`, {
        email: localStorage.getItem("email"),
      })
      .then((res) => {
        // console.log("Fetch response is ....", res);
        setData(res.data[0]);
        setLoaded(true);
      })

      .catch((err) => {
        console.error("Error in user data fetch..", err);
      });

    return () => {
      console.log("unmount tools");
    };
  }, []);

  return (
    <React.Fragment>
      <Grid container direction="column" className={classes.toolsContainer}>
        <Grid
          item
          md
          style={{
            textAlign: matchesSM ? "center" : undefined,
          }}
        >
          <Typography variant="h4" gutterBottom>
            Tools and Accelerators
          </Typography>
          <Typography variant="subtitle1">
            Reusable assets for faster development and simplification.
          </Typography>
          <Typography variant="subtitle1" className={classes.item}>
            These Tools & Accelerators enables Organizations to Jump Start their
            journey to{" "}
            <span className={classes.specialText}>
              Integration Modernization
            </span>{" "}
            by quickly upgrading/migrating to the latest Cloud Pak for
            Integration from the older version of the products in the target
            platform of their choice (Azure, AWS, GCP, IBM Cloud, Corporate Data
            Centre).<br></br>
          </Typography>
        </Grid>
        <Grid item className={classes.item}>
          <Grid container direction="row" spacing={2}>
            {loaded
              ? tools.map((tool, index) => (
                  <Grid item sm key={`griditem-${index}`}>
                    <Card key={`card-${index}`}>
                      <CardActionArea
                        component={Link}
                        to={tool.route}
                        disabled={!data.access[index + 1][`${tool.key}`]}
                      >
                        <CardMedia
                          image={`/tools/images/${tool.imageName}`}
                          title="Tools Icon"
                          className={classes.cardMedia}
                        />
                        <CardContent style={{ height: "7rem" }}>
                          <Typography variant="h6" gutterBottom>
                            {tool.title}
                          </Typography>
                          <Typography variant="body2">
                            {tool.subtitle}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Button
                          variant="outlined"
                          className={classes.learnButton}
                          component={Link}
                          to={tool.route}
                          disabled={!data.access[index + 1][`${tool.key}`]}
                        >
                          Learn More
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))
              : tools.map((tool, index) => (
                  <Grid item sm key={`item-${index}`}>
                    <Card key={`card-${index}`}>
                      <CardActionArea
                        component={Link}
                        to={tool.route}
                        disabled={true}
                      >
                        <CardMedia
                          image={`/tools/images/${tool.imageName}`}
                          title="Tools Icon"
                          className={classes.cardMedia}
                        />
                        <CardContent style={{ height: "7rem" }}>
                          <Typography variant="h6" gutterBottom>
                            {tool.title}
                          </Typography>
                          <Typography variant="body2">
                            {tool.subtitle}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Tools.propTypes = {
  data: PropTypes.shape({
    access: PropTypes.arrayOf(
      PropTypes.shape({
        jumpstart: PropTypes.bool,
      }),
      PropTypes.shape({
        assessment: PropTypes.bool,
      }),
      PropTypes.shape({
        integration: PropTypes.bool,
      })
    ),
  }),
};

export default Tools;
