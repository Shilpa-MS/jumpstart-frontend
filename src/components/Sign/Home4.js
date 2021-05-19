import React, { useState } from "react";
import { AppBar, Toolbar, Grid } from "@material-ui/core";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button,Tooltip } from "@material-ui/core";
import { Tab, Tabs } from "@material-ui/core";
import { Menu, MenuItem } from "@material-ui/core";

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
                  <BootstrapTooltip title="IPAAS description something."  placement="left" arrow>
                  <MenuItem onClick={handleClose}>IPAAS</MenuItem>

                </BootstrapTooltip>
                <BootstrapTooltip title="Event Based description something."  placement="left" arrow>
                <MenuItem onClick={handleClose}>
                    Event based Architecture
                  </MenuItem>

                </BootstrapTooltip>
                  
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
        {/* <Grid item>
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
        </Grid> */}
        {props.children}
      </Grid>
    </React.Fragment>
  );
};

export default Home;
