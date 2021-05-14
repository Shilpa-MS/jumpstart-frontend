import { createMuiTheme } from '@material-ui/core/styles';

const jumpstartBlue="#3f51b5";
const fhirRed="#ef5350";
const jumpstartBlack="#212121";
const jumpstartWhite="#fafafa";
// const jumpstartPink="#e91e63";
const jumpstartGrey="#h6h6h6";
const jumpstartPink="#B53F51";
const jumpstartGreen="#51B53F";

export default createMuiTheme({
  palette:{
      common:{
          blue:`${jumpstartBlue}`,
          red:`${fhirRed}`,
          black:`${jumpstartBlack}`,
          white:`${jumpstartWhite}`,
          pink:`${jumpstartPink}`,
          green:`${jumpstartGreen}`
      },
      primary:{
          main:`${jumpstartBlue}`,
      },
      secondary:{
          main:`${jumpstartPink}`
      },
      
  },
typography:{
     drawer:{
    fontFamily:"Roboto",
    textTransform: "none",
    fontWeight:500,
    fontSize:"0.9rem",
    padding:5,
    color:`${jumpstartBlack}`
  },
  h4:{
    fontFamily:"Raleway",
    fontSize:"1.5rem",
    color:`${jumpstartBlue}`,
    fontWeight:700
  },
  subtitle1:{
    color:`${jumpstartGrey}`,
    fontSize:"1rem",
    fontWeight:300
  },
  learnButton:{
    borderColor:`${jumpstartBlue}`,
    color:`${jumpstartBlue}`,
    borderWidth:2,
    textTransform:"none",
    borderRadius:50,
    fontFamily:"Roboto",
    fontWeight:"bold"

  },
  h3:{
    fontFamily:"Roboto",
    color:`${jumpstartBlue}`,
    fontSize:"2rem"
  },
  subtitle2:{
    color:`${jumpstartBlue}`,
    fontSize:"1.25rem",
    fontWeight:300
  },
  h2:{
    color:`${jumpstartBlue}`,
    fontSize:"2.25rem"
  },
  h6:{
    color:`${jumpstartBlue}`
  },
  tab:{
    fontFamily:"Raleway",
        textTransform:"none",
        fontWeight:700,
        fontSize:"1rem",
  }
}

});

