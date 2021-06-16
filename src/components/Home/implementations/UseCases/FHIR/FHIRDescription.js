import React from 'react';
import { Grid,Typography } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import fhirImpl from "./images/fhirImpl.png";
import fhirImpl1 from "./images/fhirImpl1.png";

const useStyles=makeStyles(theme=>({
    root:{
        flexGrow:1,
        padding:"3em"
    }
}))

const FHIRDescription=()=>{
    const classes=useStyles();
    return(
        <React.Fragment>
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
        </React.Fragment>
    )
}

export default FHIRDescription;