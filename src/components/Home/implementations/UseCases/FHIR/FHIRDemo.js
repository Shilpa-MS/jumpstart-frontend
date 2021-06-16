import React,{useState} from 'react';
import { Grid,Button } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import PatientDemoComp from './PatientDemo';


const useStyles=makeStyles(theme=>({
    root:{
        flexGrow:1,
        padding:"3em"
    },
    btn: {
        padding: "2em",
        width: "8em",
      },
}))

const FHIRDemo=()=>{
    const classes=useStyles();
    const [patientDemo,setPatientDemo]=useState(false);
    const [gpDemo,setGpDemo]=useState(false);
    const [pharmaDemo,setPharmaDemo]=useState(false);
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
    return(
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
{patientDemo?<PatientDemoComp/>:undefined}

   </React.Fragment>
    )
}

export default FHIRDemo;