import React from 'react';
import {Grid,Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import jumpstart from './36596-the-woman-sitting-on-the-phone.gif'


const useStyles=makeStyles(theme=>({
    root:{
        flexGrow:1,
        padding:"3em"
    },
    image:{
        width:"30em",
        height:"20em"
    }
}))

const Cloudpak=()=>{
    const classes=useStyles();
    return (
        <React.Fragment>
            <Grid container className={classes.root} direction="row" alignItems="center" justify="space-evenly">
                <Grid item xs>
                    <Typography variant="h2" gutterBottom style={{color:"black",lineHeight:"1.3em"}}>
                    What is Jumpstart?
                    </Typography>
                    <Typography variant="body1" style={{marginTop:"1em"}} >
                    Watch this short video to find out more about IBM Cloud Paks in just 2 minutes!
                    </Typography>
                </Grid>
                <Grid item>
                <img
                src={jumpstart}
                className={classes.image}
                alt="Jumpstart"
              />
                </Grid>

            </Grid>
        </React.Fragment>
    )
}

export default Cloudpak;