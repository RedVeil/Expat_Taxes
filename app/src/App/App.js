import React from "react";
import Nav from "../Nav/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "../Footer/Footer";
import SteuerlicheErfassungForm from "../Forms/SteuerlicheErfassungForm";
import LandingPage from "../LandingPage/LandingPage";
import { specialExpensesGerman, specialExpensesEnglish } from "../databases/specialExpensesList";
import Menu from "../Menu/Menu";
import Grid from '@material-ui/core/Grid';

import styles from './App.module.css';
import "./App.css";

export function App() {
  return (
    <div>
      <Nav />
      <Grid container>
        <Grid item xs={3}>
        </Grid>
        <Grid item xs={6}>
          <Router>
            <Switch>
              <Route path="/" exact component={LandingPage} />
              <Route path="/SteuerlicheErfassung" component={SteuerlicheErfassungForm} />
            </Switch>
          </Router>
        </Grid>
        <Grid item xs={3}>
        </Grid>
      </Grid>
      <Footer />
    </div>
  )
};



/*

*/