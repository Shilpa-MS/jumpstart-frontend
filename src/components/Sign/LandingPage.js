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
import {Select,MenuItem} from '@material-ui/core';
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Alert from "@material-ui/lab/Alert";
import UserPersona from "./UserPersona";
import axios from "axios";
import url from "../env";
import { withRouter } from "react-router-dom";
import { useSnackbar } from "notistack";
import secQues from "./securityQuestions.json";


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
  const { enqueueSnackbar } = useSnackbar();

  const [openLogin, setOpenLogin] = useState(false);
  const [user, setUser] = useState({ email: "", password: "" });
  const [openAlert, setOpenAlert] = useState(false);
  const [message, setMessage] = useState("");


  const [openSignup, setOpenSignup] = useState(false);



  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    companyname: "",
    designation: "",
    app_id: "11",
    password: "",
    securityfaq_one: "",
    securityanswer_one: "",
    securityfaq_two: "",
    securityanswer_two: "",
    user_type: "new",
    status: "Yet to Start",
    role: "user",
    user_status: "pending",
    access: [
      { jumpstart: false },
      { assessment: false },
      { integration: false },
      { oneclick: false },
      { multicloud: false },
    ],
    comment: "",
  });
  const [quesOne, setQuesOne] = useState("");
  const [quesTwo, setQuesTwo] = useState("");
  const [emailHelper, setEmailHelper] = useState("");

  const changeQuesOne = (e) => {
    setQuesOne(e.target.value);
    setNewUser({
      ...newUser,
      securityfaq_one: e.target.value,
    });
  };
  const changeQuesTwo = (e) => {
    setQuesTwo(e.target.value);
    setNewUser({
      ...newUser,
      securityfaq_two: e.target.value,
    });
  };

  const validateEmail = (e) => {
    let emailPattern_tcs = /^[a-z0-9._%+-]+@tcs+[.]+com/.test(e.target.value);
    let emailPattern_ibm = /^[a-z0-9._%+-]+@ibm+[.]+co+[.]+in/.test(
      e.target.value
    );
    let emailPattern_ibm1 = /^[a-z0-9._%+-]+@in+[.]+ibm+[.]+com/.test(
      e.target.value
    );
    const valid = emailPattern_tcs || emailPattern_ibm || emailPattern_ibm1;

    if (!valid) {
      setEmailHelper(true);
    } else {
      setEmailHelper(false);
      setNewUser({ ...newUser, email: e.target.value });
    }
  };

  const handleSubmitSignUp = (e) => {
    e.preventDefault();
    console.log("User details are...", user);
    validateForm();

    axios
      .post(`${url}/fetchUserDataJumpstart`, { email: user.email })
      .then((res) => {
        console.log("Fetch data res...", res.data.length);
        if (res.data.length === 0) {
          axios
            .post(`${url}/registerJumpstart`, user)
            .then((res) => {
              console.log("Registration result...", res);
              enqueueSnackbar("Registered successfully!", {
                variant: "success",
              });
            })
            .catch((err) => console.error("Error in registration..", err));
        } else {
          alert("User already exists!");
        }
      })
      .catch((err) => console.error(err));
  };



  const handleOpenLogin = () => {
    setOpenLogin(true);
    console.log("Login state is..", openLogin);
  };
  const handleCloseLogin = () => {
    setOpenLogin(false);
  };

  const handleOpenSignup = () => {
    setOpenSignup(true);
  };
  const handleCloseSignup = () => {
    setOpenSignup(false);
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
            required
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            fullWidth
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            required
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

  const SignUp = (
    <React.Fragment>
      <Dialog open={openSignup} onClose={handleCloseSignup}>
        <DialogTitle>
          Sign Up
          <IconButton className={classes.closeIcon} onClick={handleCloseSignup}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
         <Grid container direction="column">
         <Grid item>
            <TextField
              label="First and Last Name"
              color="secondary"
              required
              onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
              size="small"
            />
          </Grid>
          <Grid item>
            <TextField
              label="Email"
              color="secondary"
              required
              onChange={validateEmail}
              size="small"

            />
            {emailHelper ? (
              <Alert severity="error">
                Email id should be xxxx@tcs.com or xxxx@ibm.co.in or
                xxxx@in.ibm.com
              </Alert>
            ) : null}
          </Grid>
          <Grid item>
            <TextField
              label="Company Name"
              color="secondary"
              required
              onChange={(e) =>
                setNewUser({ ...newUser, companyname: e.target.value })
              }
              size="small"

            />
          </Grid>
          <Grid item>
            <TextField
              label="Designation"
              color="secondary"
              required
              size="small"
              onChange={(e) =>
                setNewUser({ ...newUser, designation: e.target.value })
              }
            />
          </Grid>
          <Grid item>
            <TextField
              label="Password"
              color="secondary"
              type="password"
              size="small"
              required
              onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
            />
          </Grid>
          <Grid item>
            <Typography variant="subtitle1">Security Questions</Typography>
          </Grid>
          <Grid item>
            <Select
              className={classes.selectEmpty}
              value={quesOne}
              size="small"
              onChange={changeQuesOne}
              required
            >
              {secQues.map((ques, index) => (
                <MenuItem key={`q1-${index}`} value={ques.question}>
                  {ques.question}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item>
            <TextField
              label="Answer"
              color="secondary"
              type="password"
              required
              size="small"
              onChange={(e) =>
                setNewUser({ ...newUser, securityanswer_one: e.target.value })
              }
            />
          </Grid>
          <Grid item>
            <Select
              className={classes.selectEmpty}
              value={quesTwo}
              required
              size="small"
              onChange={changeQuesTwo}
            >
              {secQues.map((ques, index) => (
                <MenuItem key={`q2-${index}`} value={ques.question}>
                  {ques.question}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item>
            <TextField
              label="Answer"
              color="secondary"
              type="password"
              size="small"
              required
              onChange={(e) =>
                setNewUser({ ...newUser, securityanswer_two: e.target.value })
              }
            />
          </Grid>
         </Grid>
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={handleSubmitSignUp}>
            SignUp
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
                <Button variant="contained" color="secondary" size="small"
                                  onClick={handleOpenSignup}

                >
                  Sign Up
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <UserPersona />
      {login}
      {SignUp}
    </React.Fragment>
  );
};

export default withRouter(LandingPage);
