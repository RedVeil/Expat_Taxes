import React from 'react';
import Button from '../components/Button/Button';
import { Link } from "react-router-dom";

const InfoSteuerlicheErfassung = () => {
  return (
    <div>
      <div>
        <p>
          If you want to become a freelancer or start a business in
          Germany you must fill The “Fragebogen zur steuerlichen Erfassung”.
          It is used by the tax office (Finanzamt) to understand your business.
          After you submit this form to the tax office,
          you get a VAT number and a tax number (Steuernummer). This can take a few weeks.
        </p>
        <p>
          On your residence permit, look for a line that says "Selbständige Tätigkeit gestattet"
          (self-employment allowed). This allows you to be a freelancer or business owner in Germany.
          If you don't have a residence permit, or if your residence permit does not allow self-employment,
          you need to apply for the correct visa first.
        </p>
        <p>
          If information is missing, incomprehensible or possibly wrong,
          the tax office will contact you and try to clarify this.
          So don't worry if you arent sure about something.
        </p>
        <p>
          In Germany, there is a legal difference between being a freelancer (Freiberufler) and being a tradesman (Gewerbetreibende).
          If you are registering a trade (Gewerbe), you must get a trade licence (Gewerbeschein) aswell. <a href="http://counsiliery.de/freiberuflerVsGewerbe" target="_blank" rel="noopener noreferrer">More info...</a>
        </p>
        <p>German dates are written in the DD/MM/YYYY format.</p>
        <p><b>This form must be filled in <a target="_blank" rel="noopener noreferrer" href="https://www.deepl.com/translator">german</a>.
        </b></p>
      </div>
      <div style={{ textAlign: "center" }}>
        <Link to="/FormSteuerlicheErfassung">
          {Button("Ok")}
        </Link>
      </div>
      <div>
        <p>More Information:</p>
        <li>
          <a href="http://counsiliery.de/specialExpenses" target="_blank" rel="noopener noreferrer">List of special expenses</a>
        </li>
        <li>
          <a href="http://counsiliery.de/differentGermanTaxes" target="_blank" rel="noopener noreferrer">What are the different taxes?</a>
        </li>
        <li>
          <a href="http://counsiliery.de/umsatzsteuerExplanation" target="_blank" rel="noopener noreferrer">Value added tax (Umsatzsteuer)</a>
        </li>
       
      </div>
    </div>
  )
}

export default InfoSteuerlicheErfassung;