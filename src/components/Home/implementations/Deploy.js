import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Grid,Typography} from '@material-ui/core';

const useStyles=makeStyles(theme=>({
    root:{
        flexGrow:1,
        padding:"3em"
    }
}))

const Deploy=()=>{
    const classes=useStyles();
    return(<React.Fragment>
        <Grid container direction="column" className={classes.root}>
            <Grid item>
                <Typography variant="h6">Deploy</Typography>
            </Grid>
        </Grid>
    </React.Fragment>)
}

export default Deploy;