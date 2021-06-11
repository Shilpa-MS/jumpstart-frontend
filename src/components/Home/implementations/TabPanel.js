import React from "react";
import { makeStyles } from "@material-ui/core";
import { Box, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "3em",
  },
}));

const TabPanel = (props) => {
  const classes = useStyles();
  const { children, value, index,...other } = props;

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default TabPanel;
