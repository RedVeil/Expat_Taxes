import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Grid from '@material-ui/core/Grid';

import { specialExpensesGerman, specialExpensesEnglish } from "../databases/specialExpensesList";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import FormSteuerlicheErfassung from "../pages/FormSteuerlicheErfassung";
import InfoSteuerlicheErfassung from "../pages/InfoSteuerlicheErfassung";
import LandingPage from "../pages/LandingPage";



import styles from "./App.module.css";


export function App() {
  return (
    <div>
      <Nav />
      <Grid container>
        <Grid item sm>
        </Grid>
        <Grid item xs={12} sm={9} md={7}>
          <div className={styles.main}>
            <div className={styles.testContainer}>
              <Router>
                <Switch>
                  <Route path="/" exact component={LandingPage} />
                  <Route path="/FormSteuerlicheErfassung" component={FormSteuerlicheErfassung} />
                  <Route path="/InfoSteuerlicheErfassung" component={InfoSteuerlicheErfassung} />
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