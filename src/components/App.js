import React, { useState,useEffect } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./Theme";
import Header from "./Header";
import Home from "./Home/Home";
import Tools from "./Tools/Tools";
import AssessmentToolkit from "./Tools/AssessmentToolkit";
import OneClick from "./Tools/OneClick";
import IntegrationPatterns from "./Tools/IntegrationPatterns";
import MultiCloud from "./Tools/MultiCloudDeployment";
import About from "./About/About";
import Services from './Services/ServicesAndSolutions';
import BestPractices from './BestPractices/BestPractices';
import Stories from './Stories/Stories';
import FAQ from './FAQ/FAQ';
import Contact from './Contact/Contact';
import SignIn from './Sign/Signin';
import HeaderLoggedOut from './HeaderLoggedOut';
import Admin from './Admin/Admin';
import PrivateRoute from './PrivateRoute';

import Fonts from '../Fonts';


import { SnackbarProvider } from "notistack";

import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  const [value, setValue] = useState(0);
  const email=localStorage.getItem("email");

  useEffect(()=>{
    Fonts();

    const jssStyles=document.querySelector("#jss-server-side");
    if(jssStyles){
      jssStyles.parentElement.removeChild(jssStyles);
    }
  },[])

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <SnackbarProvider>
          <BrowserRouter>
            <Header value={value} setValue={setValue} />
            <Switch>
              <PrivateRoute
                path="/home"
                render={(props) => <Home {...props} setValue={setValue} email={email} />}
              />
              <PrivateRoute
                path="/about"
                render={(props) => <About {...props} setValue={setValue} />}
              />
              <PrivateRoute
                path="/tools"
                render={(props) => 
                  <Tools {...props} setValue={setValue} email={email} />
                 }
              />
              <PrivateRoute
                path="/services-and-solutions"
                render={(props) => <Services {...props} setValue={setValue} />}
              />
              <PrivateRoute
                path="/best-practices"
                render={(props) => <BestPractices {...props} setValue={setValue} />}
              />
              <PrivateRoute path="/stories" 
                render={(props) => <Stories {...props} setValue={setValue} />}
                />

              <PrivateRoute path="/faq" 
                render={(props) => <FAQ {...props} setValue={setValue} />}
                />
              <PrivateRoute path="/contact" 
                render={(props) => <Contact {...props} setValue={setValue} />}
                />
              <PrivateRoute
                path="/assessment-toolkit"
                render={() => <AssessmentToolkit />}
              />
              <PrivateRoute
                path="/integration-patterns"
                render={() => <IntegrationPatterns />}
              />
              <PrivateRoute
                path="/one-click-deployment"
                render={() => <OneClick />}
              />
              <PrivateRoute
                path="/multi-cloud-deployment"
                render={() => <MultiCloud />}
              />
              <PrivateRoute path="/admin" 
                render={(props) => <Admin {...props} setValue={setValue} />}
                />
               <Route
               exact
                path="/"
                component={() => <HeaderLoggedOut><SignIn /></HeaderLoggedOut>}
              />
            </Switch>
          </BrowserRouter>
        </SnackbarProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
