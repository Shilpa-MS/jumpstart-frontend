import React, { useState } from "react";
import background from "./TCS-ALE-Partnership-card.jpg";
import { Grid, Button, Typography, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Alert from "@material-ui/lab/Alert";
import UserPersona from "./UserPersona";
import axios from "axios";
import url from "../env";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  banner: {
    background: `url(${background})`,
    backgroundRepeat: `no-repeat`,
    backgroundSize: `cover`,
    height: "calc(100vh + 70px)",
    color: "#ffffff",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      backgroundSize: "auto",
    },
  },
  grid: {
    padding: "3%",
  },
  content: {
    lineHeight: "32px",
    [theme.breakpoints.down("md")]: {
      //   marginLeft: "-3rem",
      //   marginRight: "-9rem",
      margin: 0,
      padding: 0,
    },
  },
  bolderText: {
    fontWeight: "bold",
    fontSize: "1.3rem",
  },
  closeIcon: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
}));

const LandingPage = (props) => {
  const classes = useStyles();
  const [openLogin, setOpenLogin] = useState(false);
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

  const login = (
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
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            fullWidth
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={handleSubmit}>
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

  return (
    <React.Fragment>
      <div className={classes.banner}>
        <Grid container className={classes.grid} direction="column">
          <Grid item xs={6}>
            <Typography variant="h3" style={{ color: "white" }} gutterBottom>
              TCS Jumpstart Pak for Integration
            </Typography>
          </Grid>
          <Grid item sm={6}>
            <Typography
              variant="body1"
              className={classes.content}
              gutterBottom
            >
              Cutting-edge tools and solutions to accelerate your Integration
              modernization journey. TCS’ Jumpstart kit for Integration
              encompasses{" "}
              <span className={classes.bolderText}>
                IBM Cloud Pak ® for Integration{" "}
              </span>
              platform spread across different levers of integration including{" "}
              <span className={classes.bolderText}> Cloud </span>Integration,{" "}
              <span className={classes.bolderText}> API first </span>
              strategy, Micro services, Containers, Hybrid Cloud and provides a
              comprehensive offering resulting in{" "}
              <span className={classes.bolderText}> simplification </span> and
              <span className={classes.bolderText}> faster adoption </span> of
              the platform.
            </Typography>
          </Grid>
          <Grid item>
            <Grid container direction="row" style={{ marginTop: "1em" }}>
              <Grid item style={{ marginRight: "2em" }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  onClick={handleOpenLogin}
                >
                  Log In
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" color="secondary" size="small">
                  Sign Up
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <UserPersona />
      {login}
    </React.Fragment>
  );
};

export default withRouter(LandingPage);
