import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Grid,Typography} from '@material-ui/core';
import {Card,CardContent,CardActionArea,CardMedia} from '@material-ui/core';
import customer from './images/customer.jpg';
import capabilities from './images/technicalCapabilities.jpg';
import implementation from './images/technicalImplementation.jpg';
import {Link} from 'react-router-dom';

const useStyles=makeStyles(theme=>({
    root:{
        flexGrow:1,
        marginTop:"5em"
    },
    media:{
        height:140
    },
    card:{
        width:300
    }

}))

const Home2=()=>{
    const classes=useStyles();
    return (
        <React.Fragment>
            <Grid container direction="row" justify="space-around"alignItems="center" className={classes.root}>
                <Grid item>
                    <Card className={classes.card}>
                        <CardActionArea  component={Link} to="/technical-capabilities">
                            <CardMedia className={classes.media} image={capabilities} title="Technical Capabilities"/>
                            <CardContent>
                                <Typography variant="h6" align="center">Technical Capabilities</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item>
                <Card className={classes.card}>
                        <CardActionArea component={Link} to="/technical-implementation">
                            <CardMedia className={classes.media} image={implementation} title="Technical Implementation"/>
                            <CardContent>
                                <Typography variant="h6" align="center">Technical Implementation</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item>
                <Card className={classes.card}>
                        <CardActionArea component={Link} to="/customer-maturity">
                            <CardMedia className={classes.media} image={customer} title="Technical Implementation"/>
                            <CardContent>
                                <Typography variant="h6" align="center">Customer Maturity</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>

            </Grid>
        </React.Fragment>
    )
}

export default Home2;