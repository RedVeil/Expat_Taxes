import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Grid from '@material-ui/core/Grid';

import { specialExpensesGerman, specialExpensesEnglish } from "../pages/ressources/specialExpensesList";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import FormSteuerlicheErfassung from "../pages/FormSteuerlicheErfassung";
import InfoSteuerlicheErfassung from "../pages/InfoSteuerlicheErfassung";
import LandingPage from "../pages/LandingPage";
import umsatzsteuerExplanation from "../pages/ressources/umsatzsteuerExplanation";
import bruttoNettoExplanation from "../pages/ressources/bruttoNettoExplanation";
import differentGermanTaxes from "../pages/ressources/differentGermanTaxes";
import freiberuflerVsGewerbe from "../pages/ressources/freiberuflerVsGewerbe";

import styles from "./App.module.css";


export function App() {
  return (
    <div>
      <Nav />
      <Grid container>
        <Grid item sm>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={8} xl={7}>
          <div className={styles.main}>
            <div className={styles.testContainer}>
              <Router>
                <Switch>
                  <Route path="/" exact component={LandingPage} />
                  <Route path="/FormSteuerlicheErfassung" component={FormSteuerlicheErfassung} />
                  <Route path="/InfoSteuerlicheErfassung" component={InfoSteuerlicheErfassung} />
                  <Route path="/specialExpenses" component={specialExpensesEnglish} />
                  <Route path="/umsatzsteuerExplanation" component={umsatzsteuerExplanation} />
                  <Route path="/bruttoNettoExplanation" component={bruttoNettoExplanation} />
                  <Route path="/differentGermanTaxes" component={differentGermanTaxes} />
                  <Route path="/freiberuflerVsGewerbe" component={freiberuflerVsGewerbe} />
                </Switch>
              </Router>
            </div>
          </div>
        </Grid>
        <Grid item sm>
        </Grid>
      </Grid>
      <Footer />
    </div>
  )
};



/*

*/