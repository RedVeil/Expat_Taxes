import React from 'react';
import './App.css';
import { printDocument } from "../utilities/printDocument";
import { steuerlicheErfassungFormData } from "../databases/steuerlicheErfassungFormData";
import createFormSection from "../FormSection/FormSection";
import { footer } from "../databases/footer";



export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: {},
      currentTooltipId: null,
    };
    this.onChangeSaveValue = this.onChangeSaveValue.bind(this);
    this.saveValue = this.saveValue.bind(this);
    this.sendAll = this.sendAll.bind(this);
    this.handleRadioForms = this.handleRadioForms.bind(this);
    this.showTooltip = this.showTooltip.bind(this);
    this.displayContainer = this.displayContainer.bind(this);
  };

  showTooltip(event) {
    if (this.state.currentTooltipId !== null) {
      const previousTooltip = document.getElementById(this.state.currentTooltipId);
      previousTooltip.style.display = "none";
    };
    const newTooltipId = `${event.target.name}-tooltip`
    const newTooltip = document.getElementById(newTooltipId);
    newTooltip.style.display = "inline-block";
    this.setState({ currentTooltipId: newTooltipId })
  };

  onChangeSaveValue(event) {
    console.log(`${event.target.name}, ${event.target.value}`)
    let updateUserInput = this.state.userInput;
    updateUserInput[event.target.name] = event.target.value;
    this.setState({ userInput: updateUserInput });
  };

  saveValue(name, value) {
    let updateUserInput = this.state.userInput;
    updateUserInput[name] = value;
    this.setState({ userInput: updateUserInput });
  };

  sendAll() {
    printDocument(this.state.userInput)
  };

  displayContainer(containerId) {
    const displayContainer = document.getElementById(containerId);
    displayContainer.style.display = "block";
  };

  handleRadioForms(event) {
    this.onChangeSaveValue(event);
    if (this.state.userInput["married"] === "yes") {
      this.displayContainer("XXX")
    };

    if (this.state.userInput["live_together"] === "yes") {
      const partnerAdressOverwrite = {
        "p_strasse": "u_strasse", "p_hausnummer": "u_hausnummer", "p_hausnummer_zusatz": "u_hausnummer_zusatz",
        "p_postleitzahl": "u_postleitzahl", "p_city": "u_city"
      }
      for (var key in partnerAdressOverwrite) {
        this.saveValue(key, this.state.userInput[partnerAdressOverwrite[key]])
      }
    };

    if (this.state.userInput["old_marriage"] === "yes") {
      this.displayContainer("XXX")
    };

    if (this.state.userInput["SEPA"] === "yes") {
      this.saveValue("sepa_x", "x")
    };

    if (this.state.userInput["tax_consultant"] === "no") {
      this.saveValue("tax_consultant_no", "x")
    };
    if (this.state.userInput["tax_consultant"] === "yes") {
      this.saveValue("tax_consultant_yes", "x")
    };

    if (this.state.userInput["doc_recipient"] === "not me") {
      this.displayContainer("XXX")
    };

    if (this.state.userInput["doc_firstname"] !== null) {
      this.saveValue("vollmacht_x", "x")
      this.saveValue("vollmacht_attached", "x")
    };

    if (this.state.userInput["old_tax_id"] === "no") {
      this.saveValue("old_tax_no", "x")
      this.setState(() => ({ formID: this.state.formID + 2 }))
    };
    if (this.state.userInput["old_tax_id"] === "yes") {
      this.displayContainer("XXX")
    };
    if (this.state.userInput["dif_firm_address"] === "home") {
      const fullName = `${this.state.userInput["u_firstname"]},${this.state.userInput["u_lastname"]}`
      const inputFirmAdressOverwrite = {
        "firm_bezeichnung": fullName, "firm_strasse": "u_strasse", "firm_hausnummer": "u_hausnummer",
        "firm_adressergaenzung": "u_adressergaenzung", "firm_postleitzahl": "u_postleitzahl", "firm_city": "u_city",
        "firm_tel_int_vorwahl": "tel_int_vorwahl", "firm_vorwahl_tel": "vorwahl_tel", "firm_rufnummer_tel": "rufnummer_tel",
        "firm_e_mail": "e_mail", "firm_website": "website"
      };
      for (var key in inputFirmAdressOverwrite) {
        this.saveValue(key, this.state.userInput[inputFirmAdressOverwrite[key]])
      };
    };
    if (this.state.userInput["sonstig"] !== null) {
      this.saveValue("sonstig_x", "x")
    };
    if (this.state.userInput["work_date"] !== null) {
      this.saveValue("neugründungsdate", this.state.userInput["work_date"])
    };
    if (this.state.userInput["small_business"] === "yes") {
      this.saveValue("small_busines_yes", "x")
    };
    if (this.state.userInput["small_business"] === "no") {
      this.saveValue("small_busines_no", "x")
    };
    if (this.state.userInput["steuerbefreiung"] !== null) {
      this.saveValue("steuerbefreiung_yes", "x")
    };
    if (this.state.userInput["steuersatz"] !== null) {
      this.saveValue("steuersatz_yes", "x")
    };
    if (this.state.userInput["pre_ustid"] !== null) {
      this.saveValue("pre_ustid_yes", "x")
    };
  };

  render() {
    let formSections = [];
    for (let i = 0; i < steuerlicheErfassungFormData.length; i++) {
      formSections.push(createFormSection(steuerlicheErfassungFormData[i], this.showTooltip, this.onChangeSaveValue, this.handleRadioForms))
    };

    return (
      <div className="App">
        <div className="navigationContainer">
          <h2 style={{ color: "white", margin: "0.1em 0 0 0.3em" }} id="pageTitle">Tax Helper </h2>
          <ul>
          </ul>
        </div>
        <div className="form">
          {formSections}
          <button onClick={this.sendAll}>Done</button>
        </div>
        {footer}
      </div>
    )
  };
};