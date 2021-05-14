import React from "react";
import { Grid, Typography, AppBar, Toolbar, Button ,Link} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles(theme=>({
    root: {
      flexGrow: 1,
      padding: "3em",
      paddingBottom:"0em"
    },
    title1:{
        color:theme.palette.common.blue
    },
 
   
  }));

const Home3 = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar color="transparent">
        <Toolbar>
          <div style={{ padding: "1em", textAlign: "center" }}>
            <Typography variant="h6" className={classes.title1} >
              TCS Jumpstart Pak For
              <span>
                <br />
                <Typography variant="h6">Integration</Typography>
              </span>
            </Typography>
          </div >
          <div style={{marginLeft:"auto",paddingTop:"1em"}}>
              <Grid container direction ="row" spacing={2} alignItems="flex-end" >
                  <Grid item>
                      <Button>Features</Button>
                  </Grid>
                  <Grid item>
                      <Button>About</Button>
                  </Grid>
                  <Grid item>
                      <Button>
                      Stories
                      </Button>
                  </Grid>
                  <Grid item>
                      <Button>Resources</Button>
                  </Grid>
                  <Grid item>
                      <Button>FAQ</Button>
                  </Grid>
                  <Grid item>
                 <Button>Contact us</Button>
                  </Grid>
                  <Grid item>
                  <Button variant="contained" color="primary" size="small" >
              Login
            </Button>
                  </Grid>
                 
              </Grid>
              
             
           
          
           
          </div>
        </Toolbar>
       
      </AppBar>
    </React.Fragment>
  );
};

export default Home3;
