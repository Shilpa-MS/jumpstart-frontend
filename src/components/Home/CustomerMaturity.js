import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Grid,Typography,Button,Breadcrumbs} from '@material-ui/core';
import {Link} from 'react-router-dom';

const useStyles=makeStyles(theme=>({
    root:{
        flexGrow:1,
        padding:'3em'
    },
    button:{
        width:200,
        height:200
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
}))

const CustomerMaturity=()=>{
    const classes=useStyles();
    return(<React.Fragment>
         <Breadcrumbs className={classes.breadcrumbs}>
                <Link to="/home" className={classes.link}>Home</Link>
                <Link to="/customer-maturity" className={classes.active}>Customer Maturity</Link>
                </Breadcrumbs> 
        <Grid container className={classes.root} direction="column">
            <Grid item>
                <Typography variant="h6" gutterBottom>
                    Customer Maturity
                </Typography>
            </Grid>
            <Grid item style={{marginTop:"3em"}}>
                <Grid container direction="row" justify="space-evenly" alignItems="center">
                    <Grid item>
                        <Button variant="contained" color="primary" className={classes.button}>
                            Legacy Integration<br/>(Late Majority)
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="primary" className={classes.button}>
                            Early Adopters
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="primary" className={classes.button}>
                            Non IBM Integration
                        </Button>
                    </Grid>
                   
                </Grid>
            </Grid>
        </Grid>

    </React.Fragment>)
}

export default CustomerMaturity;