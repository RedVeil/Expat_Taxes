import React from 'react';
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';

import Button from '../components/Button/Button';


const LandingPage = () => {
    return(
        <div>
            <div>
                LandingPage
                <Link to="/InfoSteuerlicheErfassung">
                    {Button("Ok")}
                </Link>
            </div>
        </div>
    )
}

export default LandingPage;