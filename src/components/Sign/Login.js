import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { TextField, Button } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import axios from "axios";
import url from "../env";


const useStyles = makeStyles((theme) => ({}));

const Login = (props) => {
  const classes = useStyles();
  const [openLogin, setOpenLogin] = useState(props.openLogin);
  const [user, setUser] = useState({ email: "", password: "" });
  const [openAlert, setOpenAlert] = useState(false);
  const [message, setMessage] = useState("");
  const handleOpenLogin = () => {
    setOpenLogin(true);
    console.log("Login state is..", openLogin);
  };
  const handleCloseLogin = () => {
    setOpenLogin(false);
  };

  const validateForm = () => {
    if (user.email.length !== 0 && user.password.length !== 0) return true;
    else return false;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm())
      axios
        .post(`${url}/authenticateJumpstart`, {
          email: user.email,
          password: user.password,
        })
        .then((res) => {
          console.log("Post login response...", res);
          if (res.status === 200) {
            if (
              (res.data.xuser.user_status === "approved" &&
                res.data.xuser.access[0].jumpstart === true) ||
              res.data.xuser.user_type === "admin"
            ) {
              localStorage.setItem("email", res.data.xuser.email);
              localStorage.setItem("role", res.data.xuser.role);
              if (res.data.xuser.role === "admin") props.history.push("/admin");
              else if (res.data.xuser.role === "user")
                props.history.push("/home");
            } else {
              setOpenAlert(true);
              setMessage("User is not authorized!");
            }
          }
        })
        .catch((err) => {
          console.log("Error...", err);
          setOpenAlert(true);

          if (err.response.status === 401) {
            setMessage("Please check credentials!");
          } else if (err.response.status === 404) {
            setMessage("User not found!");
          } else {
            setMessage("Internal server error!");
          }
        });
  };

  return (
    <React.Fragment>
      <Dialog open={openLogin} onClose={handleCloseLogin}>
        <DialogTitle>
          Login
          <IconButton className={classes.closeIcon} onClick={handleCloseLogin}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            id="name"
            label="Email address"
            type="email"
            fullWidth
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            required
            color="secondary"
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            fullWidth
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            color="secondary"
            required
          />
        </DialogContent>
        <DialogActions>
          <Button color="secondary" onClick={handleSubmit}>
            Login
          </Button>
          <Button color="secondary" size="small">
            Forgot Password
          </Button>
        </DialogActions>
        {openAlert ? <Alert severity="error">{message}</Alert> : null}
      </Dialog>
    </React.Fragment>
  );
};

export default Login;
