import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid, Typography, Button, TextField } from "@material-ui/core";
import SignUp from "./SignUp";
import axios from "axios";
import url from "../env";
import { withRouter } from "react-router-dom";
import Alert from "@material-ui/lab/Alert";
import bg from "./beis-card.png";
import ForgotPassword from './Forgot';

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  container: {
    backgroundImage: `url(${bg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "40em",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      height: "100%",
    },
  },
}));

const SignIn = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = theme.breakpoints.down("sm");
  const [user, setUser] = useState({ email: "", password: "" });
  const [openAlert, setOpenAlert] = useState(false);
  const [message, setMessage] = useState("");
  const [openDialog,setOpenDialog]=useState(false);

  const handleSubmit = (event) => {
    console.log("User details...", user);
    event.preventDefault();
    const payload = user;
    console.log("Url", url, "Payload", payload);

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

  const handleClose=()=>{
    setOpenDialog(false);
  }

  return (
    <React.Fragment>
      <Grid
        container
        direction={matchesSM ? "row" : "column"}
        className={classes.container}
      >
        <Grid
          item
          md
          style={{ marginLeft: matchesSM ? "2em" : 0, marginTop: "1em" }}
        >
          <SignUp />
        </Grid>
        <Grid
          item
          container
          direction="column"
          md
          style={{ marginLeft: matchesSM ? "2em" : 0, marginTop: "1em" }}
        >
          <Grid item>
            <Typography variant="h4" gutterBottom>
              Sign In
            </Typography>
          </Grid>
          <form
            noValidate
            autoComplete="off"
            className={classes.root}
            onSubmit={handleSubmit}
          >
            <Grid item>
              <TextField
                label="Email"
                color="secondary"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </Grid>
            <Grid item>
              <TextField
                label="Password"
                color="secondary"
                type="password"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </Grid>
            <Grid item>
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                disabled={user.email.length === 0 || user.password.length === 0}
                size="small"
              >
                Sign In
              </Button>
            </Grid>
          </form>
       
            {/* <Grid item>
              <Button
                variant="link"
                color="secondary"
                size="small"
                onClick={()=>setOpenDialog(true)}
              >
                Forgot Password
              </Button>
            </Grid> */}
            <Grid item>
              {openDialog?<ForgotPassword open={openDialog} onClose={handleClose}/>:null}
            </Grid>
      
          <Grid item>
            {openAlert ? <Alert severity="error">{message}</Alert> : null}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default withRouter(SignIn);
