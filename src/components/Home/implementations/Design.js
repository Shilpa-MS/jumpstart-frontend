import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Grid,Typography,Button} from '@material-ui/core';


const useStyles=makeStyles(theme=>({
    root:{
        flexGrow:1,
        padding:'3em'
    },
    button:{
        width:200,
        height:200
    }
}))

const Design=()=>{
    const classes=useStyles();
    return(<React.Fragment>
        <Grid container className={classes.root} direction="column">
            <Grid item>
                <Typography variant="h6" gutterBottom>
                    Design
                </Typography>
            </Grid>
            <Grid item style={{marginTop:"3em"}}>
                <Grid container direction="row" justify="space-evenly" alignItems="center">
                    <Grid item>
                        <Button variant="contained" color="secondary" className={classes.button}>
                            IPaaS
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="secondary" className={classes.button}>
                            Event Based Architecture
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="secondary" className={classes.button}>
                            MicroServices
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="secondary" className={classes.button}>
                            Managed Service Mesh
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

    </React.Fragment>)
}

export default Design;
