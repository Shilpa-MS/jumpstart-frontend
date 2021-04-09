import React from "react";
import { Grid, Typography ,Button} from "@material-ui/core";
import { Card, CardActionArea, CardContent } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import DeveloperBoardIcon from "@material-ui/icons/DeveloperBoard";
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "2em",
  },
  card: {
    width: "15em",
    height:"15em",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  cardContainer: {
    padding: "1em",
  },
  cardText: {
    color: theme.palette.common.blue,
    fontWeight: 600,
  },
  tagsDesign:{
      position:"absolute",
      top:0,
      right:0,
      background:theme.palette.common.blue,
      color:"white",
      fontSize:"0.9rem",
      padding:"0.5em"
  },
  tagsOperation:{
    position:"absolute",
    bottom:0,
    left:0,
    background:theme.palette.common.pink,
    color:"white",
    fontSize:"0.9rem",
    padding:"0.5em"
  },
  tagsDeploy:{
      position:"absolute",
      top:0,
      left:0,
      background:theme.palette.common.green,
      color:"white",
      fontSize:"0.9rem",
      padding:"0.5em"
  },
  description:{
      fontSize:"0.8rem"
  }
}));

const Cards = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = theme.breakpoints.down("sm");
  return (
    <React.Fragment>
      <Grid
        container
        direction={matchesSM ? "row" : "column"}
        className={classes.root}
        justify="space-evenly"
        alignItems="center"
      >
        {props.offerings[props.offerings.length - 1].map((o) => (
          <Grid item key={`grid-${o.id}`}>
            <Card key={`card-${o.id}`} className={classes.card}>
              <CardActionArea component={Link} to={o.route}>
                <CardContent>
                  <Grid
                    container
                    direction="column"
                    alignItems="center"
                    justify="center"
                    className={classes.cardContainer}
                  >
                    <Grid item>
                      <DeveloperBoardIcon color="primary" fontSize="large" />
                    </Grid>
                    <Grid item style={{ marginTop: "1em" }}>
                      <Typography
                        align="center"
                        className={classes.cardText}
                        gutterBottom
                      >
                        {o.title}
                      </Typography>
                      
                    </Grid>
                    <Grid item>
                        <Typography align="left" className={classes.description}>{o.description}</Typography>
                    </Grid>
                  
                          {o.tags.technicalImplementation.design.length ? (
                             <div className={classes.tagsDesign}> 
                             <Typography variant="body1" className={classes.tagsDesign}>
                             Design
                                 </Typography>                                
                                                                    
                             </div>
                            ) : null}
                       
                           
                        
                            {o.tags.technicalImplementation.deploy.length ? (
                             <div className={classes.tagsDeploy}>
                             
                             <Typography variant="body1" className={classes.tagsDeploy}>
                             Deploy
                                 </Typography> 
                            
                         </div>
                            ) : null}
                            {o.tags.technicalImplementation.operations
                              .length ? (
                                <div className={classes.tagsOperation}>                                 
                               <Typography variant="body1" className={classes.tagsOperation}>
                             Operations
                                 </Typography>                               
                        </div>
                            ) : null}
                      
                         
                  </Grid>
                  
                </CardContent>
            
              </CardActionArea>
              
            </Card>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};

export default Cards;
