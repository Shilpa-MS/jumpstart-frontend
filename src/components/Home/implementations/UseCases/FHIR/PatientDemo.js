import React from 'react';
import {Grid,Link,Typography} from '@material-ui/core';
import fhirPatient from './images/fhirPatient.png';

const PatientDemo=()=>{
    return(
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
}

export default PatientDemo;