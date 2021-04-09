import React, { useState,useEffect } from "react";
import { makeStyles,useTheme } from "@material-ui/core/styles";
import { Grid, Typography, Breadcrumbs, Checkbox } from "@material-ui/core";
import { FormGroup, FormControlLabel } from "@material-ui/core";
import { Link } from "react-router-dom";
import Cards from './Cards';

import offeringsArr from "./offerings.json";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "3em",
  },
  media: {
    height: 140,
  },
  card: {
    width: 240,
    [theme.breakpoints.down("sm")]:{
      width:"100%"
    }
  },
  link: {
    textDecoration: "none",
    color: theme.palette.text.secondary,
  },
  active: {
    textDecoration: "none",
    color: theme.palette.text.primary,
  },
  breadcrumbs: {
    margin: " 1em 0em -2em 3em",
  },
  cardContainer:{
    padding:"2em"
  }
}));

const TechnicalImplementation = () => {
  const classes = useStyles();
  const theme=useTheme();
  const matchesSM= theme.breakpoints.down("sm");
  const [switchState, setSwitchState] = useState({
    design: false,
    operations: false,
    deploy: false,
  });
  const [offerings, setOfferings] = useState([]);

  const handleSwitchChange =  () => {
    let result=[];
    offeringsArr.forEach(async (element,index)=>{
      
        if(switchState.design===true){
          if(element.tags.technicalImplementation.design.length>0)
         result.push(element);       
      }
      if(switchState.operations===true){
        if(element.tags.technicalImplementation.operations.length>0)
       result.push(element);       
    }
      if(switchState.deploy===true){
        if(element.tags.technicalImplementation.deploy.length>0)
       result.push(element);       
    }
    });
     setOfferings([...offerings,[...new Set(result)]]);
    console.log("Offerings array is...",result)
  };

  useEffect(() => {
    handleSwitchChange();
   
  }, [switchState])

 
  return (
    <React.Fragment>
      <Breadcrumbs className={classes.breadcrumbs}>
        <Link to="/home" className={classes.link}>
          Home
        </Link>
        <Link to="/technical-implementation" className={classes.active}>
          Technical Implementation
        </Link>
      </Breadcrumbs>
      <Grid container direction="column" className={classes.root}>
        <Grid item>
          <Typography variant="h6" gutterBottom>
            Technical Implementation
          </Typography>
        </Grid>
        <Grid item>
          <FormGroup column style={{"position":matchesSM?"absolute":"fixed"}}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={switchState.design}
                  onChange={(e)=>{setSwitchState({...switchState,design:e.target.checked})}}
                  name="design"
                  size="small"
                />
              }
              label="Design"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={switchState.operations}
                  onChange={(e)=>{setSwitchState({...switchState,operations:e.target.checked})}}
                  name="operations"
                  size="small"
                />
              }
              label="Operations"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={switchState.deploy}
                  onChange={(e)=>{setSwitchState({...switchState,deploy:e.target.checked})}}
                  name="deploy"
                  size="small"
                />
              }
              label="Deploy"
            />
          </FormGroup>
        </Grid>
        <Grid item style={{marginTop:matchesSM?"6em":0,marginRight:matchesSM?0:"6em"}}>
          <Grid container direction="column">
            
          </Grid>
          {offerings.length ? (
    
            <Cards offerings={offerings}/>
          ) : (
            <Typography></Typography>
          )}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default TechnicalImplementation;
