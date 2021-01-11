import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent } from "@material-ui/core";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import url from "../env";

const useStyles = makeStyles((theme) => ({}));

const ForgotPassword = (props) => {
  const [email, setEmail] = useState("");
  const validateEmail = () => {
    axios
      .post(`${url}/fetchUserDataJumpstart`,{email:email})
      .then((res) => console.log("Fetch user data...", res.data))
      .catch((err) => console.error("Forgot password...", err));
  };
  return (
    <React.Fragment>
      <Dialog open={props.open} onClose={props.onClose}>
        <DialogTitle>Reset Password</DialogTitle>
        <DialogContent>
          <form onSubmit={validateEmail}>
            <TextField
              label="Email"
              color="secondary"
              onChange={(e) => setEmail(e.target.value)}
            />
          </form>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

export default ForgotPassword;
