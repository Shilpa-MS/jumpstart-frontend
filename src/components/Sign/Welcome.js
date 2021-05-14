import React from 'react';
import {Grid,Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import jumpstart from './6853-cloud-animation.gif'


const useStyles=makeStyles(theme=>({
    root:{
        flexGrow:1,
        padding:"3em"
    },
    image:{
        width:"20em",
        height:"20em"
    }
}))

const Jumpstart=()=>{
    const classes=useStyles();
    return (
        <React.Fragment>
            <Grid container className={classes.root} direction="row" alignItems="center" justify="space-evenly">
                <Grid item>
                    <Typography variant="h2" gutterBottom style={{color:"black",lineHeight:"1.3em"}}>
                    Welcome to the<br/> Automated Enterprise
                    </Typography>
                    <Typography variant="body1" style={{marginTop:"1em"}} >
                    From the applications you love, to the data you<br/> need, learn how Jumpstart delivers intelligent<br/>  automation to connect your enterprise.
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

export default Jumpstart;