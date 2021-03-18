import React, { useState, useEffect } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import themeHeader from "./Theme";
import theme from "./Theme2";
import Header from "./Header";
import Home from "./Home/Home2";
import Tools from "./Tools/Tools";
import AssessmentToolkit from "./Tools/AssessmentToolkit";
import OneClick from "./Tools/OneClick";
import IntegrationPatterns from "./Tools/IntegrationPatterns";
import MultiCloud from "./Tools/MultiCloudDeployment";
import About from "./About/About";
import Services from "./Services/ServicesAndSolutions";
import BestPractices from "./BestPractices/BestPractices";
import Stories from "./Stories/Stories";
import FAQ from "./FAQ/FAQ";
import Contact from "./Contact/Contact";
import TechnicalCapabilities from "./Home/TechnicalCapabilities";
import TechnicalImplementation from "./Home/TechnicalImplementation";
import Design from './Home/implementations/Design';
import Operations from './Home/implementations/Operations';
import Deploy from './Home/implementations/Design';

import HeaderLoggedOut from "./HeaderLoggedOut";
import Admin from "./Admin/Admin";
import LandingPage from "./Sign/LandingPage";
import PrivateRoute from "./PrivateRoute";

import Fonts from "../Fonts";

import { SnackbarProvider } from "notistack";

import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  const [value, setValue] = useState(0);
  const email = localStorage.getItem("email");
  const userLoggedIn = email ? true : false;

  useEffect(() => {
    Fonts();

    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <SnackbarProvider>
          <BrowserRouter>
            {/* <ThemeProvider theme={themeHeader}>
              <Header value={value} setValue={setValue} />
              
            </ThemeProvider> */}
            <Switch>
              <PrivateRoute
                path="/home"
                render={(props) => (
                  <React.Fragment>
                  <ThemeProvider theme={themeHeader}>
                    <Header value={value} setValue={setValue} />
                  </ThemeProvider>
                  <Home {...props} setValue={setValue} />
                </React.Fragment>
                )}
              />
              <PrivateRoute
                path="/about"
                render={(props) => (
                  <React.Fragment>
                    <ThemeProvider theme={themeHeader}>
                      <Header value={value} setValue={setValue} />
                    </ThemeProvider>
                    <About {...props} setValue={setValue} />
                  </React.Fragment>
                )}
              />
              <PrivateRoute
                path="/tools"
                render={(props) => (
                  <React.Fragment>
                    <ThemeProvider theme={themeHeader}>
                      <Header value={value} setValue={setValue} />
                    </ThemeProvider>
                    <Tools {...props} setValue={setValue} />
                  </React.Fragment>
                )}
              />
              <PrivateRoute
                path="/services-and-solutions"
                render={(props) => (
                  <React.Fragment>
                    <ThemeProvider theme={themeHeader}>
                      <Header value={value} setValue={setValue} />
                    </ThemeProvider>
                    <Services {...props} setValue={setValue} />
                  </React.Fragment>
                )}
              />
              <PrivateRoute
                path="/best-practices"
                render={(props) => (
                  <React.Fragment>
                    <ThemeProvider theme={themeHeader}>
                      <Header value={value} setValue={setValue} />
                    </ThemeProvider>
                    <BestPractices {...props} setValue={setValue} />
                  </React.Fragment>
                )}
              />
              <PrivateRoute
                path="/stories"
                render={(props) => (
                  <React.Fragment>
                    <ThemeProvider theme={themeHeader}>
                      <Header value={value} setValue={setValue} />
                    </ThemeProvider>
                    <Stories {...props} setValue={setValue} />
                  </React.Fragment>
                )}
              />

              <PrivateRoute
                path="/faq"
                render={(props) => (
                  <React.Fragment>
                    <ThemeProvider theme={themeHeader}>
                      <Header value={value} setValue={setValue} />
                    </ThemeProvider>
                    <FAQ {...props} setValue={setValue} />
                  </React.Fragment>
                )}
              />
              <PrivateRoute
                path="/contact"
                render={(props) =>  <React.Fragment>
                  <ThemeProvider theme={themeHeader}>
                    <Header value={value} setValue={setValue} />
                  </ThemeProvider>
                  <Contact {...props} setValue={setValue} />
                </React.Fragment>}
              />
              <PrivateRoute
                path="/assessment-toolkit"
                render={() => <React.Fragment>
                  <ThemeProvider theme={themeHeader}>
                    <Header value={value} setValue={setValue} />
                  </ThemeProvider>
                  <AssessmentToolkit />
                </React.Fragment>}
              />
              <PrivateRoute
                path="/integration-patterns"
                render={() =><React.Fragment>
                  <ThemeProvider theme={themeHeader}>
                    <Header value={value} setValue={setValue} />
                  </ThemeProvider>
                  <IntegrationPatterns />
                </React.Fragment>}
              />
              <PrivateRoute
                path="/one-click-deployment"
                render={() => <React.Fragment>
                  <ThemeProvider theme={themeHeader}>
                    <Header value={value} setValue={setValue} />
                  </ThemeProvider>
                  <OneClick />
                </React.Fragment>}
              />
              <PrivateRoute
                path="/multi-cloud-deployment"
                render={() =>  <React.Fragment>
                  <ThemeProvider theme={themeHeader}>
                    <Header value={value} setValue={setValue} />
                  </ThemeProvider>
                  <MultiCloud />
                </React.Fragment>}
              />
              <PrivateRoute
                path="/admin"
                render={(props) =>  <React.Fragment>
                  <ThemeProvider theme={themeHeader}>
                    <Header value={value} setValue={setValue} />
                  </ThemeProvider>
                  <Admin {...props} setValue={setValue} />
                </React.Fragment>}
              />
              <PrivateRoute
                path="/technical-capabilities"
                render={() =>  <React.Fragment>
                  <ThemeProvider theme={themeHeader}>
                    <Header value={value} setValue={setValue} />
                  </ThemeProvider>
                  <TechnicalCapabilities  />
                </React.Fragment>}
              />
              <PrivateRoute
                path="/technical-implementation"
                render={() =>  <React.Fragment>
                  <ThemeProvider theme={themeHeader}>
                    <Header value={value} setValue={setValue} />
                  </ThemeProvider>
                  <TechnicalImplementation  />
                </React.Fragment>}
              />
              <PrivateRoute
                path="/customer-maturity"
                render={() =>  <React.Fragment>
                  <ThemeProvider theme={themeHeader}>
                    <Header value={value} setValue={setValue} />
                  </ThemeProvider>
                  <TechnicalCapabilities  />
                </React.Fragment>}
              />
              <PrivateRoute
                path="/design"
                render={() =>  <React.Fragment>
                  <ThemeProvider theme={themeHeader}>
                    <Header value={value} setValue={setValue} />
                  </ThemeProvider>
                  <Design  />
                </React.Fragment>}
              />
              <PrivateRoute
                path="/operations"
                render={() =>  <React.Fragment>
                  <ThemeProvider theme={themeHeader}>
                    <Header value={value} setValue={setValue} />
                  </ThemeProvider>
                  <Operations  />
                </React.Fragment>}
              />
              <Route
                exact
                path="/"
                component={LandingPage}
              />
            </Switch>
          </BrowserRouter>
        </SnackbarProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
