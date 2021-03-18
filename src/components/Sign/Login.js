import React,{useState} from 'react';
import {Button,TextField} from '@material-ui/core';
import {Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import {makeStyles} from '@material-ui/core/styles';

const useStyles=makeStyles(theme=>({
    closeIcon:{
        position:"absolute",
        right:theme.spacing(1),
        top:theme.spacing(1),
        color:theme.palette.grey[500]
    }

}));

const Login=(props)=>{
    const classes=useStyles();
    const [open,setOpen]=useState(true);
    console.log("Recieved props...",props.loginState,open);
    const handleClickOpen=()=>{
        setOpen(true);
    }
    const handleClickClose=()=>{
        setOpen(false);
    }
    return(
        <React.Fragment>
            <Dialog open={open} onClose={handleClickClose}>
                <DialogTitle>Login
                    <IconButton className={classes.closeIcon} onClick={handleClickClose}>
                        <CloseIcon/>
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <TextField autoFocus id="name" label="Email address" type="email" fullWidth/>
                </DialogContent>
                <DialogActions>
                    <Button color="primary">Login</Button>
                    <Button color="secondary">Forgot Password</Button>
                </DialogActions>

            </Dialog>
        </React.Fragment>
    )

}

export default Login;