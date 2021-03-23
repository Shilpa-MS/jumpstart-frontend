import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Button,Breadcrumbs } from "@material-ui/core";
import {Card,CardActionArea,CardContent} from '@material-ui/core';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "3em",
  },
  card:{
    width:240,
    background:theme.palette.common.blue,
    color:"white",
    height:100
},
link:{
  textDecoration:"none",
  color:theme.palette.text.secondary,        
},
active:{
  textDecoration:"none",
  color:theme.palette.text.primary
},
breadcrumbs:{
  margin:" 1em 0em -2em 3em",
}


}));
const IntegrationCapabilities = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
       <Breadcrumbs className={classes.breadcrumbs}>
                <Link to="/home" className={classes.link}>Home</Link>
                <Link to="/integration-capabilities" className={classes.active}>Integration Capabilities</Link>
                </Breadcrumbs>
      <Grid container direction="column" className={classes.root}>
        <Grid item>
          <Typography variant="h6" gutterBottom>
          Integration Capabilities
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

export default IntegrationCapabilities;
