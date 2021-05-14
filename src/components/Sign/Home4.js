import React, { useState } from "react";
import { AppBar, Toolbar, Grid } from "@material-ui/core";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";
import { Tab, Tabs } from "@material-ui/core";
import { Menu, MenuItem } from "@material-ui/core";
import Welcome from "./Welcome";
import Cloudpak from "./CloudPak";
import Jumpstart from "./Jumpstart";
import UserPersona from "./UserPersona";

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
}));

const Home = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpen(false);
  };

  const classes = useStyles();
  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar color="primary" position="fixed">
          <Toolbar disableGutters>
            <div className={classes.title}>
              <Typography variant="h6">
                TCS Jumpstart Pak For
                <span>
                  <br />
                  Integration
                </span>
              </Typography>
            </div>

            <Button
              variant="contained"
              color="secondary"
              size="small"
              style={{ marginLeft: "auto", marginRight: 10 }}
            >
              Login
            </Button>
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
              <Tab label="About Us" className={classes.tab} />
              <Tab label="Resources" className={classes.tab} />
              <Tab label="Stories" className={classes.tab} />
              <Tab label="FAQ" className={classes.tab} />
              <Tab label="Contact Us" className={classes.tab} />
            </Tabs>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{ onMouseLeave: handleClose }}
            >
               <MenuItem onClick={handleClose} style={{ fontWeight: 500,textAlign:"center",fontSize:"1.1em" }}>
                    Features
                  </MenuItem>
              <Grid
                container
                direction="row"
                alignItems="flex-start"
                justify="space-evenly"
              >
                <Grid item>
                  <MenuItem onClick={handleClose} style={{ fontWeight: 500 }}>
                    Design
                  </MenuItem>
                  <MenuItem onClick={handleClose}>IPAAS</MenuItem>
                  <MenuItem onClick={handleClose}>
                    Event based Architecture
                  </MenuItem>
                  <MenuItem onClick={handleClose}>Microservices</MenuItem>
                  <MenuItem onClick={handleClose}>
                    Managed service mesh
                  </MenuItem>
                </Grid>
                <Grid item>
                  <MenuItem onClick={handleClose} style={{ fontWeight: 500 }}>
                    Operations
                  </MenuItem>
                  <MenuItem onClick={handleClose}>Next Gen Logging</MenuItem>
                  <MenuItem onClick={handleClose}>Monitoring</MenuItem>
                  <MenuItem onClick={handleClose}>AI Powered Testing</MenuItem>
                </Grid>
                <Grid item>
                  <MenuItem onClick={handleClose} style={{ fontWeight: 500 }}>
                    Deploy
                  </MenuItem>
                  <MenuItem onClick={handleClose}>Containers</MenuItem>
                  <MenuItem onClick={handleClose}>Migration to Cloud</MenuItem>
                </Grid>
              </Grid>
            </Menu>
          </Toolbar>
        </AppBar>
      </ElevationScroll>

      <Grid container direction="column" style={{ marginTop: "8em" }}>
        <Grid item>
          <Welcome />
          <hr />
        </Grid>
        <Grid>
          <Jumpstart />
          <hr />
        </Grid>
        <Grid item>
          <Cloudpak />
        </Grid>
        <Grid item>
          <UserPersona />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Home;
