import React from "react";
import Nav from "../Nav/Nav";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Footer from "../Footer/Footer";
import SteuerlicheErfassungForm from "../Forms/SteuerlicheErfassungForm";
import LandingPage from "../LandingPage/LandingPage";
import {specialExpensesGerman, specialExpensesEnglish} from "../databases/specialExpensesList";


export function App(){
  return(
    <Router>
    <div className="App">
      <Nav/>
      <Switch/>
        <Route path="/steuerlicheErfassung" component={SteuerlicheErfassungForm}/>
        <Route path="/" exact component={LandingPage}/>
        <Route path="/specialExpensesListGerman" component={specialExpensesGerman}/>
        <Route path="/specialExpensesListEnglish" component={specialExpensesEnglish}/>
      <Switch/>
      <Footer/>
    </div>
    </Router>
  )
};