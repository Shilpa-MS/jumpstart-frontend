import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent } from "@material-ui/core";
import { TextField, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import url from "../env";

const useStyles = makeStyles((theme) => ({}));

const ForgotPassword = (props) => {
  const [email, setEmail] = useState("");
  const [user, setUser] = useState([]);
  const [found, setFound] = useState(false);
  const [secAns, setSecAns] = useState({
    securityans_one: "",
    securityans_two: "",
  });
  const [validateSec, setValidateSec] = useState(false);
  const [password, setPassword] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const validateEmail = (e) => {
    e.preventDefault();
    axios
      .post(`${url}/fetchUserDataJumpstart`, { email: email })
      .then((res) => {
        console.log("Fetch user data...", res.data);
        if (res.data.length <= 0) alert("User not found!");
        else {
          setUser(res.data);
          setFound(true);
        }
      })
      .catch((err) => console.error("Forgot password...", err));
  };

  const validateAnswers = (e) => {
    e.preventDefault();
    const payload = {
      email: email,
      securityanswer_one: secAns.securityans_one,
      securityanswer_two: secAns.securityans_two,
    };
    console.log("Payload is...", payload);
    axios
      .post(`${url}/compareSecurityQuesforuser`, payload)
      .then((res) => {
        console.log("Check ans...", res.data);
        if (res.status === 200) {
          setValidateSec(true);
        }
      })
      .catch((err) => {
        console.error("Error in sec ans check...", err);
        alert("Please check answers!");
      });
  };

  const changePassword = (e) => {
    e.preventDefault();
    const payload = {
      email: email,
      password: password.newPassword,
    };
    console.log("Payload for pass change...",payload)
    axios.defaults.headers.post["Content-Type"] =
    "application/json;charset=utf-8";
  axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    axios
      .post(`${url}/UpdateUserPassword`, payload)
      .then((res) => {
        if (res.status === 200) alert("Password updated successfully!");
        console.log("Update response is...",res)
      })
      .catch((err) => {
        console.log("Password update error...", err);
        alert("Failed to update password.");
      });
  };
  return (
    <React.Fragment>
      <Dialog open={props.open} onClose={props.onClose}>
        <DialogTitle>Reset Password</DialogTitle>
        <DialogContent>
          <form onSubmit={(e) => validateEmail(e)}>
            <TextField
              label="Email"
              color="secondary"
              onChange={(e) => setEmail(e.target.value)}
              disabled={found}
            />
          </form>
          {found ? (
            <form onSubmit={(e) => validateAnswers(e)}>
              <Typography>{user[0].securityfaq_one}</Typography>
              <TextField
                label="Security Answer"
                color="secondary"
                type="password"
                disabled={validateSec}
                onChange={(e) =>
                  setSecAns({ ...secAns, securityans_one: e.target.value })
                }
              />
              <Typography>{user[0].securityfaq_two}</Typography>
              <TextField
                label="Security Answer"
                color="secondary"
                type="password"
                disabled={validateSec}
                onChange={(e) =>
                  setSecAns({ ...secAns, securityans_two: e.target.value })
                }
              />
              <Button
                type="submit"
                variant="outlined"
                color="secondary"
                disabled={validateSec}
              >
                Check!
              </Button>
            </form>
          ) : null}
          {validateSec ? (
            <form onSubmit={changePassword}>
              <TextField
                label="New Password"
                color="secondary"
                type="password"
                onChange={(e) =>
                  setPassword({ ...password, newPassword: e.target.value })
                }
              />
              <TextField
                label="Confirm Password"
                color="secondary"
                type="password"
                onChange={(e) =>
                  setPassword({ ...password, confirmPassword: e.target.value })
                }
              />
              <Button
                type="submit"
                variant="outlined"
                color="secondary"
                disabled={
                  password.newPassword === "" ||
                  password.newPassword !== password.confirmPassword
                }
              >
                Confirm
              </Button>
            </form>
          ) : null}
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

export default ForgotPassword;
