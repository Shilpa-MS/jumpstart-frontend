import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Tabs, Tab, Grid, Box } from "@material-ui/core";
import ArchiveData from "./ArchiveData";
import PendingRequests from "./PendingRequests";
import url from "../env";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  assessmentText: {
    margin: "1em 1em",
    textAlign: "justify",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      margin: 0,
    },
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Admin = () => {
  const [value, setValue] = useState(0);
  const [allUsers, setAllUsers] = useState([]);
  const [pendingUsers, setPendingUsers] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    axios
      .get(`${url}/fetchAllUserData`)
      .then((res) => {
        console.log(res.data);
        const users = res.data.filter((user) =>
          user.role === "admin"||user.user_status === "pending" ? null : user
        );
        setAllUsers(users);
        const pending = res.data.filter((user) =>
          user.user_status === "pending" ? user : null
        );
        setPendingUsers(pending);
      })
      .catch((err) => {
        console.error(err);
      });

      return ()=>{
        console.log("Unmounting admin...")
      }

  }, []);
  console.log("Pending users...",pendingUsers)


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <Grid container direction="column">
        <Grid item>
          <Typography variant="h4" className={classes.assessmentText}>
            Admin
          </Typography>
        </Grid>
        <Grid item>
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Pending Requests" {...a11yProps(0)} />
            <Tab label="User Archive Data" {...a11yProps(1)} />
          </Tabs>
        </Grid>
        <Grid item>
          <TabPanel value={value} index={0}>
          {pendingUsers.length === 0 ? (
              <Typography variant="subtitle1">
                There are no pending requests.
              </Typography>
            ) : (
              <PendingRequests rows={pendingUsers} />
              )}
          </TabPanel>
        </Grid>
        <Grid>
          <TabPanel value={value} index={1}>
            {allUsers.length === 0 ? (
              <Typography variant="subtitle1">
                Loading data. Please wait.
              </Typography>
            ) : (
              <ArchiveData rows={allUsers} />
            )}
          </TabPanel>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Admin;
