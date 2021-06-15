import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { Card,CardContent } from '@material-ui/core';
import { Typography,Link } from '@material-ui/core';


const useStyles=makeStyles(theme=>({
    card:{        
        width: "13em",
        background: theme.palette.common.lightBlue,
    },
    head: {
        fontSize: "0.9em",
        paddingBottom: "0.9em",
        fontWeight: 500,
      },
      desc: {
        fontSize: "0.8em",
        paddingBottom: "0.6em",
      },
      link:{
          color:theme.palette.common.blue,
          fontFamily:"Roboto"
      }

}))


const CapabilitiesCard=(props)=>{
    const classes=useStyles();

    const preventDefault=(e)=>{
        e.preventDefault();
        window.open(props.url);
    }

    return(<React.Fragment>
        <Card className={classes.card}>
            <CardContent>
                <Typography variant="body1" gutterBottom className={classes.head}>{props.title}</Typography>
                <Typography variant="body1" gutterBottom className={classes.desc}>{props.description}</Typography>
                <Link href={props.url} onClick={preventDefault} className={classes.link}>{props.link}</Link>

            </CardContent>
        </Card>

    </React.Fragment>)
}

export default CapabilitiesCard;