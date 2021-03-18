import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Grid, Typography,Box} from '@material-ui/core';
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
    }
}));

const TechnicalImplementation=()=>{
    const classes=useStyles();
    return (
        <React.Fragment>
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
                            <CardMedia className={classes.media} image={design} title="Technical Capabilities"/>
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
                            <CardMedia className={classes.media} image={operations} title="Technical Capabilities"/>
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
                        <CardActionArea  component={Link} to="/design">
                            <CardMedia className={classes.media} image={deploy} title="Technical Capabilities"/>
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
