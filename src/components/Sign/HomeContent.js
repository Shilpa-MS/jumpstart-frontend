import React from 'react';
import {Grid,Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Welcome from './Welcome';
import Jumpstart from './Jumpstart';
import Cloudpak from './CloudPak';
import UserPersona from './UserPersona';


const useStyles=makeStyles(theme=>({
root:{
  flexGrow:1
}
}));

const HomeContent=()=>{
    const classes=useStyles();
    return(
        <React.Fragment>
            <Grid container direction="column" className={classes.root}>
        <Grid item>
          <Welcome />
         
        </Grid>
        <Grid>
          <Jumpstart />
     
        </Grid>
       
      
        <Grid item>
       
          <Cloudpak />
        </Grid>
        <Grid item style={{marginTop:"-30em"}}>
          <UserPersona />
        </Grid>
      </Grid>
        </React.Fragment>
    )
}

export default HomeContent;