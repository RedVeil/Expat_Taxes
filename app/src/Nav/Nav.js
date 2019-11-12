import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css"

export default function Nav() {
  return (
    <div className="navigationContainer">
      <h2 id="pageTitle">Tax Helper </h2>
      <nav>
        <ul>
          <Link to="/">
            <li >Home</li>
          </Link>
          <Link to="/steuerlicheErfassung">
            <li >Steuerliche Erfassung</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};