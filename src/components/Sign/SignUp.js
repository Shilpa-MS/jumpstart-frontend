import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  Button,
  TextField,
  Select,
  MenuItem,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import secQues from "./data/securityQuestions.json";
import axios from "axios";
import url from "../env";
import { useSnackbar } from "notistack";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  helper: {
    color: theme.palette.common.pink,
  },
  form:{
    fontSize:"0.6rem"
  }
}));

const SignUp = () => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  const [user, setUser] = useState({
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
  // const [signupStatus, setSignupStatus] = useState(false);

  const changeQuesOne = (e) => {
    setQuesOne(e.target.value);
    setUser({
      ...user,
      securityfaq_one: e.target.value,
    });
  };
  const changeQuesTwo = (e) => {
    setQuesTwo(e.target.value);
    setUser({
      ...user,
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
      setUser({ ...user, email: e.target.value });
    }
  };

  const validateForm = () => {
    if (
      user.username.length !== 0 &&
      user.email.length !== 0 &&
      user.companyname.length !== 0 &&
      user.designation.length !== 0 &&
      user.password.length !== 0 &&
      user.securityfaq_one.length !== 0 &&
      user.securityfaq_two.length !== 0 &&
      user.securityanswer_one.length !== 0 &&
      user.securityanswer_two.length !== 0
    )
      return true;
    else return false;
  };

  const sendmail = () => {
    console.log("Email is...", user.email);
    const mailbody = {
      to: user.email,
      from: "chris.hembrom@gmail.com",
      subject: "Registration in Jumpstat",
      text: "Registration is completed successfully ",
      html:
        "<html> <a href='https://http://jumpstart-portal-test.mybluemix.net/> check registraion </a></html>",
    };
    axios
      .post(`${url}/sendmail`, mailbody)
      .then((res) => console.log("Send mail...", res))
      .catch((err) => console.error("Error in send mail...", err));
  };

  const handleSubmit = (e) => {
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
              sendmail();
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
  return (
    <React.Fragment>
     <Grid container direction="column">
     <Grid item>
            <Typography variant="h4" gutterBottom>
              Sign Up
            </Typography>
          </Grid>
        <form onSubmit={handleSubmit} >
          
          <Grid item>
            <TextField
              label="First and Last Name"
              color="secondary"
              required
              onChange={(e) => setUser({ ...user, username: e.target.value })}
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
                setUser({ ...user, companyname: e.target.value })
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
                setUser({ ...user, designation: e.target.value })
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
              onChange={(e) => setUser({ ...user, password: e.target.value })}
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
                setUser({ ...user, securityanswer_one: e.target.value })
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
                setUser({ ...user, securityanswer_two: e.target.value })
              }
            />
          </Grid>
          <Grid item style={{ marginTop: "0.5em" }}>
            <Button
              type="submit"
              color="secondary"
              variant="contained"
              size="small"
              // disabled={!validateForm}
            >
              Sign Up!
            </Button>
          </Grid>
        </form>
      </Grid>
    </React.Fragment>
  );
};

export default SignUp;
