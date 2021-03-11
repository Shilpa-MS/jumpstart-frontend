import React, { useState, useEffect } from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { Link, withRouter } from "react-router-dom";
import { spacing } from "@material-ui/system";
import { styled } from "@material-ui/core/styles";
import MuiButton from "@material-ui/core/Button";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Popover } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import routes from "../data/routes.json";
if(localStorage.getItem("role")==="admin")
routes.push({"name":"Admin","link":"/admin","activeIndex":8})

const Button = styled(MuiButton)(spacing);

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
  title: {
    fontWeight: "bold",
    color: theme.palette.common.white,
    marginLeft: "1em",
    fontSize: "1.1rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8rem",
    },
  },
  drawer: {
    backgroundColor: theme.palette.common.white,
  },
  drawerItem: {
    ...theme.typography.drawer,
    opacity: 0.7,
  },
  drawerItemSelected: {
    ...theme.typography.drawer,
    opacity: 1,
    "& .MuiListItemText-root": {
      opacity: 1,
    },
  },
  drawerIconContainer: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1,
  },
  logo: {
    height: "1.5em",
    marginLeft: "1em",
    [theme.breakpoints.down("md")]: {
      height: "1em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "0.8em",
    },
  },
  text2: {
    color: theme.palette.common.blue,
  },
  typography: {
    padding: theme.spacing(2),
  },
}));

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });
  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const Header = (props) => {
  const classes = useStyles();
  const [value, setValue] = useState(props.value);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {

    routes.forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (value !== route.activeIndex) setValue(route.activeIndex);
          break;
        default:
          break;
      }
    });
  }, [value, setValue]);

  const closePopover = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("role");
    props.history.push("/");
  };

  const drawer = (
    <React.Fragment>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {routes.map((route) => (
            <ListItem
              key={`${route}${route.activeIndex}`}
              divider
              button
              component={Link}
              to={route.link}
              onClick={() => {
                setOpenDrawer(false);
                setValue(route.activeIndex);
              }}
              selected={value === route.activeIndex}
              classes={{ selected: classes.drawerItemSelected }}
            >
              <ListItemText className={classes.drawerItem} disableTypography>
                {route.name}
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </React.Fragment>
  );

  const popover = (
    <React.Fragment>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={closePopover}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Typography className={classes.typography}>
          {localStorage.getItem("email")}
        </Typography>
        <Toolbar>
          <ExitToAppIcon onClick={handleLogout} />
          <Typography className={classes.typography}>Logout</Typography>
        </Toolbar>
      </Popover>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar className={classes.appbar}>
          <Toolbar>
            <React.Fragment>
              <IconButton
                onClick={() => setOpenDrawer(!openDrawer)}
                className={classes.drawerIconContainer}
              >
                <MenuIcon style={{ color: "grey" }} />
              </IconButton>
              {drawer}
            </React.Fragment>

            <Button
              className={classes.drawerIconContainer}
              onClick={() => {
                setValue(0);
                props.history.push("/home");
              }}
            >
              <img src="/favicon.ico" alt="logo" className={classes.logo} />
              <Typography className={classes.title}>
                JUMPSTART pak for <br />
                <span className={classes.text2}>INTEGRATION</span>
              </Typography>
            </Button>

            <AccountCircleIcon
              color="secondary"
              style={{ marginLeft: "auto" }}
              fontSize="large"
              onClick={(e) => setAnchorEl(e.currentTarget)}
            />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
      {props.children}
      {popover}
    </React.Fragment>
  );
};

export default withRouter(Header);
