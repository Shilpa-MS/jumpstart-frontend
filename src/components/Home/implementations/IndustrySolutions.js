import React, { useState } from "react";
import { Grid, Typography, Select, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Tabs, Tab } from "@material-ui/core";
import TabPanel from "./TabPanel";

import { Link } from "react-router-dom";
import { Breadcrumbs } from "@material-ui/core";
import FHIRDescription from "./UseCases/FHIR/FHIRDescription";
import FHIRDemoComp from "./UseCases/FHIR/FHIRDemo";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "3em",
  },

  link: {
    textDecoration: "none",
    color: theme.palette.text.secondary,
  },
  active: {
    textDecoration: "none",
    color: theme.palette.text.primary,
  },
  breadcrumbs: {
    margin: " 1em 0em -2em 3em",
  },
}));

const IndustrySolutions = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [useCase, setUseCase] = useState("");

  const handleChange = (e, newVal) => {
    setValue(newVal);
  };

  const handleUseCaseChange = (e) => {
    setUseCase(e.target.value);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <React.Fragment>
      <Breadcrumbs className={classes.breadcrumbs}>
        <Link to="/home" className={classes.link}>
          Home
        </Link>
        <Link to="/technical-implementation" className={classes.link}>
          Technical Implementation
        </Link>
        <Link to="/industry-solutions" className={classes.active}>
          Industry Solutions
        </Link>
      </Breadcrumbs>
      <Grid container direction="column" className={classes.root}>
        <Grid item>
          <Typography variant="h5" gutterBottom>
            Industry Solutions
          </Typography>
        </Grid>
        <Grid item>
          <Tabs value={value} onChange={handleChange}>
            <Tab label="About" {...a11yProps(0)} />
            <Tab label="Implementation Assets" {...a11yProps(1)} />
            <Tab label="Demo" {...a11yProps(2)} />
          </Tabs>
          <TabPanel value={value} index={0}>
            About Industry solutions
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Grid container direction="column" className={classes.root}>
              <Grid item>
                <Typography variant="body1">
                  Select a use case
                  <span style={{ marginLeft: "1em" }}>
                    <Select value={useCase} onChange={handleUseCaseChange}>
                      <MenuItem key="uc1" value="FHIR">
                        FHIR
                      </MenuItem>
                      <MenuItem key="uc2" value="CDC">
                        CDC
                      </MenuItem>
                    </Select>
                  </span>
                </Typography>
              </Grid>
              <Grid item>
                {useCase === "FHIR" ? <FHIRDescription /> : undefined}
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Grid container direction="column" className={classes.root}>
              <Grid item>
                <Typography variant="body1">
                  Select a use case
                  <span style={{ marginLeft: "1em" }}>
                    <Select value={useCase} onChange={handleUseCaseChange}>
                      <MenuItem key="uc1" value="FHIR">
                        FHIR
                      </MenuItem>
                      <MenuItem key="uc2" value="CDC">
                        CDC
                      </MenuItem>
                    </Select>
                  </span>
                </Typography>
              </Grid>
              <Grid item>
                {useCase === "FHIR" ? <FHIRDemoComp /> : undefined}
              </Grid>
            </Grid>
          </TabPanel>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default IndustrySolutions;
