import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';

import { printDocument } from "../utilities/printDocument";
import Button from '../components/Button/Button';
import InputField from "../components/InputFields/InputField/InputField";
import RadioField from "../components/InputFields/RadioField/RadioField";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import styles from "./Form.module.css";


const theme = createMuiTheme({
  overrides: {
    MuiTooltip: {
      tooltip: {
        fontSize: "1em",
        backgroundColor: "#707070",
        color: "#fff",
        boxShadow: " 0 4px 12px rgba(0, 0, 0, 0.1)",
        padding: "0.5em",
      }
    },
    MuiFilledInput: {
      root: {
        backgroundColor: "fff",
        border: "1px solid #707070",
        borderRadius: 5,
        '&:hover': {
          border: "1px solid #333333",
          backgroundColor: "#fcfcfc",
        },
        '&$focused': {
          border: "1px solid #12A9DE",
          backgroundColor: "#fff",
          color: "#12A9DE",
        }
      },
      input: {
        color: "#4C4C4C",
      }
    },
    MuiFormLabel: {
      root: {
        color: "#707070",
        fontFamily: "'Roboto Mono', sans-serif",
        '&:hover': {
          color: "#333333",
        },
        '&$focused': {
          color: "#12A9DE",
        }
      }
    }
  }
});

const FormSteuerlicheErfassung = () => {
  const [userInput, setUserInput] = useState({});

  function onChangeSaveValue(event) {
    userInput[event.target.name] = event.target.value;
  };

  function saveValue(name, value) {
    userInput[name] = value;
  };

  function eraseValue(name) {
    if (userInput[name]) {
      userInput[name] = "";
    };
  };

  function sendAll() {
    printDocument(userInput)
  };

  function hideContainer(containerId) {
    const selectedContainer = document.getElementById(containerId);
    if (selectedContainer.style.display === "block") {
      selectedContainer.style.display = "none";
    }
  };

  function showContainer(containerId) {
    const selectedContainer = document.getElementById(containerId);
    selectedContainer.style.display = "block";
  };



  function handleRadioForms(event) {
    onChangeSaveValue(event);
    if (userInput["married"] === "yes") {
      for (let i = 1; i < 6; i++) {
        showContainer(`Your Partner-row-${i}`)
      };
      showContainer(`Partner Expected Income-section`);
    };
    if (userInput["married"] === "no") {
      for (let i = 1; i < 6; i++) {
        hideContainer(`Your Partner-row-${i}`)
      };
      hideContainer(`Partner Expected Income-section`);
    };

    if (userInput["live_together"] === "yes") {
      hideContainer(`Your Partner-row-6`);
      const partnerAddressOverwrite = {
        "p_strasse": "u_strasse", "p_hausnummer": "u_hausnummer", "p_hausnummer_zusatz": "u_hausnummer_zusatz",
        "p_postleitzahl": "u_postleitzahl", "p_city": "u_city"
      };
      for (var key in partnerAddressOverwrite) {
        if (userInput[partnerAddressOverwrite[key]] !== undefined) {
          saveValue(key, userInput[partnerAddressOverwrite[key]])
        };
      };
    };
    if (userInput["live_together"] === "no") {
      console.log(userInput)
      showContainer(`Your Partner-row-6`);
      const erasePartnerAddress = [
        "p_strasse", "p_hausnummer", "p_hausnummer_zusatz",
        "p_postleitzahl", "p_city"];
      for (let i = 0; i < erasePartnerAddress.length; i++) {
        eraseValue(erasePartnerAddress[i])
      };
    };

    if (userInput["old_marriage"] === "yes") {
      showContainer(`Your Partner-row-8`)
    };
    if (userInput["old_marriage"] === "no") {
      hideContainer(`Your Partner-row-8`)
    };

    if (userInput["SEPA"] === "yes") {
      saveValue("sepa_x", "x")
    };
    if (userInput["SEPA"] === "no") {
      eraseValue("sepa_x")
    };

    if (userInput["tax_consultant"] === "no") {
      eraseValue("tax_consultant_yes")
      saveValue("tax_consultant_no", "x");
      for (let i = 1; i < 4; i++) {
        hideContainer(`Tax Consultant-row-${i}`)
      };
    };
    if (userInput["tax_consultant"] === "yes") {
      eraseValue("tax_consultant_no")
      saveValue("tax_consultant_yes", "x")
      for (let i = 1; i < 4; i++) {
        showContainer(`Tax Consultant-row-${i}`)
      };
    };

    if (userInput["doc_recipient"] === "not me") {
      for (let i = 1; i < 4; i++) {
        showContainer(`Authorized Document Recipient-row-${i}`)
      };
    };
    if (userInput["doc_recipient"] === "me") {
      for (let i = 1; i < 4; i++) {
        hideContainer(`Authorized Document Recipient-row-${i}`)
      };
      eraseValue("vollmacht_x");
      eraseValue("vollmacht_attached");
    };

    if (userInput["doc_firstname"] !== undefined) {
      saveValue("vollmacht_x", "x")
      saveValue("vollmacht_attached", "x")
    };

    if (userInput["previous_residence"] === "yes") {
      showContainer("Previous Residence-row-1");
      showContainer("Previous Residence-row-2");
      eraseValue("old_tax_no");
      saveValue("old_tax_yes", "x");
    };

    if (userInput["previous_residence"] === "no") {
      hideContainer("Previous Residence-row-1");
      hideContainer("Previous Residence-row-2");
      eraseValue("old_tax_yes");
      saveValue("old_tax_no", "x")
    };

    if (userInput["old_tax_id"] === "no") {
      hideContainer("Previous Residence-row-4");
      eraseValue("old_tax_yes");
      saveValue("old_tax_no", "x");
    };
    if (userInput["old_tax_id"] === "yes") {
      showContainer("Previous Residence-row-4")
      eraseValue("old_tax_no");
      saveValue("old_tax_yes", "x");
    };

    if (userInput["dif_firm_address"] === "home") {
      for (let i = 1; i < 5; i++) {
        hideContainer(`Business Address-row-${i}`)
      };
      const fullName = `${userInput["u_firstname"]},${userInput["u_lastname"]}`;
      const inputFirmAddressOverwrite = {
        "firm_bezeichnung": fullName, "firm_strasse": "u_strasse", "firm_hausnummer": "u_hausnummer",
        "firm_adressergaenzung": "u_adressergaenzung", "firm_postleitzahl": "u_postleitzahl", "firm_city": "u_city",
        "firm_tel_int_vorwahl": "tel_int_vorwahl", "firm_vorwahl_tel": "vorwahl_tel", "firm_rufnummer_tel": "rufnummer_tel",
        "firm_e_mail": "e_mail", "firm_website": "website"
      };
      for (var key in inputFirmAddressOverwrite) {
        saveValue(key, userInput[inputFirmAddressOverwrite[key]])
      };
    };
    if (userInput["dif_firm_address"] === "not home") {
      for (let i = 1; i < 5; i++) {
        showContainer(`Business Address-row-${i}`)
      };
      const eraseFirmAddress = [
        "firm_bezeichnung", "firm_strasse", "firm_hausnummer",
        "firm_adressergaenzung", "firm_postleitzahl", "firm_city",
        "firm_tel_int_vorwahl", "firm_vorwahl_tel", "firm_rufnummer_tel",
        "firm_e_mail", "firm_website"];
      for (let i = 0; i < eraseFirmAddress.length; i++) {
        eraseValue(eraseFirmAddress[i])
      };
    };

    if (userInput["old_business"] === "yes") {
      showContainer("Previous Business-row-1");
      showContainer("Previous Business-row-2");
      eraseValue("old_business_no");
      saveValue("old_business_yes", "x");
    };

    if (userInput["old_business"] === "no") {
      hideContainer("Previous Business-row-1");
      hideContainer("Previous Business-row-2");
      const erasePreviousBusiness = ["old_business_yes", "old_business_name", "old_business_city",
        "old_business_start_date", "old_business_end_date", "old_business_finanzamt", "old_business_tax_id", "old_business_ustid"];
      for (let i = 0; i < erasePreviousBusiness.length; i++) {
        eraseValue(erasePreviousBusiness[i])
      };
      saveValue("old_business_no", "x");
    };

    if (userInput["handelsregister"] === "yes") {
      hideContainer("Handelsregister-row-3");
      hideContainer("Handelsregister-row-2");
      showContainer("Handelsregister-row-1");
      saveValue("handelsregister_yes", "x")
      eraseValue("handelsregister_no");
    };

    if (userInput["handelsregister"] === "no") {
      hideContainer("Handelsregister-row-1");
      showContainer("Handelsregister-row-2");
      saveValue("handelsregister_no", "x");
      const eraseHandelsregister = ["handelsregister_yes", "handelsregister_date", "handelsregister_city", "registry_number"]
      for (let i = 0; i < eraseHandelsregister.length; i++) {
        eraseValue(eraseHandelsregister[i])
      };
    };

    if (userInput["handelsregister_application_done"] === "yes") {
      showContainer("Handelsregister-row-3");
      eraseValue("application_intended");
      saveValue("application_done", "x");
    };

    if (userInput["handelsregister_application_done"] === "no") {
      hideContainer("Handelsregister-row-3");
      const eraseApplication = ["application_done", "registration_done_date", "handelsregister_city", "registry_number"]
      for (let i = 0; i < eraseApplication.length; i++) {
        eraseValue(eraseApplication[i])
      };
      saveValue("application_intended", "x");
    };

    if (userInput["work_date"] !== undefined) {
      saveValue("neugründungsdate", userInput["work_date"])
    };

    if (userInput["small_business"] === "yes") {
      eraseValue("small_business_no");
      saveValue("small_business_yes", "x");
    };
    if (userInput["small_business"] === "no") {
      eraseValue("small_business_yes");
      saveValue("small_business_no", "x");
    };

    if (userInput["steuerbefreiung"] !== undefined) {
      saveValue("steuerbefreiung_yes", "x")
    };

    if (userInput["steuersatz"] !== undefined) {
      saveValue("steuersatz_yes", "x")
    };

    if (userInput["pre_ustid"] !== undefined) {
      saveValue("pre_ustid_yes", "x")
    };
  };

  return (
    <div style={{ paddingLeft: "1em", display: "block", justifyContent: "center", alignContent: "center" }}>
      <Grid container>
        <MuiThemeProvider theme={theme}>
          <Grid item xs={12} className={styles.textContainer}>
            <div><h2 className={styles.subTitle}>Personal Informations</h2></div>
          </Grid>
          <Grid item xs={12} className={styles.gridContainer}>
            <InputField
              id="u_firstname"
              tooltipText="If you have a middle name add it here too"
              placeholder="First Name"
              onChangeFunction={onChangeSaveValue}
              size="medium"
              size="medium"
            />
            <InputField
              id="u_lastname"
              tooltipText=""
              placeholder="Last Name"
              onChangeFunction={onChangeSaveValue}
              size="medium"
            />
            <InputField
              id="u_birth_name"
              tooltipText="You need to fill this only if your maiden name is different to your current last name"
              placeholder="Maiden Name"
              onChangeFunction={onChangeSaveValue}
              size="medium"
            />
            <InputField
              id="u_birthday"
              tooltipText="Enter the date in the following format: DD/MM/YYYY."
              placeholder="Birthday"
              onChangeFunction={onChangeSaveValue}
              size="medium" />
          </Grid>
          <Grid item xs={12} className={styles.gridContainer}>
            <InputField
              id="u_strasse"
              tooltipText=""
              placeholder="Street"
              onChangeFunction={onChangeSaveValue}
              size="medium" />
            <InputField
              id="u_hausnummer"
              tooltipText="Enter your street number."
              placeholder="Nr"
              onChangeFunction={onChangeSaveValue}
              size="small" />
            <InputField
              id="u_hausnummer_zusatz"
              tooltipText="Include this, if you live in a rear or side building."
              placeholder="Add."
              onChangeFunction={onChangeSaveValue}
              size="small"
            />
            <InputField
              id="u_postleitzahl"
              tooltipText=""
              placeholder="Post Code"
              onChangeFunction={onChangeSaveValue}
              size="medium"
            />
            <InputField
              id="u_city"
              tooltipText=""
              placeholder="City"
              onChangeFunction={onChangeSaveValue}
              size="medium"
            />
          </Grid>
          <Grid item xs={12} className={styles.gridContainer}>
            <InputField
              id="tel_int_vorwahl"
              tooltipText=""
              placeholder="Country Code"
              onChangeFunction={onChangeSaveValue}
              size="small"
            />
            <InputField
              id="vorwahl_tel"
              tooltipText="The second part of your phone number: +49 [176] 752428790"
              placeholder="Area- Code"
              onChangeFunction={onChangeSaveValue}
              size="small"
            />
            <InputField
              id="rufnummer_tel"
              tooltipText="The third part of your phone number: +49 176 [75242879]"
              placeholder="Phone Number"
              onChangeFunction={onChangeSaveValue}
              size="medium"
            />
            <InputField
              id="e_mail"
              tooltipText="Use your business relevant email adress"
              placeholder="Email"
              onChangeFunction={onChangeSaveValue}
              size="medium"
            />
            <InputField
              id="website"
              tooltipText="Use the website for you corresponding business"
              placeholder="Website"
              onChangeFunction={onChangeSaveValue}
              size="medium"
            />
          </Grid>
          <Grid item xs={12} className={styles.gridContainer}>
            <InputField
              id="u_current_job"
              tooltipText="If you have more than one Job, choose the one where you earn the most"
              placeholder="Job Title/Job Description"
              onChangeFunction={onChangeSaveValue}
              size="large"
            />
            <InputField
              id="u_id"
              tooltipText='You got your "Identifikationsnummer" with your "Anmeldung"'
              placeholder="Identification-Number"
              onChangeFunction={onChangeSaveValue}
              size="large"
            />
          </Grid>
          <Grid item xs={12} className={styles.textContainer}>
            <RadioField
              id="u_reli"
              radioFieldText="Do you have to pay church tax?"
              tooltipText="Church tax is added to your regular tax and send directly to your church"
              defaultValues={["EV", "RK", "VD"]}
              placeholder={["Evangelic", "Roman Catholic", "No Christian Church Tax"]}
              onChangeFunction={handleRadioForms}
            />

          </Grid>
          <Grid item xs={12}>
            <hr className={styles.seperator} />
          </Grid>
          <Grid item xs={12} className={styles.textContainer}>
            <h2 className={styles.subTitle}>Your Tax Office</h2>
          </Grid>
          <Grid item xs={12} className={styles.gridContainer}>
            <InputField
              id="finanzamt"
              tooltipText='The name of your tax office is based on your district. If you live in Mitte your Finanzamt would be called: "Finanzamt Mitte"'
              placeholder="Tax Office"
              onChangeFunction={onChangeSaveValue}
              size="large"
            />
            <InputField
              id="u_tax_id"
              tooltipText="Enter if you have one already, otherwise leave this blank"
              placeholder="Tax ID"
              onChangeFunction={onChangeSaveValue}
              size="large"
            />
          </Grid>
          <Grid item xs={12}>
            <hr className={styles.seperator} />
          </Grid>
          <Grid item xs={12} className={styles.textContainer}>
            <h2 className={styles.subTitle}>Your Partner</h2>
          </Grid>
          <Grid item xs={12} className={styles.textContainer}>
            <RadioField
              id="married"
              radioFieldText="Are you married?"
              tooltipText=""
              defaultValues={["yes", "no"]}
              placeholder={["Yes", "No"]}
              onChangeFunction={handleRadioForms}
            />
          </Grid>
          <Grid item xs={12} id="Your Partner-row-1" className={styles.gridContainer} style={{ display: "none" }}>
            <InputField
              id="marriage_date"
              tooltipText="Enter the date in the following format: DD/MM/YYYY"
              placeholder="Marriage Date"
              onChangeFunction={onChangeSaveValue}
              size="medium"
            />
          </Grid>
          <Grid item xs={12} id="Your Partner-row-2" className={styles.gridContainer} style={{ display: "none" }}>
            <InputField
              id="p_firstname"
              tooltipText="If they have a middle name add it here too"
              placeholder="First Name"
              onChangeFunction={onChangeSaveValue}
              size="medium"
            />
            <InputField
              id="p_lastname"
              tooltipText=""
              placeholder="Last Name"
              onChangeFunction={onChangeSaveValue}
              size="medium"
            />
            <InputField
              id="p_birth_name"
              tooltipText="You need to fill this if your partners maiden name is different to their current last name."
              placeholder="Maiden Name"
              onChangeFunction={onChangeSaveValue}
              size="medium"
            />
            <InputField
              id="p_birthday"
              tooltipText="Enter the date in the following format: DD/MM/YYYY."
              placeholder="Birthday"
              onChangeFunction={onChangeSaveValue}
              size="medium"
            />
          </Grid>
          <Grid item xs={12} id="Your Partner-row-3" className={styles.gridContainer} style={{ display: "none" }}>
            <InputField
              id="p_current_job"
              tooltipText="If they have more than one Job, choose the one where they earn the most"
              placeholder="Job Title/ Job Description"
              onChangeFunction={onChangeSaveValue}
              size="large"
            />
            <InputField
              id="p_id"
              tooltipText="Only if they have a german Tax Id or had one before"
              placeholder="Identification-Number"
              onChangeFunction={onChangeSaveValue}
              size="large"
            />
          </Grid>
          <Grid item xs={12} id="Your Partner-row-4" className={styles.gridContainer} style={{ display: "none" }}>
            <RadioField
              id="p_reli"
              radioFieldText="Do they have to pay church tax?"
              tooltipText="Church tax is added to their regular tax and send directly to their church"
              defaultValues={["EV", "RK", "VD"]}
              placeholder={["Evangelic", "Roman Catholic", "No Christian Church Tax"]}
              onChangeFunction={handleRadioForms}
            />
          </Grid>
          <Grid item xs={12} id="Your Partner-row-5" className={styles.gridContainer} style={{ display: "none" }}>
            <RadioField
              id="live_together"
              radioFieldText="Do you live together?"
              tooltipText=""
              defaultValues={["yes", "no"]}
              placeholder={["Yes", "No"]}
              onChangeFunction={handleRadioForms}
            />
          </Grid>
          <Grid item xs={12} id="Your Partner-row-6" className={styles.gridContainer} style={{ display: "none" }}>
            <InputField
              id="p_strasse"
              tooltipText=""
              placeholder="Street"
              onChangeFunction={onChangeSaveValue}
              size="medium"
            />
            <InputField
              id="p_hausnummer"
              tooltipText=""
              placeholder="Nr"
              onChangeFunction={onChangeSaveValue}
              size="small"
            />
            <InputField
              id="p_hausnummer_zusatz"
              tooltipText="Include this, if they live in a rear or side building"
              placeholder="Add."
              onChangeFunction={onChangeSaveValue}
              size="small"
            />
            <InputField
              id="p_postleitzahl"
              tooltipText=""
              placeholder="Post Code"
              onChangeFunction={onChangeSaveValue}
              size="medium"
            />
            <InputField
              id="p_city"
              tooltipText=""
              placeholder="City"
              onChangeFunction={onChangeSaveValue}
              size="medium"
            />
          </Grid>
          <Grid item xs={12} className={styles.textContainer}>
            <RadioField
              id="old_marriage"
              radioFieldText="Have you been married before?"
              tooltipText=""
              defaultValues={["yes", "no"]}
              placeholder={["Yes", "No"]}
              onChangeFunction={handleRadioForms}
            />
          </Grid>
          <Grid item xs={12} id="Your Partner-row-8" className={styles.gridContainer} style={{ display: "none" }}>
            <InputField
              id="widow_date"
              tooltipText=""
              placeholder="Widow Date"
              onChangeFunction={onChangeSaveValue}
              size="medium"
            />
            <InputField
              id="divorce_date"
              tooltipText=""
              placeholder="Divorce Date"
              onChangeFunction={onChangeSaveValue}
              size="medium"
            />
            <InputField
              id="seperate_date"
              tooltipText=""
              placeholder="Seperation Date"
              onChangeFunction={onChangeSaveValue}
              size="medium"
            />
          </Grid>
          <Grid item xs={12}>
            <hr className={styles.seperator} />
          </Grid>
          <Grid item xs={12} className={styles.textContainer}>
            <h2 className={styles.subTitle}>Your new Profession</h2>
          </Grid>
          <Grid item xs={12} className={styles.textContainer}>
            <InputField
              id="art_taetigkeit"
              tooltipText='Describe your Job, Job title and the industry you are working in. Enter as much as you want. Tip: It helps to be broad in the description as you can claim more expenses. (as long its reasonable)'
              placeholder="Freelance Job Description"
              onChangeFunction={onChangeSaveValue}
              size="large"
            />
            <InputField
              id="work_date"
              tooltipText="You can backdate this by up to 3 months to include preparation costs"
              placeholder="Occupation Date"
              onChangeFunction={onChangeSaveValue}
              size="medium"
            />

          </Grid>
          <Grid item xs={12}>
            <hr className={styles.seperator} />
          </Grid>
          <Grid item xs={12} className={styles.textContainer}>
            <h2 className={styles.subTitle}>Your Bank Account</h2>
          </Grid>
          <Grid item xs={12} className={styles.gridContainer}>
            <InputField
              id="iban_de"
              tooltipText="It is advised to use a business account here. It is possible to use your private bank account for business but this brings only more stress as you have to be very careful which expenses you claim.Plus if the tax office has to check your finances they will go through every single personal expense.For your own sake please dont do it, use a seperate account for your business"
              placeholder="IBAN"
              onChangeFunction={onChangeSaveValue}
              size="medium"
            />
            <InputField
              id="iban_int"
              tooltipText="Enter this only if you dont have a german bank account for your business"
              placeholder="IBAN International"
              onChangeFunction={onChangeSaveValue}
              size="medium"
            />
            <InputField
              id="bic"
              tooltipText=""
              placeholder="BIC"
              onChangeFunction={onChangeSaveValue}
              size="medium"
            />
            <InputField
              id="holder"
              tooltipText="Simply your first-, middle- and last name."
              placeholder="Holder Name"
              onChangeFunction={onChangeSaveValue}
              size="medium"
            />

          </Grid>
          <Grid item xs={12}>
            <hr className={styles.seperator} />
          </Grid>
          <Grid item xs={12} className={styles.textContainer}>
            <h2 className={styles.subTitle}>SEPA</h2>
          </Grid>
          <Grid item xs={12} className={styles.subTextContainer}>
            <p>A SEPA-Mandate allows the tax office to automatically collect your taxes.
              <br />Otherwise you have to transfer your taxes manually every month.
              <br />A SEPA-Mandate is easier and a good option if your account is always covered.
              <br />It always comes on a fixed date but if you cant pay it you have to pay extra penalties.
              <br />Dont sign this if you want more flexibility about the timing of your payments
              <br />or if your account is not covered through out the whole month.
              <br /><b>You will have to sign a seperate attached mandate.</b>
            </p>
          </Grid>
          <Grid item xs={12} className={styles.textContainer}>
            <RadioField
              id="SEPA"
              radioFieldText="Do you want to use a SEPA-Mandate?"
              tooltipText=""
              defaultValues={["yes", "no"]}
              placeholder={["Yes", "No"]}
              onChangeFunction={handleRadioForms}
            />

          </Grid>
          <Grid item xs={12}>
            <hr className={styles.seperator} />
          </Grid>
          <Grid item xs={12} className={styles.textContainer}>
            <h2 className={styles.subTitle}>Tax Consultant</h2>
          </Grid>
          <Grid item xs={12} className={styles.textContainer}>
            <RadioField
              id="tax_consultant"
              radioFieldText="Do you have a Tax Consultant?"
              tooltipText=""
              defaultValues={["yes", "no"]}
              placeholder={["Yes", "No"]}
              onChangeFunction={handleRadioForms}
            />
          </Grid>
          <Grid item xs={12} id="Tax Consultant-row-1" className={styles.gridContainer} style={{ display: "none" }}>
            <InputField
              id="steuerberater"
              tooltipText="Skip this if your tax consultant operates under their name"
              placeholder="Consultant Office"
              onChangeFunction={onChangeSaveValue}
              size="medium"
            />
            <InputField
              id="b_firstname"
              tooltipText=""
              placeholder="First Name"
              onChangeFunction={onChangeSaveValue}
              size="medium"
            />
            <InputField
              id="b_lastname"
              tooltipText=""
              placeholder="Last Name"
              onChangeFunction={onChangeSaveValue}
              size="medium"
            />
          </Grid>
          <Grid item xs={12} id="Tax Consultant-row-2" className={styles.gridContainer} style={{ display: "none" }}>
            <InputField
              id="b_strasse"
              tooltipText=""
              placeholder="Street"
              onChangeFunction={onChangeSaveValue}
              size="medium"
            />
            <InputField
              id="b_hausnummer"
              tooltipText=""
              placeholder="Nr"
              onChangeFunction={onChangeSaveValue}
              size="small"
            />
            <InputField
              id="b_adressergaenzung"
              tooltipText="Include this, if they are located in a rear or side building"
              placeholder="Add."
              onChangeFunction={onChangeSaveValue}
              size="small"
            />
            <InputField
              id="b_postleitzahl"
              tooltipText=""
              placeholder="Post Code"
              onChangeFunction={onChangeSaveValue}
              size="medium"
            />
            <InputField
              id="b_ort"
              tooltipText=""
              placeholder="City"
              onChangeFunction={onChangeSaveValue}
              size="medium"
            />
          </Grid>
          <Grid item xs={12} id="Tax Consultant-row-3" className={styles.gridContainer} style={{ display: "none" }}>
            <InputField
              id="b_tel_int_vorwahl"
              tooltipText=""
              placeholder="Country Code"
              onChangeFunction={onChangeSaveValue}
              size="small"
            />
            <InputField
              id="b_vorwahl_tel"
              tooltipText=""
              placeholder="Area- Code"
              onChangeFunction={onChangeSaveValue}
              size="small"
            />
            <InputField
              id="b_rufnummer_tel"
              tooltipText=""
              placeholder="Phone Number"
              onChangeFunction={onChangeSaveValue}
              size="medium"
            />
            <InputField
              id="b_e_mail"
              tooltipText=""
              placeholder="Email"
              onChangeFunction={onChangeSaveValue}
              size="medium"
            />
          </Grid>
          <Grid item xs={12}>
            <hr className={styles.seperator} />
          </Grid>
          <Grid item xs={12} className={styles.textContainer}>
            <h2 className={styles.subTitle}>Authorized Document Recipient</h2>
          </Grid>
          <Grid item xs={12} className={styles.textContainer}>
            <RadioField
              id="doc_recipient"
              radioFieldText="Are you recieving all your documents?"
              tooltipText='Typically you get all your documents. If someone else shall recieve them, authorize them here. This can be changed whenever you want. You will have to sign a seperate attached mandate'
              defaultValues={["me", "not me"]}
              placeholder={["Yes", "No"]}
              onChangeFunction={handleRadioForms}
            />
          </Grid>
          <Grid item xs={12} id="Authorized Document Recipient-row-1" className={styles.gridContainer} style={{ display: "none" }}>
            <InputField
              id="doc_firma"
              tooltipText="Enter this only if applicable"
              placeholder="Company Name"
              onChangeFunction={onChangeSaveValue}
              size="medium"
            />
            <InputField
              id="doc_firstname"
              tooltipText=""
              placeholder="First Name"
              onChangeFunction={onChangeSaveValue}
              size="medium"
            />
            <InputField
              id="doc_lastname"
              tooltipText=""
              placeholder="Last Name"
              onChangeFunction={onChangeSaveValue}
              size="medium"
            />
          </Grid>
          <Grid item xs={12} id="Authorized Document Recipient-row-2" className={styles.gridContainer} style={{ display: "none" }}>
            <InputField
              id="doc_strasse"
              tooltipText=""
              placeholder="Street"
              onChangeFunction={onChangeSaveValue}
              size="medium"
            />
            <InputField
              id="doc_hausnummer"
              tooltipText=""
              placeholder="Nr"
              onChangeFunction={onChangeSaveValue}
              size="small"
            />
            <InputField
              id="doc_adressergaenzung"
              tooltipText="Include this, if they are located in a rear or side building"
              placeholder="Add."
              onChangeFunction={onChangeSaveValue}
              size="small"
            />
            <InputField
              id="doc_postleitzahl"
              tooltipText=""
              placeholder="Post Code"
              onChangeFunction={onChangeSaveValue}
              size="medium"
            />
            <InputField
              id="doc_city"
              tooltipText=""
              placeholder="City"
              onChangeFunction={onChangeSaveValue}
              size="medium"
            />
          </Grid>
          <Grid item xs={12} id="Authorized Document Recipient-row-3" className={styles.gridContainer} style={{ display: "none" }}>
            <InputField
              id="doc_tel_int_vorwahl"
              tooltipText=""
              placeholder="Country Code"
              onChangeFunction={onChangeSaveValue}
              size="small"
            />
            <InputField
              id="doc_vorwahl_tel"
              tooltipText=""
              placeholder="Area- Code"
              onChangeFunction={onChangeSaveValue}
              size="small"
            />
            <InputField
              id="doc_rufnummer_tel"
              tooltipText=""
              placeholder="Phone Number"
              onChangeFunction={onChangeSaveValue}
              size="medium"
            />
            <InputField
              id="doc_e_mail"
              tooltipText=""
              placeholder="Email"
              onChangeFunction={onChangeSaveValue}
              size="medium"
            />
          </Grid>
          <Grid item xs={12}>
            <hr className={styles.seperator} />
          </Grid>
          <Grid item xs={12} className={styles.textContainer}>
            <h2 className={styles.subTitle}>Previous Residence</h2>
          </Grid>
          <Grid item xs={12} className={styles.textContainer}>
            <RadioField
              id="previous_residence"
              radioFieldText="Did you move in germany during the last 12 month?"
              tooltipText="This is is important for the tax office to know, so they can request your old records"
              defaultValues={["yes", "no"]}
              placeholder={["Yes", "No"]}
              onChangeFunction={handleRadioForms}
            />
          </Grid>
          <Grid item xs={12} id="Previous Residence-row-1" className={styles.gridContainer} style={{ display: "none" }}>
            <InputField
              id="migration_date"
              tooltipText="When did you move to your new home?"
              placeholder="Moving Date"
              onChangeFunction={onChangeSaveValue}
              size="medium"
            />
          </Grid>
          <Grid item xs={12} id="Previous Residence-row-2" className={styles.gridContainer} style={{ display: "none" }}>
            <InputField
              id="pre_strasse"
              tooltipText="Enter your old street name"
              placeholder="Street"
              onChangeFunction={onChangeSaveValue}
              size="medium"
            />
            <InputField
              id="pre_hausnummer"
              tooltipText="Enter your old street number"
              placeholder="Nr"
              onChangeFunction={onChangeSaveValue}
              size="small"
            />
            <InputField
              id="pre_adressergaenzung"
              tooltipText="Include this, if you lived in a rear or side building"
              placeholder="Add."
              onChangeFunction={onChangeSaveValue}
              size="small"
            />
            <InputField
              id="pre_postleitzahl"
              tooltipText=""
              placeholder="Post Code"
              onChangeFunction={onChangeSaveValue}
              size="medium"
            />
            <InputField
              id="pre_city"
              tooltipText="Enter the city you used to live in"
              placeholder="City"
              onChangeFunction={onChangeSaveValue}
              size="medium"
            />
          </Grid>
          <Grid item xs={12} className={styles.textContainer}>
            <RadioField
              id="old_tax_id"
              radioFieldText="Have you been registered for income tax in germany during the last 3 years?"
              tooltipText=""
              defaultValues={["yes", "no"]}
              placeholder={["Yes", "No"]}
              onChangeFunction={handleRadioForms}
            />
          </Grid>
          <Grid item xs={12} id="Previous Residence-row-4" className={styles.gridContainer} style={{ display: "none" }}>
            <InputField
              id="pre_finanzamt"
              tooltipText=""
              placeholder="Old Tax Office"
              onChangeFunction={onChangeSaveValue}
              size="medium"
            />
            <InputField
              id="pre_steuernummer"
              tooltipText=""
              placeholder="Old Tax ID"
              onChangeFunction={onChangeSaveValue}
              size="medium"
            />
          </Grid>
          <Grid item xs={12}>
            <hr className={styles.seperator} />
          </Grid>
          <Grid item xs={12} className={styles.textContainer}>
            <h2 className={styles.subTitle}>Business Address</h2>
          </Grid>
          <Grid item xs={12} className={styles.textContainer}>
            <RadioField
              id="dif_firm_address"
              radioFieldText="Where do you want to register your business?"
              tooltipText="Where do you want to register your business? All documents and letters will be send there. If your workplace is a studio or workshop, it might make sense to register your business at your home adress. Your doorbell and mailbox must be tagged with the name of your business. (This is obviously not necessary if you simply use your own name)"
              defaultValues={["home", "not home"]}
              placeholder={["Home", "Somewhere Else"]}
              onChangeFunction={handleRadioForms}
            />
          </Grid>
          <Grid item xs={12} id="Business Address-row-1" className={styles.gridContainer} style={{ display: "none" }}>
            <InputField
              id="firm_bezeichnung"
              tooltipText="If you use your are self-employed and use your own name enter it here. Otherwise enter the name of your company"
              placeholder="Company Name"
              onChangeFunction={onChangeSaveValue}
              size="medium"
            />
          </Grid>
          <Grid item xs={12} id="Business Address-row-2" className={styles.gridContainer} style={{ display: "none" }}>
            <InputField
              id="firm_strasse"
              tooltipText=""
              placeholder="Street"
              onChangeFunction={onChangeSaveValue}
              size="medium"
            />
            <InputField
              id="firm_hausnummer"
              tooltipText=""
              placeholder="Nr"
              onChangeFunction={onChangeSaveValue}
              size="small"
            />
            <InputField
              id="firm_adressergaenzung"
              tooltipText="Include this, if your business is in a rear or side building"
              placeholder="Add."
              onChangeFunction={onChangeSaveValue}
              size="small"
            />
            <InputField
              id="firm_postleitzahl"
              tooltipText=""
              placeholder="Post Code"
              onChangeFunction={onChangeSaveValue}
              size="medium"
            />
            <InputField
              id="firm_city"
              tooltipText=""
              placeholder="City"
              onChangeFunction={onChangeSaveValue}
              size="medium"
            />
          </Grid>
          <Grid item xs={12} id="Business Address-row-3" className={styles.gridContainer} style={{ display: "none" }}>
            <InputField
              id="firm_tel_int_vorwahl"
              tooltipText=""
              placeholder="Country Code"
              onChangeFunction={onChangeSaveValue}
              size="small"
            />
            <InputField
              id="firm_vorwahl_tel"
              tooltipText=""
              placeholder="Area- Code"
              onChangeFunction={onChangeSaveValue}
              size="small"
            />
            <InputField
              id="firm_rufnummer_tel"
              tooltipText="Enter the phone number of your business. (You can use your own, if you dont have an extra number)"
              placeholder="Phone Number"
              onChangeFunction={onChangeSaveValue}
              size="medium"
            />
          </Grid>
          <Grid item xs={12} id="Business Address-row-4" className={styles.gridContainer} style={{ display: "none" }}>
            <InputField
              id="firm_e_mail"
              tooltipText="Enter the email adress of your business"
              placeholder="Email"
              onChangeFunction={onChangeSaveValue}
              size="medium"
            />
            <InputField
              id="firm_website"
              tooltipText="Enter the website of your business. Leave this blank if you dont have any."
              placeholder="Website"
              onChangeFunction={onChangeSaveValue}
              size="medium"
            />

          </Grid>
          <Grid item xs={12}>
            <hr className={styles.seperator} />
          </Grid>
          <Grid item xs={12} className={styles.textContainer}>
            <h2 className={styles.subTitle}>Expected Income</h2>
          </Grid>
          <Grid item xs={12} className={styles.subTextContainer}>
            <p>Enter your expected income through various sources during the first two years of your business.
              <br/>All of these amounts shall include taxes. (If you dont use the "Small business rule")
              <br/>There is no direct consquence if these numbers dont hold up to reality,
              <br/>your finanzamt will simply ask you to change or explain some of the amounts if they seem unreasonable. 
              <br/>As a rule of thumb keep it at the reasonable lower end.
            </p>
          </Grid>
          <Grid item xs={12} className={styles.yearContainer}>
            <p>Year One</p>
          </Grid>
          <Grid item xs={12} className={styles.gridContainer}>
            <InputField
              id="u_betrag1"
              tooltipText='You can enter your self-employment income here only if your job counts as "Freiberufliche Tätigkeit", otherwise you enter it in "Business Revenue"'
              placeholder="Freelance Income"
              onChangeFunction={onChangeSaveValue}
              size="medium"
            />
            <InputField
              id="u_betrag2"
              tooltipText="Will you earn money during this time from employment?"
              placeholder="Salary"
              onChangeFunction={onChangeSaveValue}
              size="medium"
            />
            <InputField
              id="u_betrag3"
              tooltipText=""
              placeholder="Capital Gains"
              onChangeFunction={onChangeSaveValue}
              size="medium"
            />
            <InputField
              id="u_betrag9"
              tooltipText='If your job counts as "Freiberufliche Tätigkeit" enter it at "Freelance Income"'
              placeholder="Business Revenue"
              onChangeFunction={onChangeSaveValue}
              size="medium"
            />
          </Grid>
          <Grid item xs={12} className={styles.gridContainer}>
            <InputField
              id="u_betrag4"
              tooltipText="Do you recive child benefits, BaföG, scholarships or grants etc?"
              placeholder="Other Income"

              onChangeFunction={onChangeSaveValue}
              size="medium"
            />
            <InputField
              id="u_sonderausgaben1"
              tooltipText='Those could be insurance, professional liability etc...'
              placeholder="Special Expenses"
              onChangeFunction={onChangeSaveValue}
              size="medium"
            />
            <InputField
              id="u_steuerabzug1"
              tooltipText="List of tax deductions coming soon"
              placeholder="Tax Deductions"
              onChangeFunction={onChangeSaveValue}
              size="medium"
            />
            <InputField
              id="sum1"
              tooltipText="Add your Business Revenue to your Freelance Income"
              placeholder="Total Revenue"
              onChangeFunction={onChangeSaveValue}
              size="medium"
            />
          </Grid>
          <Grid item xs={12} className={styles.yearContainer}>
            <p>Year Two</p>
          </Grid>
          <Grid item xs={12} className={styles.gridContainer}>
            <InputField
              id="u_betrag5"
              tooltipText='You can enter your self-employment income here only if your job counts as "Freiberufliche Tätigkeit", otherwise you enter it in "Business Revenue"'
              placeholder="Freelance Income"
              onChangeFunction={onChangeSaveValue}
              size="medium"
            />
            <InputField
              id="u_betrag6"
              tooltipText="Will you earn money during this time from employment?"
              placeholder="Salary"
              onChangeFunction={onChangeSaveValue}
              size="medium"
            />
            <InputField
              id="u_betrag7"
              tooltipText=""
              placeholder="Capital Gains"

              onChangeFunction={onChangeSaveValue}
              size="medium"
            />
            <InputField
              id="u_betrag10"
              tooltipText='If your job counts as "Freiberufliche Tätigkeit" enter it at "Freelance Income"'
              placeholder="Business Revenue"
              onChangeFunction={onChangeSaveValue}
              size="medium"
            />
          </Grid>
          <Grid item xs={12} className={styles.gridContainer}>
            <InputField
              id="u_betrag8"
              tooltipText="Do you recive child benefits, BaföG, scholarships or grants etc?"
              placeholder="Other Income"
              onChangeFunction={onChangeSaveValue}
              size="medium"
            />
            <InputField
              id="u_sonderausgaben2"
              tooltipText='Those could be insurance, professional liability etc...'
              placeholder="Special Expenses"
              onChangeFunction={onChangeSaveValue}
              size="medium"
            />
            <InputField
              id="u_steuerabzug2"
              tooltipText="List of tax deductions coming soon"
              placeholder="Tax Deductions"
              onChangeFunction={onChangeSaveValue}
              size="medium"
            />
            <InputField
              id="sum2"
              tooltipText="Add your Business Revenue to your Freelance Income"
              placeholder="Total Revenue"
              onChangeFunction={onChangeSaveValue}
              size="medium"
            />
          </Grid>
          <Grid item xs={12}>
            <hr className={styles.seperator} />
          </Grid>
          <div id="Partner Expected Income-section" className={styles.gridContainer} style={{ display: "none" }}>
            <Grid item xs={12} className={styles.textContainer}>
              <h2 className={styles.subTitle}>Partner Expected Income</h2>
            </Grid>
            <Grid item xs={12} className={styles.subTextContainer}>
            <p>Enter the expected income of your partner during the first two years of your business.
              <br/>All of these amounts shall include taxes. (If you dont use the "Small business rule")
              <br/>There is no direct consquence if these numbers dont hold up to reality,
              <br/>your finanzamt will simply ask you to change or explain some of the amounts if they seem unreasonable. 
              <br/>As a rule of thumb keep it at the reasonable lower end.
            </p>
          </Grid>
            <Grid item xs={12} className={styles.yearContainer}>
              <p>Year One</p>
            </Grid>
            <Grid item xs={12} className={styles.gridContainer}>
              <InputField
                id="p_betrag1"
                tooltipText='You can enter their self-employment income here only if your job counts as "Freiberufliche Tätigkeit", otherwise you enter it in "Business Revenue"'
                placeholder="Freelance Income"
                onChangeFunction={onChangeSaveValue}
                size="medium"
              />
              <InputField
                id="p_betrag2"
                tooltipText="Will they earn money during this time from employment?"
                placeholder="Salary"
                onChangeFunction={onChangeSaveValue}
                size="medium"
              />
              <InputField
                id="p_betrag3"
                tooltipText=""
                placeholder="Capital Gains"
                onChangeFunction={onChangeSaveValue}
                size="medium"
              />
              <InputField
                id="p_betrag9"
                tooltipText='If their job counts as "Freiberufliche Tätigkeit" enter it at "Freelance Income"'
                placeholder="Business Revenue"
                onChangeFunction={onChangeSaveValue}
                size="medium"
              />
            </Grid>
            <Grid item xs={12} className={styles.gridContainer}>
              <InputField
                id="p_betrag4"
                tooltipText="Do they recive child benefits, BaföG, scholarships or grants etc?"
                placeholder="Other Income"

                onChangeFunction={onChangeSaveValue}
                size="medium"
              />
              <InputField
                id="p_sonderausgaben1"
                tooltipText='Those could be insurance, professional liability etc...'
                placeholder="Special Expenses"

                onChangeFunction={onChangeSaveValue}
                size="medium"
              />
              <InputField
                id="p_steuerabzug1"
                tooltipText="List of tax deductions coming soon"
                placeholder="Tax Deductions"
                onChangeFunction={onChangeSaveValue}
                size="medium"
              />
            </Grid>
            <Grid item xs={12} className={styles.yearContainer}>
              <p>Year Two</p>
            </Grid>
            <Grid item xs={12} className={styles.gridContainer}>
              <InputField
                id="p_betrag5"
                tooltipText='You can enter their self-employment income here only if your job counts as "Freiberufliche Tätigkeit", otherwise you enter it in "Business Revenue"'
                placeholder="Freelance Income"

                onChangeFunction={onChangeSaveValue}
                size="medium"
              />
              <InputField
                id="p_betrag6"
                tooltipText="Will they earn money during this time from employment?"
                placeholder="Salary"

                onChangeFunction={onChangeSaveValue}
                size="medium"
              />
              <InputField
                id="p_betrag7"
                tooltipText=""
                placeholder="Capital Gains"

                onChangeFunction={onChangeSaveValue}
                size="medium"
              />
              <InputField
                id="p_betrag10"
                tooltipText='If their job counts as "Freiberufliche Tätigkeit" enter it at "Freelance Income"'
                placeholder="Business Revenue"
                onChangeFunction={onChangeSaveValue}
                size="medium"
              />
            </Grid>
            <Grid item xs={12} className={styles.gridContainer}>
              <InputField
                id="p_betrag8"
                tooltipText="Do they recive child benefits, BaföG, scholarships or grants etc?"
                placeholder="Other Income"

                onChangeFunction={onChangeSaveValue}
                size="medium"
              />
              <InputField
                id="p_sonderausgaben2"
                tooltipText='Those could be insurance, professional liability etc...'
                placeholder="Special Expenses"

                onChangeFunction={onChangeSaveValue}
                size="medium"
              />
              <InputField
                id="p_steuerabzug2"
                tooltipText="List of tax deductions coming soon"
                placeholder="Tax Deductions"
                onChangeFunction={onChangeSaveValue}
                size="medium"
              />
            </Grid>
            <Grid item xs={12}>
              <hr className={styles.seperator} />
            </Grid>
          </div>
          <Grid item xs={12} className={styles.textContainer}>
            <h2 className={styles.subTitle}>Previous Business</h2>
          </Grid>
          <Grid item xs={12} className={styles.textContainer}>
            <RadioField
              id="old_business"
              radioFieldText="Did you have a business in Germany in the last 5 years?"
              tooltipText="Have you had a business or/and worked self-employed in germany during the past five years?"
              defaultValues={["yes", "no"]}
              placeholder={["Yes", "No"]}
              onChangeFunction={handleRadioForms}
            />
          </Grid>
          <Grid item xs={12} id="Previous Business-row-1" className={styles.gridContainer} style={{ display: "none" }}>
            <InputField
              id="old_business_name"
              tooltipText="What was the name of your old business? Leave this out if you were simply self-employed"
              placeholder="Old Business"
              onChangeFunction={onChangeSaveValue}
              size="medium"
            />
            <InputField
              id="old_business_city"
              tooltipText="Where did you worked / Where was your business?"
              placeholder="City"
              onChangeFunction={onChangeSaveValue}
              size="medium"
            />
            <InputField
              id="old_business_start_date"
              tooltipText="When did you start it?"
              placeholder="Start Date"
              onChangeFunction={onChangeSaveValue}
              size="medium"
            />
            <InputField
              id="old_business_end_date"
              tooltipText="When did it end?"
              placeholder="End Date"
              onChangeFunction={onChangeSaveValue}
              size="medium"
            />
          </Grid>
          <Grid item xs={12} id="Previous Business-row-2" className={styles.gridContainer} style={{ display: "none" }}>
            <InputField
              id="old_business_finanzamt"
              tooltipText="At which tax office where you registered?"
              placeholder="Finanzamt"
              onChangeFunction={onChangeSaveValue}
              size="medium"
            />
            <InputField
              id="old_business_tax_id"
              tooltipText="What was your old tax id?"
              placeholder="Tax Id"
              onChangeFunction={onChangeSaveValue}
              size="medium"
            />
            <InputField
              id="old_business_ustid"
              tooltipText="What was your old sales tax id? (Umsatzsteuer-Identifikationsnummer)"
              placeholder="Ustid"
              onChangeFunction={onChangeSaveValue}
              size="medium"
            />
          </Grid>
          <Grid item xs={12}>
            <hr className={styles.seperator} />
          </Grid>
          <Grid item xs={12} className={styles.textContainer}>
            <h2 className={styles.subTitle}>Handelsregister</h2>
          </Grid>
          <Grid item xs={12} className={styles.textContainer}>
            <RadioField
              id="handelsregister"
              radioFieldText="Is your business registered at the Handelsregister?"
              tooltipText="..."
              defaultValues={["yes", "no"]}
              placeholder={["Yes", "No"]}
              onChangeFunction={handleRadioForms}
            />
          </Grid>
          <Grid item xs={12} id="Handelsregister-row-1" className={styles.gridContainer} style={{ display: "none" }}>
            <InputField
              id="handelsregister_date"
              tooltipText="Since when is your business registered"
              placeholder="Date"
              onChangeFunction={onChangeSaveValue}
              size="medium"
            />
            <InputField
              id="handelsregister_city1"
              tooltipText="In which city is your business registered?"
              placeholder="City"
              onChangeFunction={onChangeSaveValue}
              size="medium"
            />
            <InputField
              id="registry_number1"
              tooltipText="What is your registry number?"
              placeholder="Registry Number"
              onChangeFunction={onChangeSaveValue}
              size="medium"
            />
          </Grid>
          <Grid item xs={12} id="Handelsregister-row-2" className={styles.textContainer} style={{ display: "none" }}>
            <RadioField
              id="handelsregister_application_done"
              radioFieldText="Did you submit your application?"
              tooltipText="Did you submit your application to a local court?"
              defaultValues={["yes", "no"]}
              placeholder={["Yes", "Not Yet"]}
              onChangeFunction={handleRadioForms}
            />
          </Grid>
          <Grid item xs={12} id="Handelsregister-row-3" className={styles.gridContainer} style={{ display: "none" }}>
            <InputField
              id="registration_done_date"
              tooltipText="When did you submit your application?"
              placeholder="Date"
              onChangeFunction={onChangeSaveValue}
              size="medium"
            />
            <InputField
              id="handelsregister_city2"
              tooltipText="In which city is did you submit it?"
              placeholder="City"
              onChangeFunction={onChangeSaveValue}
              size="medium"
            />
            <InputField
              id="registry_number2"
              tooltipText=""
              placeholder="Registry Number"
              onChangeFunction={onChangeSaveValue}
              size="medium"
            />
          </Grid>
          <Grid item xs={12}>
            <hr className={styles.seperator} />
          </Grid>
          <Grid item xs={12} className={styles.textContainer}>
            <h2 className={styles.subTitle}>Kleinunternehmer-Regelung</h2>
          </Grid>
          <Grid item xs={12} className={styles.subTextContainer}>
            <p>If your total revenue (Umsatz) is lower than 19.000€ you may decide to use the Kleinunternehmer-Regel
            (Small Business Rule).
            <br />This means you dont have to pay any VAT (Umsatzsteuer).
            <br /><b>In this case you cannot add VAT to your receivables.</b>
            <br />If you click 'No' you simply pay VAT and add it to your receivables.</p>
          </Grid>
          <Grid item xs={12} className={styles.textContainer}>
            <RadioField
              id="small_business"
              radioFieldText="Do you want to use the Kleinunternehmer-Regelung?"
              tooltipText=""
              defaultValues={["yes", "no"]}
              placeholder={["Yes", "No"]}
              onChangeFunction={handleRadioForms}
            />
          </Grid>
          <Grid item xs={12}>
            <hr className={styles.seperator} />
          </Grid>
          <Grid item xs={12} className={styles.textContainer}>
            <h2 className={styles.subTitle}>Unique Tax Rules</h2>
          </Grid>
          <Grid item xs={12} className={styles.textContainer}>
            <InputField
              id="steuerbefreiung"
              tooltipText="..."
              placeholder="Tax Exemption"
              onChangeFunction={onChangeSaveValue}
              size="medium"
            />
            <InputField
              id="steuerbefreiung_art"
              tooltipText="Enter the article/paragraph number where your tax exemption is listed"
              placeholder="Article"
              onChangeFunction={onChangeSaveValue}
              size="medium"
            />
          </Grid>
          <Grid item xs={12}>
            <hr className={styles.seperator} />
          </Grid>
          <Grid item xs={12} className={styles.textContainer}>
            <h2 className={styles.subTitle}>Last Page</h2>
          </Grid>
          <Grid item xs={12} className={styles.textContainer}>
            <InputField
              id="city and date"
              tooltipText="Enter the your current city and todays date"
              placeholder="City,  DD/MM/YYYY"
              onChangeFunction={onChangeSaveValue}
              size="medium"
            />
          </Grid>
          <Grid item xs={12}>
            <hr className={styles.seperator} />
          </Grid>
        </MuiThemeProvider>
      </Grid>
      <div style={{ textAlign: "center" }}>{Button("Done", sendAll)}</div>
    </div>
  )
};


export default FormSteuerlicheErfassung;