import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography,Button } from "@material-ui/core";
import GetAppIcon from "@material-ui/icons/GetApp";

const useStyles = makeStyles((theme) => ({
  toolContainer: {
    flexGrow:1,
    padding:"3em",
    [theme.breakpoints.down("sm")]:{
      padding:"1.5em"
    }
  },
  assessmentText: {
    margin: "0 1em",
    textAlign: "justify",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      margin: 0,
    },
  },
  image: {
    marginTop: "1em",
    marginLeft: "2em",
    height: "24em",
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
      marginRight: 0,
      width: "100%",
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  button:{
    [theme.breakpoints.down("sm")]:{
      "fontSize":"0.6rem"

    }
  }
}));

const Services = () => {
  const classes = useStyles();
  const handleClick=(filename)=>{
    window.open(`/services/docs/${filename}`)
  }
  return (
    <React.Fragment>
      <Grid container direction="column" className={classes.toolContainer}>
        <Grid item className={classes.assessmentText}>
          <Typography variant="h4" gutterBottom>
            Services & Solutions
          </Typography>
        </Grid>
        <Grid item container direction="row" alignItems="center">
          <Grid item className={classes.assessmentText} md>
            <Typography variant="subtitle1" gutterBottom>
              TCS Integration experts are continuously trying to build reusable
              solutions and assets to address Technology Challenges and to find
              means to enable business adopt Modern Integration Solutions in a
              Quick and Risk Free Manner.
              <br />
              The services and solutions listed here are the outcome of series
              of discussions and brain storming sessions with industry leaders
              and Architects to help the customers and account teams in
              modernization their integration journey.
            </Typography>
           
           

      
          </Grid>
         
         
          
          <Grid item md>
            <img
              src="/services/tcs_services_solutions.jpg"
              alt="Services and Solutions"
              className={classes.image}
            />
          </Grid>
         
        </Grid>
        <Button variant="outlined" color="secondary" size="small" className={classes.button}
            onClick={()=>handleClick("IBMFHIRServer_HL7ToFHIR_Solution.docx")}
            > <GetAppIcon color="secondary"/>IBMFHIRServer_HL7ToFHIR_Solution</Button>
       
        <Button variant="outlined" color="secondary" size="small" className={classes.button}
            onClick={()=>handleClick("MQ-Tekton-pipeline.zip")}
            > <GetAppIcon color="secondary"/>MQ-Tekton-pipeline</Button>
    
       
            
             <Button variant="outlined" color="secondary" size="small" className={classes.button}
            onClick={()=>handleClick("DP-Tekton-Pipeline.zip")}
            > <GetAppIcon color="secondary"/>DP-Tekton-Pipeline</Button>
             <Button variant="outlined" color="secondary" size="small" className={classes.button}
            onClick={()=>handleClick("ace-tekton-pipeline.zip")}
            > <GetAppIcon color="secondary"/>ace-tekton-pipeline</Button>
      </Grid>
    </React.Fragment>
  );
};

export default Services;
