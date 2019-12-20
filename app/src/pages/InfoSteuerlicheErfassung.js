import React from 'react';
import Button from '../components/Button/Button';
import { Link } from "react-router-dom";

const InfoSteuerlicheErfassung = () => {
    return(
        <div>
            <div>
                Test
                <Link to="/FormSteuerlicheErfassung">
                    {Button("Ok")}
                </Link>
            </div>
        </div>
    )
}

export default InfoSteuerlicheErfassung;