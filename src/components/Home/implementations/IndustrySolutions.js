import React, { useState } from "react";
import { Grid, Typography, Select, MenuItem, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Tabs, Tab } from "@material-ui/core";
import TabPanel from "./TabPanel";
import fhirImpl from "./fhirImpl.png";
import fhirImpl1 from "./fhirImpl1.png";
import fhirPatient from './fhirPatient.png';
import {Link} from 'react-router-dom';
import {Breadcrumbs} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "3em",
  },
  btn: {
    padding: "2em",
    width: "8em",
  },
  link:{
    textDecoration:"none",
    color:theme.palette.text.secondary,        
  },
  active:{
    textDecoration:"none",
    color:theme.palette.text.primary
  },
  breadcrumbs:{
    margin:" 1em 0em -2em 3em",
  }
}));

const IndustrySolutions = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [useCase, setUseCase] = useState("");
  const [patientDemo,setPatientDemo]=useState(false);
  const [gpDemo,setGpDemo]=useState(false);
  const [pharmaDemo,setPharmaDemo]=useState(false);

  const handleChange = (e, newVal) => {
    setValue(newVal);
  };

  const handleUseCaseChange = (e) => {
    setUseCase(e.target.value);
  };

  const handlePatientDemo=()=>{
    setPatientDemo(true);
    setGpDemo(false);
    setPharmaDemo(false);
  }

  const handleGpDemo=()=>{
    setPatientDemo(false);
    setGpDemo(true);
    setPharmaDemo(false);
  }
  const handlePharmaDemo=()=>{
    setPatientDemo(false);
    setGpDemo(false);
    setPharmaDemo(true);
  }

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const patientDemoComp=(
    <React.Fragment>
      <Grid container direction="column">
        <Grid item>
          <img src={fhirPatient} alt="patient "/>
        </Grid>
        <Grid item style={{marginLeft:"auto"}}>
          <Link>
          <Typography variant="body1" gutterBottom>
            1. Create/Update Patient Record CSV
          </Typography>
          </Link>
        
         <Link>
         <Typography variant="body1" gutterBottom>
            2. Create/Update Observation/Allergy HL7
          </Typography>
         </Link>
        </Grid>
   
      </Grid>
    </React.Fragment>
  )

  return (
    <React.Fragment>
       <Breadcrumbs className={classes.breadcrumbs}>
                <Link to="/home" className={classes.link}>Home</Link>
                <Link to="/technical-implementation" className={classes.link}>Technical Implementation</Link>
                <Link to="/industry-solutions" className={classes.active}>Industry Solutions</Link>

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
                    </Select>
                  </span>
                </Typography>
              </Grid>
              <Grid item>
                {useCase === "FHIR" ? (
                  <Grid
                    container
                    direction="column"
                    className={classes.root}
                    alignItems="center"
                    justify="space-between"
                  >
                    <Grid item>
                      <img
                        src={fhirImpl1}
                        alt="Implementation"
                        style={{ marginBottom: "2em" }}
                      />
                    </Grid>
                    <Grid item>
                      <Typography variant="body1" gutterBottom>
                        Interoperable healthcare is the future and is critical
                        to improving clinical and operational workflows. Without
                        an Interoperable solution, health organizations will be
                        challenged to extract value from Clinical data to
                        realize simpler processes, efficient care, improved
                        experiences, and faster innovations. FHIR (Fast
                        Healthcare Interoperability Resources), is becoming the
                        De facto for interoperability in healthcare which
                        describes the APIs and data formats for exchanging
                        health information.
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                        <b>Real-time data ingestion</b>: Ingestion,
                        Normalization and transformation of Clinical data from
                        multiple sources into FHIR standard API. FHIR
                        batch/transaction API is used to ingest large quantities
                        of data from health devices, feeding Kafka and a data
                        lake which is used for downstream analytic applications
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                        <b>FHIR-native operational data store</b>: SORs, mobile
                        applications use the FHIR HTTP API to store and retrieve
                        FHIR resources in IBM DB2.
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                      <b>API-Market Place</b>: Manage APIs with full set of API Management capabilities on any location of your choice – Private / Public cloud.


                      </Typography>
                    </Grid>
                    <Grid item>
                      <img src={fhirImpl} alt="Implementation" />
                    </Grid>
                  </Grid>
                ) : undefined}
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
                    </Select>
                  </span>
                </Typography>
              </Grid>
              <Grid item>
                {useCase === "FHIR" ? (
               

                  <React.Fragment>
                       <Grid
                    container
                    direction="row"
                    className={classes.root}
                    alignItems="flex-start"
                    justify="space-evenly"
                  >
                    <Grid item>
                      <Button
                        variant="contained"
                        color={patientDemo?"secondary":"primary"}
                        className={classes.btn}
                        onClick={handlePatientDemo}
                      >
                        Patient
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        variant="contained"
                        color={gpDemo?"secondary":"primary"}
                        className={classes.btn}
                        onClick={handleGpDemo}
                      >
                        GP
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        variant="contained"
                        color={pharmaDemo?"secondary":"primary"}
                        className={classes.btn}
                        onClick={handlePharmaDemo}

                      >
                        Pharmacy
                      </Button>
                    </Grid>

                  </Grid>
               {patientDemo?patientDemoComp:undefined}

                  </React.Fragment>
                ) : undefined}
              </Grid>
            </Grid>
          </TabPanel>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default IndustrySolutions;
