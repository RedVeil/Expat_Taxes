import React from 'react';
import './App.css';
import { Landing } from "../Landing/Landing";
import { Saved } from "../Saved/Saved";
import { gdprPopUp } from "../utilities/GdprPopUp";
import { createForms } from "../utilities/createForms";
import { printDocument } from "../utilities/printDocument";

const baseURL = "http://localhost/form";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      landing: 1,
      forms: null,
      btnText: "Overview",
      formID: 0,
      userInput: {},
      index: 0,
    };
    this.onChangeSaveValue = this.onChangeSaveValue.bind(this);
    this.saveValue = this.saveValue.bind(this);
    this.saveFormValue = this.saveFormValue.bind(this);
    this.sendAll = this.sendAll.bind(this);
    this.openSavedPage = this.openSavedPage.bind(this);
    this.openFormPage = this.openFormPage.bind(this);
    this.nextForm = this.nextForm.bind(this);
    this.previousForm = this.previousForm.bind(this);
    this.changeIndex = this.changeIndex.bind(this);
  };

  componentDidMount() {
    this.setState({ forms: createForms() })
  };

  onChangeSaveValue(event) {
    let updateUserInput = this.state.userInput;
    updateUserInput[event.target.name] = event.target.value;
    console.log(updateUserInput)
    this.setState({ userInput: updateUserInput });
  };

  saveValue(name, value) {
    console.log(name, value)
    let updateUserInput = this.state.userInput;
    updateUserInput[name] = value;
    console.log(updateUserInput)
    this.setState({ userInput: updateUserInput });
  };

  saveFormValue(value, counter, listIndex) {
    let updateForm = this.state.forms;
    let item = updateForm[counter].inputFields[listIndex];
    item.defaultValue = value;
    item.value = value;
    updateForm[counter].inputFields[listIndex] = item;
    this.setState({ forms: updateForm });
  }

  sendAll() {
    printDocument(this.state.userInput)
  };

  openSavedPage() {
    this.setState({ landing: null })
    const overviewBtn = document.getElementById("overviewBtn")
    const formBtn = document.getElementById("formBtn")
    formBtn.style.borderBottom = "none";
    overviewBtn.style.borderBottom = "2.5px solid white";
  };

  openFormPage() {
    this.setState({ landing: 1 })
    const formBtn = document.getElementById("formBtn")
    const overviewBtn = document.getElementById("overviewBtn")
    overviewBtn.style.borderBottom = "none";
    formBtn.style.borderBottom = "2.5px solid white";
  };

  changeIndex(inputId) {
    this.setState({ index: inputId })
  };

  nextForm() {
    this.setState({ index: 0 })
    var input_fields = document.getElementsByClassName("inputField")
    for (let i = 0, len = Object.keys(input_fields).length; i < len; i++) {
      this.saveFormValue(input_fields[i].value, this.state.formID, i)
    }
    switch (this.state.formID) {
      case 8:
        // married yes, no -> skip to 16
        if (this.state.userInput["married"] === "no") {
          this.setState(() => ({ formID: this.state.formID + 8 }))
        }
        else {
          this.setState(() => ({ formID: this.state.formID + 1 }))
        }
        break;
      case 11:
        // live together no, yes => skip to 13
        if (this.state.userInput["live_together"] === "yes") {
          const inputPAdressOverwrite = {
            "p_strasse": "u_strasse", "p_hausnummer": "u_hausnummer", "p_hausnummer_zusatz": "u_hausnummer_zusatz",
            "p_postleitzahl": "u_postleitzahl", "p_city": "u_city"
          }
          const formPAdressOverwrite = [[1, 0, 12, 0], [1, 1, 12, 1], [1, 2, 12, 2], [1, 3, 12, 3], [1, 4, 12, 4]]
          for (var key in inputPAdressOverwrite) {
            this.saveValue(key, this.state.userInput[inputPAdressOverwrite[key]])
          }
          for (let i = 0, len = formPAdressOverwrite.length; i < len; i++) {
            this.saveFormValue(this.state.forms[formPAdressOverwrite[i][0]].inputFields[formPAdressOverwrite[i][1]].value,
              formPAdressOverwrite[i][2], formPAdressOverwrite[i][3])
          }
          this.setState(() => ({ formID: this.state.formID + 2 }))
        }
        else {
          this.setState(() => ({ formID: this.state.formID + 1 }))
        }
        break;
      case 16:
        if (this.state.userInput["old_marriage"] === "no") {
          this.setState(() => ({ formID: this.state.formID + 2 }))
        }
        else {
          this.setState(() => ({ formID: this.state.formID + 1 }))
        }
        break;
      case 20:
        if (this.state.userInput["SEPA"] === "yes") {
          this.saveValue("sepa_x", "x")
        }
        break;
      case 21:
        // Tax consultant yes, no -> skip to 24
        if (this.state.userInput["tax_consultant"] === "no") {
          this.saveValue("tax_consultant_no", "x")
          this.setState(() => ({ formID: this.state.formID + 5 }))
        }
        else {
          this.saveValue("tax_consultant_yes", "x")
          this.setState(() => ({ formID: this.state.formID + 1 }))
        }
        break;
      case 25:
        //skip to 28
        this.setState(() => ({ formID: this.state.formID + 5 }))
        break;
      case 26:
        // docRecepient not me, me -> fill and skip to 28
        if (this.state.userInput["doc_recipient"] === "me") {
          // !!!EXPERIMENT leave input blank in hope that they get printed blank!!!
          // docRecipient2ValuesToOverwrite = {25:[1,2],26:[0,1,2,3,4],27:[0,1,2,3]};
          // docRecipient2OverwriteValues = {1:[0,1],2:[0,1,2,3,4], 4:[0,1,2], 5:[0]}
          /*
          x = {"e_lastname":"u_lastname","e_firstname":"u_firstname"}
          y = [[1,0,25,1][1,1,25,2][2,0,26,0][2,1,26,1][2,2,26,2][2,3,26,3][2,4,26,4][4,0,27,0][4,1,27,1][4,2,27,2][5,0,27,3]]
          for (var key in x){
            this.saveValue(key, this.state.userInput[key])
          }
          for (let i = 0, len = y.length; i < len; i++) {
            this.saveFormValue(this.state.forms[y[i][0]].inputFields[y[i][1]].value, y[i][2], y[i][3])
          }
          */
          this.setState(() => ({ formID: this.state.formID + 4 }))
        }
        else {
          this.setState(() => ({ formID: this.state.formID + 1 }))
        }
        break;
      case 30:
        if (this.state.userInput["doc_firstname"] !== null) {
          this.saveValue("vollmacht_x", "x")
          this.saveValue("vollmacht_attached", "x")
        }
        break;
      case 32:
        if (this.state.userInput["old_tax_id"] === "no") {
          this.saveValue("old_tax_no", "x")
          this.setState(() => ({ formID: this.state.formID + 2 }))
        }
        else {
          this.saveValue("old_tax_no", "x")
          this.setState(() => ({ formID: this.state.formID + 1 }))
        }
        break;
      case 34:
        // difFirmAdress Not Home, Home => fill and skip to 35
        if (this.state.userInput["dif_firm_address"] === "home") {
          const fullName = `${this.state.userInput["u_firstname"]},${this.state.userInput["u_lastname"]}`
          const inputFirmAdressOverwrite = {
            "firm_bezeichnung": fullName, "firm_strasse": "u_strasse", "firm_hausnummer": "u_hausnummer",
            "firm_adressergaenzung": "u_adressergaenzung", "firm_postleitzahl": "u_postleitzahl", "firm_city": "u_city",
            "firm_tel_int_vorwahl": "tel_int_vorwahl", "firm_vorwahl_tel": "vorwahl_tel", "firm_rufnummer_tel": "rufnummer_tel",
            "firm_e_mail": "e_mail", "firm_website": "website"
          }
          const formFirmAdressOverwrite = [[1, 0, 36, 0], [1, 1, 36, 1], [1, 2, 36, 2], [1, 3, 36, 3], [1, 4, 36, 4], [2, 0, 37, 0], [2, 1, 37, 1], [2, 2, 37, 2], [3, 0, 37, 3], [3, 1, 37, 4]]
          for (var key in inputFirmAdressOverwrite) {
            this.saveValue(key, this.state.userInput[inputFirmAdressOverwrite[key]])
          }
          this.saveFormValue(`${this.state.forms[0].inputFields[0].value},${this.forms[0].inputFields[1].value}`, 35, 0)
          for (let i = 0, len = formFirmAdressOverwrite.length; i < len; i++) {
            this.saveFormValue(this.state.forms[formFirmAdressOverwrite[i][0]].inputFields[formFirmAdressOverwrite[i][1]].value,
              formFirmAdressOverwrite[i][2], formFirmAdressOverwrite[i][3])
          }
          this.setState(() => ({ formID: this.state.formID + 4 }))
        }
        else {
          this.setState(() => ({ formID: this.state.formID + 1 }))
        }
        break;
      case 37:
        if (this.state.userInput["sonstig"] !== null) {
          this.saveValue("sonstig_x", "x")
        }
        break;
      case 38:
        let updateUserInput = this.state.userInput;
        updateUserInput["neugründungsdate"] = this.state.userInput["work_date"];
        console.log(updateUserInput)
        this.setState({ userInput: updateUserInput });
        this.setState(() => ({ formID: this.state.formID + 1 }))
        break;
      case 43:
        //if married skip to 45 find marriageStatus value in states
        if (this.state.userInput["married"] === "no") {
          this.setState(() => ({ formID: this.state.formID + 5 }))
        }
        else {
          this.setState(() => ({ formID: this.state.formID + 1 }))
        }
        break;
      case 50:
        if (this.state.userInput["small_business"] === "yes") {
          this.saveValue("small_busines_yes", "x")
        }
        if (this.state.userInput["small_business"] === "no") {
          this.saveValue("small_busines_no", "x")
        }
        break;
      case 50:
        if (this.state.userInput["steuerbefreiung"] !== null) {
          this.saveValue("steuerbefreiung_yes", "x")
        }
        else {
          this.saveValue("steuerbefreiung_no", "x")
        }
        break;
      case 51:
        if (this.state.userInput["steuersatz"] !== null) {
          this.saveValue("steuersatz_yes", "x")
        }
        else {
          this.saveValue("steuersatz_no", "x")
        }
        break;
      case 53:
        if (this.state.userInput["pre_ustid"] !== null) {
          this.saveValue("pre_ustid_yes", "x")
        }
        else {
          this.saveValue("pre_ustid_no", "x")
        }
        break;
      case 54:
        this.openSavedPage()
        break;
      default:
        this.setState(() => ({ formID: this.state.formID + 1 }))
    };
  };

  previousForm() {
    this.setState({ index: 0 })
    this.setState(() =>
      ({ formID: this.state.formID - 1 }))
  };

  render() {
    return (
      <div className="App">
        <div className="navigationContainer">
          <h2 style={{ color: "white", margin: "0.1em 0 0 0.3em" }} id="pageTitle">Tax Helper </h2>
          <ul>
            <button id="sendAll" onClick={this.sendAll}>Send all</button>
            <button id="overviewBtn" onClick={this.openSavedPage}>Overview</button>
            <button id="formBtn" onClick={this.openFormPage}>Form</button>
          </ul>
        </div>
        <div className="mainContainer">
          {this.state.landing ? (<div className="backBtnContainer">
            {this.state.formID !== 0 ? <button id="back" onClick={this.previousForm}><i className="left"></i></button> : <p></p>}
          </div>) : <div></div>}
          <div className="main">
            {this.state.landing ? <Landing forms={this.state.forms} saveValue={this.onChangeSaveValue} formID={this.state.formID}
              nextForm={this.nextForm} previousForm={this.previousForm} openSavedPage={this.openSavedPage} index={this.state.index} changeIndex={this.changeIndex} />
              : <Saved forms={this.state.forms} sendAll={this.sendAll} />}
          </div>
          {this.state.landing ? (<div className="nextBtnContainer">
            {this.state.formID !== 53 ? <button id="submit" onClick={this.nextForm}><i className="right"></i></button>
              : <button id="submit" onClick={this.openSavedPage}><i className="right"></i></button>}
          </div>) : <div></div>}
        </div>
        <div className="footer">
          <p style={{ color: "white", marginTop: "1em" }}>Thanks a lot for visiting my Website! If you have any questions regarding the site or with your "Anmeldung" feel free to ask me directly.</p>
          <p style={{ color: "white" }}>I hope it helped you and i would love to hear feedback from you! :)</p>
          <p style={{ color: "white" }}>Consider leaving a tip it helps me to continue my work. <a href="https://paypal.me/pools/c/8htPxuQfTR">Paypal</a></p>
          <p style={{ color: "white" }}>And if you really want to see it here you go: <span>{gdprPopUp}</span></p>
        </div>
      </div>
    )
  };
};


/*
Dont think i need this:
createUserInput(response) {
    let userInputDict = {}
    for (let i = 0, len = response.length; i < len; i++) {
      for (let n = 0, len = response[i].inputFields.length; n < len; n++) {
        /*console.log(response[i].inputFields[n].name)
        userInputDict[response[i].inputFields[n].name] = ""
      }
    }
    this.setState({ userInput: userInputDict })
    console.log(userInputDict)
  };

  */