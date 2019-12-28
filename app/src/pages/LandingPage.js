import React from 'react';
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';

import Button from '../components/Button/Button';


const LandingPage = () => {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <p>Germany is hard. Form here form there, everything in German and nothing explains itself.</p>
        <p>Counsiliery, on the other hand, offers you forms that even your grandmother can fill out.</p>
        <p>You want to work as a freelancer? Here you will find interactive forms and all the information you need for your taxes. </p>
      </div>
      <div style={{ textAlign: "center" }}>
        <Link to="/InfoSteuerlicheErfassung">
          {Button("Tax Number")}
        </Link>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    </div>
  )
}

export default LandingPage;