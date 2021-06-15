import React, { useState } from "react";
import { AppBar, Toolbar, Grid } from "@material-ui/core";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button,Tooltip } from "@material-ui/core";
import { Tab, Tabs } from "@material-ui/core";
import { Menu, MenuItem } from "@material-ui/core";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import {Select,TextField,ButtonGroup} from '@material-ui/core';
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Alert from "@material-ui/lab/Alert";
import axios from "axios";
import url from "../env";
import { withRouter } from "react-router-dom";
import { useSnackbar } from "notistack";
import secQues from "./data/securityQuestions.json";


import {Link} from 'react-router-dom';

function ElevationScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "3em",
  },
  title: {
    padding: "1em",
    textAlign: "center",
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
  },
  drawerIconContainer: {
    textDecoration:"none",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  closeIcon: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
}));



const useStylesBootstrap = makeStyles((theme) => ({
  arrow: {
    color: theme.palette.common.black,
  },
  tooltip: {
    backgroundColor: theme.palette.common.black,
    fontSize:"0.8rem"
  },
}));

function BootstrapTooltip(props) {
  const classes = useStylesBootstrap();

  return <Tooltip arrow classes={classes} {...props} />;
}

const Home = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

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

  const [alertDlg,setAlertDlg]=useState(false);

  const handleAlertDlgOpen=()=>{
    setAlertDlg(true)
  }

  const handleAlertDlgClose=()=>{
    setAlertDlg(false);
  }
  const classes = useStyles();

  const loginAlert=(
    <React.Fragment>
      <Dialog open={alertDlg} onClose={handleAlertDlgClose}>
      <IconButton className={classes.closeIcon} onClick={handleAlertDlgClose}>
            <CloseIcon  fontSize="small"/>
          </IconButton>
          <DialogTitle>Alert!</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            Please Login to use this feature!
          </Typography>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  )

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

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpen(false);
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
          <Button color="secondary" onClick={handleSubmitSignUp}>
            SignUp
          </Button>
         
        </DialogActions>
        {openAlert ? <Alert severity="error">{message}</Alert> : null}
      </Dialog>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar color="primary" position="fixed">
          <Toolbar disableGutters>
            <Button className={classes.drawerIconContainer} component={Link} to="/">
            <div className={classes.title} >
              <Typography variant="h6">
                TCS Jumpstart Pak For
                <span>
                  <br />
                  Integration
                </span>
              </Typography>
            </div>
            </Button>
           <ButtonGroup               style={{ marginLeft: "auto", marginRight: 10 }}
>
           <Button
              variant="contained"
              color="secondary"
              size="small"
              onClick={handleOpenLogin}
            >
              Login
            </Button>

            <Button
              variant="contained"
              color="secondary"
              size="small"
              onClick={handleOpenSignup}
            >
              Signup
            </Button>
           </ButtonGroup>
          </Toolbar>
          <Toolbar disableGutters style={{ marginTop: "-2.2em" }}>
            <Tabs className={classes.tabContainer}>
              <Tab
                label="Features"
                className={classes.tab}
                aria-owns={anchorEl ? "simple-menu" : undefined}
                aria-haspopup={anchorEl ? true : undefined}
                onMouseOver={(e) => {
                  handleClick(e);
                }}
              />
              <Tab label="About Us" className={classes.tab} component={Link} to="/about" />
              <Tab label="Resources" className={classes.tab} />
              <Tab label="Stories" className={classes.tab} component={Link} to="/stories" />
              <Tab label="FAQ" className={classes.tab} component={Link} to="/faq"/>
              <Tab label="Contact Us" className={classes.tab} />
            </Tabs>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{ onMouseLeave: handleClose }}
            >
             
               <MenuItem onClick={handleAlertDlgOpen} style={{ fontWeight: 500,textAlign:"center",fontSize:"1.1em" }}>
                    Features
                  </MenuItem>
              <Grid
                container
                direction="row"
                alignItems="flex-start"
                justify="space-evenly"
              >
                <Grid item>
                  <MenuItem onClick={handleAlertDlgOpen} style={{ fontWeight: 500 }}>
                    Design
                  </MenuItem>
                  <BootstrapTooltip title="IPAAS description something."  placement="left" arrow>
                  <MenuItem onClick={handleAlertDlgOpen}>IPAAS</MenuItem>

                </BootstrapTooltip>
                <BootstrapTooltip title="Event Based description something."  placement="left" arrow>
                <MenuItem onClick={handleAlertDlgOpen}>
                    Event based Architecture
                  </MenuItem>

                </BootstrapTooltip>
                  
                  <MenuItem onClick={handleAlertDlgOpen}>Microservices</MenuItem>
                  <MenuItem onClick={handleAlertDlgOpen}>
                    Industry Solutions
                  </MenuItem>
                </Grid>
                <Grid item>
                  <MenuItem onClick={handleAlertDlgOpen} style={{ fontWeight: 500 }}>
                    Operations
                  </MenuItem>
                  <MenuItem onClick={handleAlertDlgOpen}>Next Gen Logging</MenuItem>
                  <MenuItem onClick={handleAlertDlgOpen}>Monitoring</MenuItem>
                  <MenuItem onClick={handleAlertDlgOpen}>AI Powered Testing</MenuItem>
                </Grid>
                <Grid item>
                  <MenuItem onClick={handleAlertDlgOpen} style={{ fontWeight: 500 }}>
                    Deploy
                  </MenuItem>
                  <MenuItem onClick={handleAlertDlgOpen}>Containers</MenuItem>
                  <MenuItem onClick={handleAlertDlgOpen}>Migration to Cloud</MenuItem>
                </Grid>
              </Grid>
            </Menu>
          </Toolbar>
        </AppBar>
      </ElevationScroll>    

      <Grid container direction="column" style={{ marginTop: "8em" }}>
     {login}
      {SignUp}
      {loginAlert}
     
        {props.children}
      </Grid>
    </React.Fragment>
  );
};

export default withRouter(Home);
