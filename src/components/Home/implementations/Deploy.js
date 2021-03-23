import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Grid,Typography,Breadcrumbs} from '@material-ui/core';
import {Card,CardActionArea,CardContent,CardMedia} from '@material-ui/core';
import {Link} from 'react-router-dom';
import containers from '../images/containers2.jpg';
import migrate from '../images/migrate.jpg';


const useStyles=makeStyles(theme=>({
    root:{
        flexGrow:1,
        padding:"3em"
    },
    media:{
        height:140
    },
    card:{
        width:300
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

const Deploy=()=>{
    const classes=useStyles();
    return(<React.Fragment>
         <Breadcrumbs className={classes.breadcrumbs}>
                <Link to="/home" className={classes.link}>Home</Link>
                <Link to="/technical-implementation" className={classes.link}>Technical Implementation</Link>
                <Link to="/deploy" className={classes.active}>Deploy</Link>
                </Breadcrumbs>
        <Grid container direction="column" className={classes.root}>
            <Grid item>
               
            </Grid>
            <Grid item >
                <Typography variant="h6">Deploy</Typography>
            </Grid>
            <Grid item>
                <Grid container direction="row" justify="space-evenly" alignItems="center" className={classes.root}>
                <Grid item>
                    <Card className={classes.card}>
                        <CardActionArea  >
                            <CardMedia className={classes.media} image={containers} title="Containers"/>
                            <CardContent>
                                <Typography variant="body1" component="h1" align="center">Containers</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    </Grid>
                    
                    <Grid item>
                    <Card className={classes.card}>
                        <CardActionArea  >
                            <CardMedia className={classes.media} image={migrate} title="Migration to Cloud"/>
                            <CardContent>
                                <Typography variant="body1" component="h1"align="center">Migration to Cloud</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </React.Fragment>)
}

export default Deploy;