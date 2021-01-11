import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Typography,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
} from "@material-ui/core";
import axios from "axios";
import url from "../env";

const useStyles = makeStyles((theme) => ({}));

const Pending = (props) => {
  const [rows, setRows] = useState(props.rows);
  const [comments, setComments] = useState("");
  const classes = useStyles();

  const handleChange = (event, option, user, index) => {
    if (option === "jumpstart") {
      if (event.target.checked === true) user.access[0].jumpstart = true;
      else user.access[0].jumpstart = false;
    }
    if (option === "assessment") {
      if (event.target.checked === true) user.access[1].assessment = true;
      else user.access[1].assessment = false;
    }
    if (option === "integration") {
      if (event.target.checked === true) user.access[2].integration = true;
      else user.access[2].integration = false;
    }
    if (option === "oneclick") {
      if (event.target.checked === true) user.access[3].oneclick = true;
      else user.access[3].oneclick = false;
    }
    if (option === "multicloud") {
      if (event.target.checked === true) user.access[4].multicloud = true;
      else user.access[4].multicloud = false;
    }
    let userArr = [...rows];
    userArr[index] = user;
    console.log("New array is...", userArr);
    setRows(userArr);
  };

  const updateAccess = (status, user, index) => {
    user.user_status = status;
    user.comment = comments;
    axios
      .post(`${url}/UpdateUserStatus`, user)
      .then((res) => {
        console.log("Update user status...", res);
        let arr = [...rows];
        arr.splice(index, 1);
        setRows(arr);
      })
      .catch((err) => console.error("Error in user status update...", err));
  };
  return (
    <React.Fragment>
      {rows.length ? (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Access</TableCell>
                <TableCell>Comments</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>
                    <Grid container direction="column">
                      <Grid item>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={row.access[0].jumpstart === true}
                              color="secondary"
                              onChange={(e) =>
                                handleChange(e, "jumpstart", row, index)
                              }
                              size="small"
                            />
                          }
                          label="Jumpstart"
                        />
                      </Grid>
                      <Grid item>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={row.access[1].assessment === true}
                              color="secondary"
                              onChange={(e) =>
                                handleChange(e, "assessment", row, index)
                              }
                              size="small"
                            />
                          }
                          label="Assessment Toolkit"
                        />
                      </Grid>
                      <Grid item>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={row.access[2].integration === true}
                              color="secondary"
                              onChange={(e) =>
                                handleChange(e, "integration", row, index)
                              }
                              size="small"
                            />
                          }
                          label="Integration Patterns"
                        />
                      </Grid>
                      <Grid item>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={row.access[3].oneclick === true}
                              color="secondary"
                              onChange={(e) =>
                                handleChange(e, "oneclick", row, index)
                              }
                              size="small"
                            />
                          }
                          label="One Click Deployment"
                        />
                      </Grid>
                      <Grid item>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={row.access[4].multicloud === true}
                              color="secondary"
                              onChange={(e) =>
                                handleChange(e, "multicloud", row, index)
                              }
                              size="small"
                            />
                          }
                          label="Multi Cloud Deployment"
                        />
                      </Grid>
                    </Grid>
                  </TableCell>
                  <TableCell>
                    <TextField
                      onChange={(e) => {
                        setComments(e.target.value);
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="secondary"
                      size="small"
                      onClick={() => updateAccess("approved", row)}
                    >
                      Approve
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="secondary"
                      size="small"
                      onClick={() => updateAccess("rejected", row)}
                    >
                      Reject
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <React.Fragment>
          <Typography variant="subtitle1">
            There are no pending requests.
          </Typography>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Pending;
