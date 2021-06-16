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

const Design=()=>{
    const classes=useStyles();
    return(<React.Fragment>
        <Breadcrumbs className={classes.breadcrumbs}>
                <Link to="/home" className={classes.link}>Home</Link>
                <Link to="/technical-implementation" className={classes.link}>Technical Implementation</Link>
                <Link to="/design" className={classes.active}>Design</Link>
                </Breadcrumbs>
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
