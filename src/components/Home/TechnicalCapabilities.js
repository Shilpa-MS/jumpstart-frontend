import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Button } from "@material-ui/core";
import {Card,CardActionArea,CardContent} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "3em",
  },
  card:{
    width:240,
    background:theme.palette.common.blue,
    color:"white"
},


}));
const TechnicalCapabilities = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container direction="column" className={classes.root}>
        <Grid item>
          <Typography variant="h6" gutterBottom>
            Technical Capabilities
          </Typography>
        </Grid>
        <Grid item container direction="column" className={classes.root}>
        <Grid item>
            <Grid
              container
              direction="row"
              alignItems="center"
              justify="space-evenly"
            >
              <Grid item>
              <Card className={classes.card}>
                        <CardActionArea  >
                            <CardContent>
                                <Typography variant="body1" align="center">API Management</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
              </Grid>
              <Grid item>
              <Card className={classes.card}>
                        <CardActionArea  >
                            <CardContent>
                                <Typography variant="body1" align="center">Enterprise Messaging</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
              </Grid>
              <Grid item>
              <Card className={classes.card}>
                        <CardActionArea  >
                            <CardContent>
                                <Typography variant="body1" align="center">Event Streaming</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
              </Grid>
            </Grid>
          </Grid>
          <Grid item style={{marginBottom:"2em"}}>

          </Grid>
          <Grid item>
            <Grid
              container
              direction="row"
              alignItems="center"
              justify="space-evenly"
            >
              <Grid item>
              <Card className={classes.card}>
                        <CardActionArea  >
                            <CardContent>
                                <Typography variant="body1" align="center">Application Integration</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
              </Grid>
              <Grid item>
              <Card className={classes.card}>
                        <CardActionArea  >
                            <CardContent>
                                <Typography variant="body1" align="center">End-to-end Security</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
              </Grid>
              <Grid item>
              <Card className={classes.card}>
                        <CardActionArea  >
                            <CardContent>
                                <Typography variant="body1" align="center">High Speed Data Transfer</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default TechnicalCapabilities;
