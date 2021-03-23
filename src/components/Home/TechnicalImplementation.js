import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Grid, Typography,Box,Breadcrumbs} from '@material-ui/core';
import {Card,CardMedia,CardActionArea,CardContent} from '@material-ui/core';
import {Link} from 'react-router-dom';
import design from './images/design.gif';
import operations from './images/operations.gif';
import deploy from './images/deploy.gif';


const useStyles=makeStyles(theme=>({
    root:{
        flexGrow:1,
        padding:"3em"
    },
    media:{
        height:140
    },
    card:{
        width:240
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
}));

const TechnicalImplementation=()=>{
    const classes=useStyles();
    return (
        <React.Fragment>
            <Breadcrumbs className={classes.breadcrumbs}>
                <Link to="/home" className={classes.link}>Home</Link>
                <Link to="/technical-implementation" className={classes.active}>Technical Implementation</Link>
                </Breadcrumbs> 
            <Grid container direction="column"className={classes.root} >
                <Grid item>
                    <Typography variant="h6" gutterBottom>Technical Implementation</Typography>
                </Grid>
                <Grid item>
                    <Grid container direction="row" justify="space-evenly" alignItems="center" style={{marginTop:"3em"}}>
                    <Grid item>
                        <Box boxShadow={3} >
                        <Card className={classes.card} >
                        <CardActionArea  component={Link} to="/design">
                            <CardMedia className={classes.media} image={design} title="Design"/>
                            <CardContent>
                                <Typography variant="body1" align="center">Design</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                        </Box>
                   
                </Grid>

                <Grid item>
                    <Box boxShadow={3}>
                    <Card className={classes.card} >
                        <CardActionArea  component={Link} to="/operations">
                            <CardMedia className={classes.media} image={operations} title="Operations"/>
                            <CardContent>
                                <Typography variant="body1" align="center">Operations</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    </Box>
                   
                </Grid>

                <Grid item>
                    <Box boxShadow={3}>
                    <Card className={classes.card}>
                        <CardActionArea  component={Link} to="/deploy">
                            <CardMedia className={classes.media} image={deploy} title="Deploy"/>
                            <CardContent>
                                <Typography variant="body1" align="center">Deploy</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    </Box>
                   
                </Grid>
                    </Grid>
                </Grid>

                
               
               
            </Grid>
        </React.Fragment>
    )
}

export default TechnicalImplementation;
