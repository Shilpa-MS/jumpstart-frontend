import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import { withRouter } from "react-router-dom";
import { spacing } from "@material-ui/system";
import { styled } from "@material-ui/core/styles";
import MuiButton from "@material-ui/core/Button";

const Button = styled(MuiButton)(spacing);

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
  title: {
    fontWeight: "bold",
    color: theme.palette.common.black,
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

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar className={classes.appbar}>
          <Toolbar>
            <Button className={classes.drawerIconContainer}>
              <img src="/favicon.ico" alt="TCS" className={classes.logo} />
              <Typography className={classes.title}>
                JUMPSTART pak for <br />
                <span className={classes.text2}>INTEGRATION</span>
              </Typography>
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div  />
      {props.children}
    </React.Fragment>
  );
};

export default withRouter(Header);
