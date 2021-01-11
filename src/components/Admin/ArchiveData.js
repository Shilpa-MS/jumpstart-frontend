import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@material-ui/core";
import { FormControlLabel, Checkbox, Grid, Button } from "@material-ui/core";
import axios from "axios";
import url from "../env";

const useStyles = makeStyles((theme) => ({}));

const ArchiveData = (props) => {
  const [rows, setRows] = useState(props.rows);
  const classes = useStyles();

  console.log("Archive rows...", rows);

  const handleChange = (event, option, user,index) => {
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
    let userArr=[...rows];
    userArr[index]=user; 
    console.log("New array is...",userArr)  
    setRows(userArr);
  };

  const updateAccess = (user) => {
    axios
      .post(`${url}/UpdateUserStatus`, user)
      .then((res) => console.log("Update user status...", res))
      .catch((err) => console.error("Error in user status update...", err));
  };
  return (
    <React.Fragment>
      {rows.length ? (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Email</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Comments</TableCell>
                <TableCell>Access</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.user_status}</TableCell>
                  <TableCell>{row.comment}</TableCell>
                  <TableCell>
                    <Grid container direction="column">
                      <Grid item>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={row.access[0].jumpstart === true}
                              color="secondary"
                              onChange={(e) =>
                                handleChange(e, "jumpstart", row,index)
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
                                handleChange(e, "assessment", row,index)
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
                                handleChange(e, "integration", row,index)
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
                              onChange={(e) => handleChange(e, "oneclick", row,index)}
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
                                handleChange(e, "multicloud", row,index)
                              }
                              size="small"
                            />
                          }
                          label="Multi Cloud Deployment"
                        />
                      </Grid>
                      <Grid item>
                        <Button
                          variant="contained"
                          color="secondary"
                          size="small"
                          onClick={()=>updateAccess(row)}
                        >
                          Update
                        </Button>
                      </Grid>
                    </Grid>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <React.Fragment>Loading data. Please wait.</React.Fragment>
      )}
    </React.Fragment>
  );
};

export default ArchiveData;
