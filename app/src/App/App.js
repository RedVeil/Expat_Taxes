import React from "react";
import Nav from "../Nav/Nav";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Footer from "../Footer/Footer";
import SteuerlicheErfassungForm from "../Forms/SteuerlicheErfassungForm";
import LandingPage from "../LandingPage/LandingPage";
import {specialExpensesGerman, specialExpensesEnglish} from "../databases/specialExpensesList";
import Menu from "../Menu/Menu";

import styles from './App.module.css';
import "./App.css";

export function App(){
  return(
    <Router>
    <div className={styles.App}>
      <Nav/>
      <div style={{display:"inline-block"}}>
        <Menu/>
          <SteuerlicheErfassungForm/>
        </div>
      <Footer/>
    </div>
    </Router>
  )
};



/*

*/