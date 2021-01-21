import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  question: {
    color: theme.palette.common.blue,
    fontWeight: 500,
  },
}));

const Faq = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container direction="column">
        <Grid item>
          <Typography variant="h4" style={{marginTop:"1em",marginLeft:"1em",marginBottom:"2em"}}>General FAQ</Typography>
        </Grid>
        <Grid item>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subtitle1" className={classes.question}>
                What is Jumpstart kit?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="subtitle1">
                TCS Integration Jumpstart Kit is a common marketplace for all
                the offerings and solutions under one hood.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subtitle1" className={classes.question}>
                Why do we need Jumpstart?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="subtitle1">
                The kit helps the customers to quickly adapt and simplify their
                integration modernization journey using Cloud Pak for
                Integration. TCS Integration architects and experts are
                continuously building reusable solutions and assets to address
                Technology Challenges and to find means to enable business adopt
                Modern Integration Solutions in a Quick and Risk Free Manner.
                The services and solutions listed here are the outcome of series
                of discussions and brain storming sessions with industry leaders
                and Architects to help the customers and account teams in
                modernization their integration journey.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subtitle1" className={classes.question}>
                IBM has already created Transformation Advisor for migration,
                what is the difference?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="subtitle1">
                Jumpstart kit augment IBM TA by providing additional insights as
                below
                <br />
                1) Provides the target architecture model
                <br />
                2) Provides detailed migration roadmap
                <br />
                3) Provides ready to use tools and solution accelerators for
                workload migration into CP4I
                <br />
                4) Provides RoI
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subtitle1" className={classes.question}>
                What is One Click Deployment?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="subtitle1">
                One-click solution is designed for migrating existing IIB or ACE
                workload to IBM Cloudpak for Integration. It provides end-to-end
                automation that includes Checking out the Code from SCM system,
                Build deployable artifacts and Deploy to OpenShift container
                platform.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subtitle1" className={classes.question}>
                What is Assessment Toolkit?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="subtitle1">
                Assessment Toolkit is a starting point to assess customer(s)
                existing integration landscape. The tool breaks the entire
                integration ecosystem into technical, business, infrastructure
                and operations domains, analyzing the answers received and
                creates a comprehensive report detailing tools, accelerators,
                RoI and best practices, which can be leveraged towards customer
                integration modernization journey.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subtitle1" className={classes.question}>
                Is One-click deployment used for migration of existing
                integration projects or new development?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="subtitle1">
                Existing and new integration workload can be migrated using
                One-click deployment. Developer has to configure appropriate
                source control repository inside One-click CI/CD process.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subtitle1" className={classes.question}>
                How much savings can we achieve by using jumpstart?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="subtitle1">
                Savings varies depending upon the kind of integration workload
                and number of message flows customer is running. Typically
                savings in the range of 10-30% should be realized as the journey
                progress.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subtitle1" className={classes.question}>
                Can we jumpstart for all IBM integration tools like IIB, MQ,
                DataPower and APIConnect?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="subtitle1">
                Currently, jumpstart kit has solutions and accelerators around
                IIB and MQ. It will be further enhanced to cover other products
                at a later stage.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subtitle1" className={classes.question}>
                How can I access Jumpstart Kit?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="subtitle1">
                Jumpstart kit can be accessed after successful registration and
                verfication by Jumpstart admin. It can be accessed through
                https://cp4i-jumpstart-tcs.mybluemix.net/.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subtitle1" className={classes.question}>
                What is refactoring?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="subtitle1">
                Refactoring is a method to make changes in the old source code
                to make it work inside the current environment (e.g. IIB to
                ACE).
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subtitle1" className={classes.question}>
                What is Re-engineering?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="subtitle1">
                Re-engineering is process where the existing source code is
                incompatible with the target environment and requires a major
                re-write/transformation.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subtitle1" className={classes.question}>
                What is meant by Integration Pattern, and what are the patterns
                available?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="subtitle1">
                Patterns are reusable flows which encapsulates common business
                logic and exposed as pattern. It can be integrated into any
                integration flow which has a similar business case. Patterns
                bring in synergy and standardization across integration flows
                (e.g. Error handling, MQ & Kafka pattern etc).
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subtitle1" className={classes.question}>
                Can we get IBM Cloud Pak for Integration environment as a part of Jumpstart?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="subtitle1">
                No.
                <br /> Jumpstart kit enables enterpries in faster adapting Cloud
                Pak for Integration to simplify and expedite their migration
                journey into CP4I.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Faq;
