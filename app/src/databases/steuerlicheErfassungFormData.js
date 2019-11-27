import React from "react";

export const steuerlicheErfassungFormData = [
  {
    title: "Personal Informations", display: "block", inputFields: [
      [{ name: "u_firstname", tooltip: <span className="tooltipText">If you have a middle name add it here.</span>, top: 5.5, defaultValue: null, placeholder: "First Name", type: null, size: "medium", margin: "medium" },
      { name: "u_lastname", tooltip: <span className="tooltipText"></span>, top: 5, defaultValue: null, placeholder: "Last Name", type: null, size: "medium", margin: "medium" },
      {
        name: "u_birth_name", tooltip: <span className="tooltipText">You need to fill this only if your maiden name is different to your current last name.</span>, top: 5, defaultValue: null, placeholder: "Maiden Name", type: null,
        size: "medium", margin: "medium"
      },
      { name: "u_birthday", tooltip: <span className="tooltipText">Enter the date in the following format: DD/MM/YYYY.</span>, top: 5, defaultValue: null, placeholder: "Birthday", type: null, size: "medium", margin: "medium" },],
      [{ name: "u_strasse", tooltip: <span className="tooltipText">Enter the street you live in.</span>, top: 12, defaultValue: null, placeholder: "Street", type: null, size: "medium", margin: "medium" },
      { name: "u_hausnummer", tooltip: <span className="tooltipText">Enter your street number.</span>, top: 12, defaultValue: null, placeholder: "Nr", type: null, size: "small", margin: "small" },
      { name: "u_hausnummer_zusatz", tooltip: <span className="tooltipText">Include this, if you live in a rear or side building.</span>, top: 12, defaultValue: null, placeholder: "Addition", type: null, size: "small", margin: "medium" },
      { name: "u_postleitzahl", tooltip: <span className="tooltipText">Enter your Post Code / Zip Code.</span>, top: 12, defaultValue: null, placeholder: "Post Code", type: null, size: "medium", margin: "medium" },
      { name: "u_city", tooltip: <span className="tooltipText"></span>, top: 12, defaultValue: null, placeholder: "City", type: null, size: "medium", margin: "medium" },],
      [{ name: "tel_int_vorwahl", tooltip: <span className="tooltipText">The first part of your number: <br />[+49] 17675242879<br />[0] 17675242879</span>, top: 15.5, defaultValue: null, placeholder: "Country Code", type: null, size: "small", margin: "small" },
      { name: "vorwahl_tel", tooltip: <span className="tooltipText">The second part of your number: <br />+49 [176] 75242879<br />0 [176] 75242879</span>, top: 13, defaultValue: null, placeholder: "Area Code", type: null, size: "small", margin: "medium" },
      { name: "rufnummer_tel", tooltip: <span className="tooltipText">The third part of your number: <br />+49176 [75242879]<br />0176 [75242879]</span>, top: 13, defaultValue: null, placeholder: "Phone Number", type: null, size: "medium", margin: "medium" },
      { name: "e_mail", tooltip: <span className="tooltipText">Use your business relevant email adress.</span>, top: 13, defaultValue: null, placeholder: "Email", type: null, size: "medium", margin: "medium" },
      { name: "website", tooltip: <span className="tooltipText">Use the website for you corresponding business.</span>, top: 13, defaultValue: null, placeholder: "Website", type: null, size: "medium", margin: "medium" },],
      [{ name: "u_current_job", tooltip: <span className="tooltipText">If you have more than one Job, choose the one where you earn the most.</span>, top: 18, defaultValue: null, placeholder: "Job Title/Job Description", type: null, size: "large", margin: "medium" },
      { name: "u_id", tooltip: <span className="tooltipText">You got your "Identifikationsnummer" with your "Anmeldung".<br />If you are not sure where to find it click here...</span>, top: 17, defaultValue: null, placeholder: "Identification-Number", type: null, size: "large", margin: "medium" },],
      [{
        name: "u_reli", text: "Do you have to pay church tax?", tooltip: <span className="tooltipText">Church tax is added to your regular tax and send directly to your church.</span>, top: 24,
        defaultValue: ["EV", "RK", "VD"], placeholder: ["Evangelic", "Roman Catholic", "No Christian Church Tax"], type: "radio", size: "medium", margin: "medium"
      },],
    ]
  },

  {
    title: "Your Tax Office", display: "block", inputFields: [
      [{
        name: "finanzamt", tooltip: <span className="tooltipText">The name of your tax office is based on your district.
  <br /> If follows this pattern "Finanzamt" + Area. <br />If you live in Mitte your Finanzamt would be called: "Finanzamt Mitte".
  </span>, top: 0, defaultValue: null, placeholder: "Tax Office", type: null, size: "large", margin: "medium"
      },
      { name: "u_tax_id", tooltip: <span className="tooltipText">Enter if you have one already, otherwise leave this blank.</span>, top: 4.5, defaultValue: null, placeholder: "Tax ID", type: null, size: "large", margin: "medium" }],
    ]
  },

  {
    title: "Your Partner", display: "block", inputFields: [
      [{ name: "married", text: "Are you married?", tooltip: <span className="tooltipText"></span>, top: 3.5, defaultValue: ["yes", "no"], placeholder: ["Yes", "No"], type: "radio", size: "medium", margin: "medium" }],
      ["invisible", { name: "marriage_date", tooltip: <span className="tooltipText">Enter the date in the following format: DD/MM/YYYY.</span>, top: 12, defaultValue: null, placeholder: "Marriage Date", type: null, size: "medium", margin: "medium" },],
      ["invisible", { name: "p_firstname", tooltip: <span className="tooltipText">If they have a middle name add it here.</span>, top: 14, defaultValue: null, placeholder: "First Name", type: null, size: "medium", margin: "medium" },
        { name: "p_lastname", tooltip: <span className="tooltipText"></span>, top: 12.5, defaultValue: null, placeholder: "Last Name", type: null, size: "medium", margin: "medium" },
        { name: "p_birth_name", tooltip: <span className="tooltipText">You need to fill this if your partners maiden name is different to their current last name.</span>, top: 13.5, defaultValue: null, placeholder: "Maiden Name", type:
          null, size: "medium", margin: "medium"},
        { name: "p_birthday", tooltip: <span className="tooltipText">Enter the date in the following format: DD/MM/YYYY.</span>, top: 14, defaultValue: null, placeholder: "Birthday", type: null, size: "medium", margin: "medium" },],
      ["invisible", {
        name: "p_current_job", tooltip: <span className="tooltipText">If they have more than one Job, choose the one where they earn the most.</span>,
        top: 17.5, defaultValue: null, placeholder: "Job Title/ Job Description", type: null, size: "large", margin: "medium"},
        { name: "p_id", tooltip: <span className="tooltipText">Only if they have a german Tax Id or had one before.</span>, top: 18.5, defaultValue: null, placeholder: "Identification-Number", type: null, size: "large", margin: "medium" },],
      ["invisible", {
        name: "p_reli", text: "Do they have to pay church tax?", tooltip: <span className="tooltipText">Church tax is added to their regular tax and send directly to their church.</span>, top: 22.5,
        defaultValue: ["EV", "RK", "VD"], placeholder: ["Evangelic", "Roman Catholic", "No Christian Church Tax"], type: "radio", size: "medium", margin: "medium"},],
      ["invisible", { name: "live_together", text: "Do you live together?", tooltip: <span className="tooltipText"></span>, top: 26.5, defaultValue: ["yes", "no"], placeholder: ["Yes", "No"], type: "radio", size: "medium", margin: "medium" },],
      ["invisible", { name: "p_strasse", tooltip: <span className="tooltipText">Enter the street they live in.</span>, top: 32.5, defaultValue: null, placeholder: "Street", type: null, size: "medium", margin: "small" },
        { name: "p_hausnummer", tooltip: <span className="tooltipText">Enter their street number.</span>, top: 32.5, defaultValue: null, placeholder: "Nr", type: null, size: "small", margin: "small" },
        { name: "p_hausnummer_zusatz", tooltip: <span className="tooltipText">Include this, if they live in a rear or side building.</span>, top: 32.5, defaultValue: null, placeholder: "Addon", type: null, size: "small", margin: "medium" },
        { name: "p_postleitzahl", tooltip: <span className="tooltipText">What is their post code?</span>, top: 32.5, defaultValue: null, placeholder: "Post Code", type: null, size: "medium", margin: "medium" },
        { name: "p_city", tooltip: <span className="tooltipText">In which city do they live?</span>, top: 32.5, defaultValue: null, placeholder: "City", type: null, size: "medium", margin: "small" },],

      [{ name: "old_marriage", text: "Have you been married before?", tooltip: <span className="tooltipText"></span>, top: 28.5, defaultValue: ["yes", "no"], placeholder: ["Yes", "No"], type: "radio", size: "medium", margin: "medium" },],
      ["invisible", { name: "widow_date", tooltip: <span className="tooltipText"></span>, top: 28.5, defaultValue: null, placeholder: "Widow Date", type: null, size: "medium", margin: "medium" },
        { name: "divorce_date", tooltip: <span className="tooltipText"></span>, top: 28.5, defaultValue: null, placeholder: "Divorce Date", type: null, size: "medium", margin: "medium" },
        { name: "seperate_date", tooltip: <span className="tooltipText"></span>, top: 28.5, defaultValue: null, placeholder: "Seperation Date", type: null, size: "medium", margin: "medium" },],
    ]
  },

  {
    title: "Your new Profession", display: "block", inputFields: [
      [{
        name: "art_taetigkeit", tooltip: <span className="tooltipText">Describe your Job, Job title and the industry you are working in. Enter as much as you want.
  <br /><br />e.g. If you have a website and make money through ads and affiliate-marketing you could write: "Managment of a website with income through advertisment and affiliate-marketing"
  <br /><br />Tip: <br />It helps to be broad in the description as you can claim more expenses.</span>, top: 0, defaultValue: null, placeholder: "Freelance Job Description", type: null, size: "large", margin: "medium"
      },
      { name: "work_date", tooltip: <span className="tooltipText">You can backdate this by up to 3 months to include preparation costs.<br /><br />Enter the date in the following format: DD/MM/YYYY</span>, top: 2, defaultValue: null, placeholder: "Start of Occupation", type: null, size: "medium", margin: "medium" },],
    ]
  },

  {
    title: "Your Bank Account", display: "block", inputFields: [
      [{
        name: "iban_de", tooltip: <span className="tooltipText">It is advised to use a business account here.
  <br />It is possible to use your private bank account for business but this brings only more stress as you have to be very careful which expenses you claim.
                  Plus if the tax office has to check your finances they will go through every single personal expense.
  <br />For your own sake please dont do it, use a seperate account for your business.</span>, top: 0, defaultValue: null, placeholder: "IBAN", type: null, size: "medium", margin: "medium"
      },
      { name: "iban_int", tooltip: <span className="tooltipText">Enter this only if you dont have a german bank account for your business.</span>, top: 4.5, defaultValue: null, placeholder: "IBAN International", type: null, size: "medium", margin: "medium" },
      { name: "bic", xtooltip: <span className="tooltipText"></span>, top: 4.5, defaultValue: null, placeholder: "BIC", type: null, size: "medium", margin: "medium" },
      { name: "holder", tooltip: <span className="tooltipText">Simply your first-, middle- and last name.</span>, top: 4.5, defaultValue: null, placeholder: "Holder Name", type: null, size: "medium", margin: "medium" },],
    ]
  },

  {
    title: "SEPA", display: "block", inputFields: [
      [{
        name: "SEPA", text: "Do you want to use a SEPA-Mandate?", tooltip: <span className="tooltipText">A SEPA-Mandate allows the tax office to automatically collect your taxes. Otherwise you have to transfer your taxes manually every month.
    <br /><br />A SEPA-Mandate is easier and a good option if your account is always covered. It always comes on a fixed date but if you cant pay it you have to pay extra penalties. Dont sign this if you want more flexibility about the timing of your payments or if your account is not covered through out the whole month.
    <br /><b>You will have to sign a seperate attached mandate.</b></span>, top: 0, defaultValue: ["yes", "no"], placeholder: ["Yes", "No"], type: "radio", size: "medium", margin: "medium"
      },
      { name: "sepa_x", tooltip: <span className="tooltipText">null</span>, top: 3.5, defaultValue: "x", placeholder: null, type: null, size: null, margin: null },],
    ]
  },

  {
    title: "Tax Consultant", display: "block", inputFields: [
      [{ name: "tax_consultant", text: "Do you have a Tax Consultant?", tooltip: <span className="tooltipText"></span>, top: 5, defaultValue: ["yes", "no"], placeholder: ["Yes", "No"], type: "radio", size: "medium", margin: "medium" },
      { name: "tax_consultant_yes", tooltip: <span className="tooltipText">null</span>, top: 3.5, defaultValue: "x", placeholder: null, type: null, size: null, margin: null },
      { name: "tax_consultant_no", tooltip: <span className="tooltipText">null</span>, top: 3.5, defaultValue: "x", placeholder: null, type: null, size: null, margin: null },],

      ["invisible", { name: "steuerberater", tooltip: <span className="tooltipText">Enter the name of your tax consultancy. Skip this if they operate udner their name.</span>, top: 12, defaultValue: null, placeholder: "Consultant Office", type: null, size: "medium", margin: "medium" },
      { name: "b_firstname", tooltip: <span className="tooltipText">Enter the first name of your personal tax consultant.</span>, top: 12, defaultValue: null, placeholder: "First Name", type: null, size: "medium", margin: "medium" },
      { name: "b_lastname", tooltip: <span className="tooltipText">Enter the last name of your personal tax consultant.</span>, top: 12, defaultValue: null, placeholder: "Last Name", type: null, size: "medium", margin: "medium" },],
      ["invisible", { name: "b_strasse", tooltip: <span className="tooltipText">Where is your tax consultant located?</span>, top: 13.5, defaultValue: null, placeholder: "Street", type: null, size: "medium", margin: "medium" },
        { name: "b_hausnummer", tooltip: <span className="tooltipText">Where is your tax consultant located?</span>, top: 13.5, defaultValue: null, placeholder: "Nr", type: null, size: "small", margin: "small" },
        { name: "b_adressergaenzung", tooltip: <span className="tooltipText">Include this, if they are located in a rear or side building.</span>, top: 13.5, defaultValue: null, placeholder: "Addon", type: null, size: "small", margin: "medium" },
        { name: "b_postleitzahl", tooltip: <span className="tooltipText">Where is your tax consultant located?</span>, top: 13.5, defaultValue: null, placeholder: "Post Code", type: null, size: "medium", margin: "medium" },
        { name: "b_ort", tooltip: <span className="tooltipText">Where is your tax consultant located?</span>, top: 13.5, defaultValue: null, placeholder: "City", type: null, size: "medium", margin: "small" },],
      ["invisible", { name: "b_tel_int_vorwahl", tooltip: <span className="tooltipText">What is their phone number?</span>, top: 18.5, defaultValue: null, placeholder: "Country Code", type: null, size: "small", margin: "small" },
        { name: "b_vorwahl_tel", tooltip: <span className="tooltipText">What is their phone number?</span>, top: 18.5, defaultValue: null, placeholder: "Area Code", type: null, size: "small", margin: "medium" },
        { name: "b_rufnummer_tel", tooltip: <span className="tooltipText">What is their phone number?</span>, top: 18.5, defaultValue: null, placeholder: "Phone Number", type: null, size: "medium", margin: "medium" },
        { name: "b_e_mail", tooltip: <span className="tooltipText">What is their email adress?</span>, top: 18.5, defaultValue: null, placeholder: "Email", type: null, size: "medium", margin: "medium" },],

    ]
  },
  {
    title: "Authorized Document Recipient", display: "block", inputFields: [
      [{
        name: "doc_recipient", text: "Are you recieving all your documents?", tooltip:
          <span className="tooltipText">Typically you get all your documents. If someone else shall recieve them, authorize them here.<br />This can be changed whenever you want.<br /><b>You will have to sign a seperate attached mandate.</b> </span>,
        top: 0, defaultValue: ["me", "not me"], placeholder: ["Yes", "No"], type: "radio", size: "medium", margin: "medium"
      },
      { name: "vollmacht_x", tooltip: <span className="tooltipText">null</span>, top: 3.5, defaultValue: "x", placeholder: null, type: null, size: null, margin: null },
      { name: "vollmacht_attached", tooltip: <span className="tooltipText">null</span>, top: 3.5, defaultValue: "x", placeholder: null, type: null, size: null, margin: null },],
      ["invisible", { name: "doc_firma", tooltip: <span className="tooltipText">Enter this only if applicable.</span>, top: 12, defaultValue: null, placeholder: "Company Name", type: null, size: "medium", margin: "medium" },
        { name: "doc_firstname", tooltip: <span className="tooltipText">Enter the first name of your authorized document recipient.</span>, top: 12, defaultValue: null, placeholder: "First Name", type: null, size: "medium", margin: "medium" },
        { name: "doc_lastname", tooltip: <span className="tooltipText">Enter the last name of your authorized document recipient.</span>, top: 12, defaultValue: null, placeholder: "Last Name", type: null, size: "medium", margin: "medium" },],
      ["invisible", { name: "doc_strasse", tooltip: <span className="tooltipText">Where is your authorized document recipient located?</span>, top: 13.5, defaultValue: null, placeholder: "Street", type: null, size: "medium", margin: "medium" },
        { name: "doc_hausnummer", tooltip: <span className="tooltipText">Where is your authorized document recipient located?</span>, top: 13.5, defaultValue: null, placeholder: "Nr", type: null, size: "small", margin: "small" },
        { name: "doc_adressergaenzung", tooltip: <span className="tooltipText">Include this, if they are located in a rear or side building.</span>, top: 13.5, defaultValue: null, placeholder: "Addon", type: null, size: "small", margin: "medium" },
        { name: "doc_postleitzahl", tooltip: <span className="tooltipText">Where is your authorized document recipient located?</span>, top: 13.5, defaultValue: null, placeholder: "Post Code", type: null, size: "medium", margin: "medium" },
        { name: "doc_city", tooltip: <span className="tooltipText">Where is your authorized document recipient located?</span>, top: 13.5, defaultValue: null, placeholder: "City", type: null, size: "medium", margin: "small" },],
      ["invisible", { name: "doc_tel_int_vorwahl", tooltip: <span className="tooltipText">What is their phone number?</span>, top: 18.5, defaultValue: null, placeholder: "Country Code", type: null, size: "small", margin: "small" },
        { name: "doc_vorwahl_tel", tooltip: <span className="tooltipText">What is their phone number?</span>, top: 18.5, defaultValue: null, placeholder: "Area Code", type: null, size: "small", margin: "medium" },
        { name: "doc_rufnummer_tel", tooltip: <span className="tooltipText">What is their phone number?</span>, top: 18.5, defaultValue: null, placeholder: "Phone Number", type: null, size: "medium", margin: "medium" },
        { name: "doc_e_mail", tooltip: <span className="tooltipText">What is their email adress?</span>, top: 18.5, defaultValue: null, placeholder: "Email", type: null, size: "medium", margin: "medium" },],
    ]
  },

  {
    title: "Previous Residence", display: "block", inputFields: [
      [{name:"previous_residence",text: "Did you move in germany during the last 12 month?", 
      tooltip:<span className="tooltipText">This is is important for the tax office to know. If you have moved, you were registered at another tax office before, 
      so they can request your old data.</span>, top: 3.5, defaultValue: ["yes", "no"], placeholder: ["Yes", "No"], type: "radio", size: "medium", margin: "medium" }],
      ["invisible",{ name: "migration_date", tooltip: <span className="tooltipText">When did you move to your new home?<br />Enter the date in the following format: DD/MM/YYYY</span>, 
      top: 12, defaultValue: null, placeholder: "Moving Date", type: null, size: "medium", margin: "medium" },],

      ["invisible",{ name: "pre_strasse", tooltip: <span className="tooltipText">Enter the street you used to live in.</span>, top: 13.5, defaultValue: null, placeholder: "Street", type: null, size: "medium", margin: "small" },
      { name: "pre_hausnummer", tooltip: <span className="tooltipText">Enter your old street number.</span>, top: 13.5, defaultValue: null, placeholder: "Nr", type: null, size: "small", margin: "medium" },
      { name: "pre_adressergaenzung", tooltip: <span className="tooltipText">Include this, if you lived in a rear or side building.</span>, top: 13.5, defaultValue: null, placeholder: "Addon", type: null, size: "small", margin: "medium" },
      { name: "pre_postleitzahl", tooltip: <span className="tooltipText">Enter your old post code.</span>, top: 13.5, defaultValue: null, placeholder: "Post Code", type: null, size: "medium", margin: "medium" },
      { name: "pre_city", tooltip: <span className="tooltipText">Enter the city you used to live in.</span>, top: 13.5, defaultValue: null, placeholder: "City", type: null, size: "medium", margin: "small" },],

      [{ name: "old_tax_id", text: "Have you been registered for income tax in germany during the last 3 years?", tooltip: <span className="tooltipText"></span>, 
      top: 13.5, defaultValue: ["yes", "no"], placeholder: ["Yes", "No"], type: "radio", size: "medium", margin: "medium" },
      { name: "old_tax_yes", tooltip: <span className="tooltipText"></span>, top: 18.5, defaultValue: "x", placeholder: null, type: null, size: null, margin: null },
      { name: "old_tax_no", tooltip: <span className="tooltipText"></span>, top: 18.5, defaultValue: "x", placeholder: null, type: null, size: null, margin: null },],
      ["invisible",{ name: "pre_finanzamt", tooltip: <span className="tooltipText"></span>, top: 13.5, defaultValue: null, placeholder: "Old Tax Office", type: null, size: "large", margin: "medium" },
      { name: "pre_steuernummer", tooltip: <span className="tooltipText"></span>, top: 13.5, defaultValue: null, placeholder: "Old Tax ID", type: null, size: "large", margin: "medium" },],

    ]
  },

  {
    title: "Business Adress", display: "block", inputFields: [
      [{
        name: "dif_firm_address", text: "Where do you want to register your business?", tooltip:
          <span className="tooltipText">Where do you want to register your business? <br />All documents and letters will be send there.
  <br />If your workplace is a studio or workshop, it might make sense to register your business at your home adress.<br /><b>Your doorbell and mailbox must be tagged with the name of your business.</b><br />
            (This is obviously not necessary if you simply use your own name)</span>,
        top: 0, defaultValue: ["home", "not home"], placeholder: ["Home", "Somewhere Else"], type: "radio", size: "medium", margin: "medium"
      }],

      ["invisible", { name: "firm_bezeichnung", tooltip: <span className="tooltipText">If you use your are self-employed and use your own name enter it here. Otherwise enter the name of your company. </span>, 
      top: 8.5, defaultValue: null, placeholder: "Company Name", type: null, size: "medium", margin: "medium" },],
      ["invisible", { name: "firm_strasse", tooltip: <span className="tooltipText">Enter the adress on which your business will be registered.</span>, top: 13.5, defaultValue: null, placeholder: "Street", type: null, size: "medium", margin: "medium" },
        { name: "firm_hausnummer", tooltip: <span className="tooltipText">Enter the adress on which your business will be registered.</span>, top: 13.5, defaultValue: null, placeholder: "Nr", type: null, size: "small", margin: "small" },
        { name: "firm_adressergaenzung", tooltip: <span className="tooltipText">Include this, if your business is in a rear or side building.</span>, top: 13.5, defaultValue: null, placeholder: "Addon", type: null, size: "small", margin: "medium" },
        { name: "firm_postleitzahl", tooltip: <span className="tooltipText">Enter the adress on which your business will be registered.</span>, top: 13.5, defaultValue: null, placeholder: "Post Code", type: null, size: "medium", margin: "medium" },
        { name: "firm_city", tooltip: <span className="tooltipText">Enter the adress on which your business will be registered.</span>, top: 13.5, defaultValue: null, placeholder: "City", type: null, size: "medium", margin: "small" },],
      ["invisible", { name: "firm_tel_int_vorwahl", tooltip: <span className="tooltipText">Enter the phone number of your business. (You can use your own, if you dont have an extra number).</span>, top: 18, defaultValue: null, placeholder: "Country Code", type: null, size: "small", margin: "small" },
        { name: "firm_vorwahl_tel", tooltip: <span className="tooltipText">Enter the phone number of your business. (You can use your own, if you dont have an extra number).</span>, top: 18, defaultValue: null, placeholder: "Area Code", type: null, size: "small", margin: "medium" },
        { name: "firm_rufnummer_tel", tooltip: <span className="tooltipText">Enter the phone number of your business. (You can use your own, if you dont have an extra number).</span>, top: 18, defaultValue: null, placeholder: "Phone Number", type: null, size: "medium", margin: "small" },],
      ["invisible", { name: "firm_e_mail", tooltip: <span className="tooltipText">Enter the email adress of your business.</span>, top: 23.5, defaultValue: null, placeholder: "Email", type: null, size: "medium", margin: "medium" },
        { name: "firm_website", tooltip: <span className="tooltipText">Enter the website of your business. Leave this blank if you dont have any.</span>, top: 23.5, defaultValue: null, placeholder: "Website", type: null, size: "medium", margin: "medium" },],

    ]
  },

  {
    title: "Expected Income", display: "block", inputFields: [
      [{ type: "text", text: "First Year" }],
      [{
        name: "u_betrag1", tooltip: <span className="tooltipText">Enter your expected income through self-employment for the first year of your business.
  <br />All of these numbers should estimates.<br /><br />There is no direct consquence if these numbers dont hold up to reality. As a rule of thumb keep it at the lower reasonable end. <br />
          <b><br/>You can enter your self-employment income here only if your job is in this <a href="" target="_blank" rel="noopener noreferrer">list.</a> Otherwise you enter it in Business Revenue.</b></span>,
        top: 5, defaultValue: null, placeholder: "Selfemployment Income", type: null, size: "medium", margin: "medium"
      },
      {
        name: "u_betrag2", tooltip: <span className="tooltipText">Enter your expected income through employment for the first year of your business.
  <br />All of these numbers should estimates.<br /><br />There is no direct consquence if these numbers dont hold up to reality. As a rule of thumb keep it at the lower reasonable end.</span>,
        top: 5, defaultValue: null, placeholder: "Salary", type: null, size: "medium", margin: "medium"
      },
      {
        name: "u_betrag3", tooltip: <span className="tooltipText">Enter your expected income through investments for the first year of your business.
  <br />All of these numbers should estimates.<br /><br />There is no direct consquence if these numbers dont hold up to reality. As a rule of thumb keep it at the lower reasonable end.</span>,
        top: 5, defaultValue: null, placeholder: "Capital Gains", type: null, size: "medium", margin: "medium"
      },
      {
        name: "u_betrag9", tooltip: <span className="tooltipText">Enter the estimated revenue of your business for the first year.
   <br />All of these numbers should estimates.<br /><br />There is no direct consquence if these numbers dont hold up to reality. As a rule of thumb keep it at the lower reasonable end.</span>,
        top: 5, defaultValue: null, placeholder: "Business Revenue", type: null, size: "medium", margin: "medium"
      },],
      [{
        name: "u_betrag4", tooltip: <span className="tooltipText">Enter your expected income through other sources for the first year of your business.
  <br /><br />This could be child benefits, BaföG, scholarships or grants etc.<br />All of these numbers should estimates.<br /><br />There is no direct consquence if these numbers dont hold up to reality. As a rule of thumb keep it at the lower reasonable end.</span>,
        top: 5, defaultValue: null, placeholder: "Other Income", type: null, size: "medium", margin: "medium"
      },
      {
        name: "u_sonderausgaben1", tooltip: <span className="tooltipText">Enter the sum of your estimated special expenses. Those could be insurance, professional liability etc.
  <br />For a more comprehensive list click here: <a href="" target="_blank" rel="noopener noreferrer">german</a>,
          <a href="" target="_blank" rel="noopener noreferrer">english</a></span>, top: 10.5, defaultValue: null, placeholder: "Special Expenses", type: null, size: "medium", margin: "medium"
      },
      { name: "u_steuerabzug1", tooltip: <span className="tooltipText">List of tax deductions coming soon.</span>, top: 12.5, defaultValue: null, placeholder: "Tax Deductions", type: null, size: "medium", margin: "medium" },
      { name: "sum1", tooltip: <span className="tooltipText">Add your Business Revenue to your Selfemployment Income.</span>, top: 12.5, defaultValue: null, placeholder: "Total Revenue", type: null, size: "medium", margin: "medium" },],
      [{ type: "text", text: "Second Year" }],
      [{
        name: "u_betrag5", tooltip: <span className="tooltipText">Enter your expected income through self-employment for the second year of your business.
  <br />All of these numbers should estimates.<br /><br />There is no direct consquence if these numbers dont hold up to reality. As a rule of thumb keep it at the lower reasonable end. <br />
  <b><br/>You can enter your self-employment income here only if your job is in this <a href="" target="_blank" rel="noopener noreferrer">list.</a> Otherwise you enter it in Business Revenue.</b></span>, 
          top: 16, defaultValue: null, placeholder: "Selfemployment Income", type: null, size: "medium", margin: "medium"},
      { name: "u_betrag6", tooltip: <span className="tooltipText">Enter your expected income through employment for the second year of your business.
  <br />All of these numbers should estimates.<br /><br />There is no direct consquence if these numbers dont hold up to reality. As a rule of thumb keep it at the lower reasonable end.
  </span>, top: 17, defaultValue: null, placeholder: "Salary", type: null, size: "medium", margin: "medium"},
      {name: "u_betrag7", tooltip: <span className="tooltipText">Enter your expected income through investments for the second year of your business.
  <br />All of these numbers should estimates.<br /><br />There is no direct consquence if these numbers dont hold up to reality. As a rule of thumb keep it at the lower reasonable end.</span>, 
  top: 17, defaultValue: null, placeholder: "Capital Gains", type: null, size: "medium", margin: "medium"},
      { name: "u_betrag10", tooltip: <span className="tooltipText">Enter the estimated revenue of your business for the second year.
  <br />All of these numbers should estimates.<br /><br />There is no direct consquence if these numbers dont hold up to reality. As a rule of thumb keep it at the lower reasonable end.</span>,
        top: 17, defaultValue: null, placeholder: "Business Revenue", type: null, size: "medium", margin: "medium"
      },],
      [{
        name: "u_betrag8", tooltip: <span className="tooltipText">Enter your expected income through other sources for the second year of your business.
  <br /><br />This could be child benefits, BaföG, scholarships or grants etc.<br />All of these numbers should estimates.<br /><br />There is no direct consquence if these numbers dont hold up to reality. As a rule of thumb keep it at the lower reasonable end.
  </span>, top: 16, defaultValue: null, placeholder: "Other Income", type: null, size: "medium", margin: "medium"
      },
      {
        name: "u_sonderausgaben2", tooltip: <span className="tooltipText">Enter the sum of your estimated special expenses. Those could be insurance, professional liability etc.
  <br />For a more comprehensive list click here: <a href="localhost:3000/specialExpensesListGerman" target="_blank" rel="noopener noreferrer">german</a>,
          <a href="" target="_blank" rel="noopener noreferrer">english</a></span>, top: 21, defaultValue: null, placeholder: "Special Expenses", type: null, size: "medium", margin: "medium"
      },
      { name: "u_steuerabzug2", tooltip: <span className="tooltipText">List of tax deductions coming soon.</span>, top: 24.5, defaultValue: null, placeholder: "Tax Deductions", type: null, size: "medium", margin: "medium" },
      { name: "sum2", tooltip: <span className="tooltipText">Add your Business Revenue to your Selfemployment Income.</span>, top: 24.5, defaultValue: null, placeholder: "Total Revenue", type: null, size: "medium", margin: "medium" },],
    ]
  },
  {title: "Partner Expected Income", display: "none", inputFields: [
      [{ type: "text", text: "First Year" }],
      [{name: "p_betrag1", tooltip: <span className="tooltipText">Enter their expected income through self-employment for the first year of their business.
  <br />All of these numbers should estimates.<br /><br />There is no direct consquence if these numbers dont hold up to reality. As a rule of thumb keep it at the lower reasonable end. <br /><br />
          <b>Important</b><br />You can enter their self-employment income here only if their job is in this <a href="" target="_blank" rel="noopener noreferrer">list.</a> Otherwise you enter it in Business Revenue.</span>,
        top: 5, defaultValue: null, placeholder: "Selfemployment Income", type: null, size: "medium", margin: "medium"
      },
      {
        name: "p_betrag2", tooltip: <span className="tooltipText">Enter their expected income through employment for the first year of their business.
  <br />All of these numbers should estimates.<br /><br />There is no direct consquence if these numbers dont hold up to reality. As a rule of thumb keep it at the lower reasonable end.</span>,
        top: 5, defaultValue: null, placeholder: "Salary", type: null, size: "medium", margin: "medium"
      },
      {
        name: "p_betrag3", tooltip: <span className="tooltipText">Enter their expected income through investments for the first year of their business.
  <br />All of these numbers should estimates.<br /><br />There is no direct consquence if these numbers dont hold up to reality. As a rule of thumb keep it at the lower reasonable end.</span>,
        top: 5, defaultValue: null, placeholder: "Capital Gains", type: null, size: "medium", margin: "medium"
      },
      {
        name: "p_betrag9", tooltip: <span className="tooltipText">Enter the estimated revenue of their business for the first year.
   <br />All of these numbers should estimates.<br /><br />There is no direct consquence if these numbers dont hold up to reality. As a rule of thumb keep it at the lower reasonable end.</span>,
        top: 5, defaultValue: null, placeholder: "Business Revenue", type: null, size: "medium", margin: "medium"
      },],
      [{
        name: "p_betrag4", tooltip: <span className="tooltipText">Enter their expected income through other sources for the first year of their business.
  <br /><br />This could be child benefits, BaföG, scholarships or grants etc.<br />All of these numbers should estimates.<br /><br />There is no direct consquence if these numbers dont hold up to reality. As a rule of thumb keep it at the lower reasonable end.</span>,
        top: 5, defaultValue: null, placeholder: "Other Income", type: null, size: "medium", margin: "medium"
      },
      {
        name: "p_sonderausgaben1", tooltip: <span className="tooltipText">Enter the sum of their estimated special expenses. Those could be insurance, professional liability etc.
  <br />For a more comprehensive list click here: <a href="" target="_blank" rel="noopener noreferrer">german </a>, 
          <a href="" target="_blank" rel="noopener noreferrer">english</a></span>, top: 10.5, defaultValue: null, placeholder: "Special Expenses", type: null, size: "medium", margin: "medium"
      },
      { name: "p_steuerabzug1", tooltip: <span className="tooltipText">List of tax deductions coming soon.</span>, top: 12.5, defaultValue: null, placeholder: "Tax Deductions", type: null, size: "medium", margin: "medium" },],
      [{ type: "text", text: "Second Year" }],
      [{
        name: "p_betrag5", tooltip: <span className="tooltipText">Enter their expected income through self-employment for the second year of their business.
  <br />All of these numbers should estimates.<br /><br />There is no direct consquence if these numbers dont hold up to reality. As a rule of thumb keep it at the lower reasonable end. <br /><br />
          <b>Important</b><br />You can enter their self-employment income here only if their job is in this <a href="" target="_blank" rel="noopener noreferrer">list.</a> Otherwise you enter it in Business Revenue.</span>, top: 16, defaultValue: null, placeholder: "Selfemployment Income", type: null, size: "medium", margin: "medium"
      },
      {
        name: "p_betrag6", tooltip: <span className="tooltipText">Enter their expected income through employment for the second year of their business.
  <br />All of these numbers should estimates.<br /><br />There is no direct consquence if these numbers dont hold up to reality. As a rule of thumb keep it at the lower reasonable end.</span>, top: 16, defaultValue: null, placeholder: "Salary", type: null, size: "medium", margin: "medium"
      },
      {
        name: "p_betrag7", tooltip: <span className="tooltipText">Enter their expected income through investments for the second year of their business.
  <br />All of these numbers should estimates.<br /><br />There is no direct consquence if these numbers dont hold up to reality. As a rule of thumb keep it at the lower reasonable end.</span>, top: 16, defaultValue: null, placeholder: "Capital Gains", type: null, size: "medium", margin: "medium"
      },
      {
        name: "p_betrag10", tooltip: <span className="tooltipText">Enter the estimated revenue of their business for the second year.
  <br />All of these numbers should estimates.<br /><br />There is no direct consquence if these numbers dont hold up to reality. As a rule of thumb keep it at the lower reasonable end.</span>,
        top: 16, defaultValue: null, placeholder: "Business Revenue", type: null, size: "medium", margin: "medium"
      },],
      [{
        name: "p_betrag8", tooltip: <span className="tooltipText">Enter their expected income through other sources for the second year of their business.
  <br /><br />This could be child benefits, BaföG, scholarships or grants etc.<br />All of these numbers should estimates.<br /><br />There is no direct consquence if these numbers dont hold up to reality. As a rule of thumb keep it at the lower reasonable end.
  </span>, top: 20, defaultValue: null, placeholder: "Other Income", type: null, size: "medium", margin: "medium"
      },
      {
        name: "p_sonderausgaben2", tooltip: <span className="tooltipText">Enter the sum of their estimated special expenses. Those could be insurance, professional liability etc.
  <br />For a more comprehensive list click here: <a href="localhost:3000/specialExpensesListGerman" target="_blank" rel="noopener noreferrer">german</a>,
          <a href="" target="_blank" rel="noopener noreferrer">english</a></span>, top: 21, defaultValue: null, placeholder: "Special Expenses", type: null, size: "medium", margin: "medium"
      },
      { name: "p_steuerabzug2", tooltip: <span className="tooltipText">List of tax deductions coming soon.</span>, top: 21, defaultValue: null, placeholder: "Tax Deductions", type: null, size: "medium", margin: "medium" },],
    ]
  },

  {
    title: "Previous Business", display: "block", inputFields: [
      [{ name: "old_business", text: "Did you have a business in Germany in the last 5 years?", tooltip: <span className="tooltipText">Have you had a business or/and worked self-employed in germany during the past five years?</span>, 
      top: 3.5, defaultValue: ["yes", "no"], placeholder: ["Yes", "No"], type: "radio", size: "medium", margin: "medium" },
      { name: "old_business_yes", tooltip: <span className="tooltipText"></span>, top: 0, defaultValue: "x", placeholder: null, type: null, size: null, margin: null },
      { name: "old_business_no", tooltip: <span className="tooltipText"></span>, top: 0, defaultValue: "x", placeholder: null, type: null, size: null, margin: null },],
      ["invisible",
        { name: "old_business_name", tooltip: <span className="tooltipText">What was the name of your old business? <br/>Leave this out if you were simply self-employed.</span>, top: 8, defaultValue: "", placeholder: "Old Business", type: null, size: "medium", margin: "medium" },
        { name: "old_business_city", tooltip: <span className="tooltipText">Where did you worked/ Where was your business?</span>, top: 12, defaultValue: "", placeholder: "City", type: null, size: "medium", margin: "medium" },
        { name: "old_business_start_date", tooltip: <span className="tooltipText">When did you start it?<br/>Enter the date in the following format: DD/MM/YYYY</span>, top: 12, defaultValue: "", placeholder: "Start Date", type: null, size: "medium", margin: "medium" },
        { name: "old_business_end_date", tooltip: <span className="tooltipText">When did it end?<br/>Enter the date in the following format: DD/MM/YYYY</span>, top: 12, defaultValue: "", placeholder: "End Date", type: null, size: "medium", margin: "medium" },],
      ["invisible",
        { name: "old_business_finanzamt", tooltip: <span className="tooltipText">At which tax office where you registered?</span>, top: 13.5, defaultValue: "", placeholder: "Finanzamt", type: null, size: "medium", margin: "medium" },
        { name: "old_business_tax_id", tooltip: <span className="tooltipText">What was your old tax id?</span>, top: 13.5, defaultValue: "", placeholder: "Tax Id", type: null, size: "medium", margin: "medium" },
        { name: "old_business_ustid", tooltip: <span className="tooltipText">What was your old sales tax id?(Umsatzsteuer-Identifikationsnummer)</span>, top: 13.5, defaultValue: "", placeholder: "Ustid", type: null, size: "large", margin: "medium" },]
    ]
  },

  {
    title: "Handelsregister", display: "block", inputFields: [
      [{ name: "handelsregister", text: "Is your business registered at the Handelsregister?", tooltip: <span className="tooltipText">...</span>, top: 0, defaultValue: ["yes", "no"], placeholder: ["Yes", "No"], type: "radio", size: "medium", margin: "medium" },
      { name: "handelsregister_yes", tooltip: <span className="tooltipText">...</span>, top: 0, defaultValue: "x", placeholder: null, type: null, size: null, margin: null },
      { name: "handelsregister_no", tooltip: <span className="tooltipText">...</span>, top: 0, defaultValue: "x", placeholder: null, type: null, size: null, margin: null },],
      ["invisible",
        { name: "handelsregister_date", tooltip: <span className="tooltipText">Since when is your business registered</span>, top: 12, defaultValue: "",  placeholder: "Date",type: null, size: "medium", margin: "medium" },
        { name: "handelsregister_city1", tooltip: <span className="tooltipText">In which city is your business registered?</span>, top: 12, defaultValue: "",  placeholder: "City",type: null, size: "medium", margin: "medium" },
        { name: "registry_number1", tooltip: <span className="tooltipText">What is your registry number?</span>, top: 12, defaultValue: "",  placeholder: "Registry Number",type: null, size: "medium", margin: "medium" },],
      ["invisible",
      { name: "handelsregister_application_done", text: "Did you submit your application?", 
      tooltip: <span className="tooltipText">Did you submit your application to a local court?</span>, top: 12, defaultValue: ["yes", "no"], placeholder: ["Yes", "Not Yet"], type: "radio", size: "medium", margin: "medium" },
      { name: "application_intended", tooltip: <span className="tooltipText">...</span>, top: 0, defaultValue: "x", placeholder: null, type: null, size: null, margin: null },
      { name: "application_done", tooltip: <span className="tooltipText">...</span>, top: 0, defaultValue: "x", placeholder: null, type: null, size: null, margin: null }],
      ["invisible",
        { name: "registration_done_date", tooltip: <span className="tooltipText">When did you submit your application?<br/>Enter the date in the following format: DD/MM/YYYY</span>, 
        top: 13, defaultValue: "", placeholder: "Date", type: null, size: "medium", margin: "medium" },
        { name: "handelsregister_city2", tooltip: <span className="tooltipText">In which city is did you submit it?</span>, top: 13.5, defaultValue: "", placeholder: "City", type: null, size: "medium", margin: "medium" },
        { name: "registry_number2", tooltip: <span className="tooltipText">What is your registry number?</span>, top: 13.5, defaultValue: "", placeholder: "Registry Number",type: null, size: "medium", margin: "medium" }],
    ]
  },

  {
    title: "Kleinunternehmer-Regelung", display: "block", inputFields: [
      [{ name: "small_business", text: "Do you want to use the Kleinunternehmer-Regelung?", tooltip: 
      <span className="tooltipText">If your total revenue (Umsatz) is lower than 19.000€ you may decide to use the Kleinunternehmer-Regel (Small Business Rule).
      This means you dont have to pay any sales tax (Umsatzsteuer). <br/><b>In this case you can obviously not add sales tax to your receivables.</b><br/><br/>
      If you click "No" you simply pay sales tax and add it to your receivables.</span>, top: 0, defaultValue: ["yes", "no"], placeholder: ["Yes", "No"], type: "radio", size: "medium", margin: "medium" },
      { name: "small_business_yes", tooltip: <span className="tooltipText">null</span>, top: 0, defaultValue: "x", placeholder: null, type: null, size: null, margin: null },
      { name: "small_business_no", tooltip: <span className="tooltipText">null</span>, top: 0, defaultValue: "x", placeholder: null, type: null, size: null, margin: null },],
    ]
  },

  {
    title: "Unique Tax Rules", display: "none", inputFields: [
      [{ name: "steuerbefreiung", tooltip: <span className="tooltipText">...</span>, top: 3.5, defaultValue: null, placeholder: "Tax Exemption", type: null, size: "large", margin: "small" },
      { name: "steuerbefreiung_art", tooltip: <span className="tooltipText">Enter the article/paragraph number where your tax exemption is listed.</span>, top: 3.5, defaultValue: null, placeholder: "Article", type: null, size: "small", margin: "small" },],
      [{ name: "durchschnittssteuer", tooltip: <span className="tooltipText">null</span>, top: 3.5, defaultValue: null, placeholder: null, type: null, size: null, margin: null },
      { name: "durchschnittssteuer_art", tooltip: <span className="tooltipText">null</span>, top: 3.5, defaultValue: null, placeholder: null, type: null, size: null, margin: null },],
      [{ name: "steuerbefreiung_yes", tooltip: <span className="tooltipText">null</span>, top: 3.5, defaultValue: "x", placeholder: null, type: null, size: null, margin: null },
      { name: "steuerbefreiung_no", tooltip: <span className="tooltipText">null</span>, top: 3.5, defaultValue: "x", placeholder: null, type: null, size: null, margin: null },],
      [{ name: "steuersatz_yes", tooltip: <span className="tooltipText">null</span>, top: 3.5, defaultValue: "x", placeholder: null, type: null, size: null, margin: null },
      { name: "steuersatz_no", tooltip: <span className="tooltipText">null</span>, top: 3.5, defaultValue: "x", placeholder: null, type: null, size: null, margin: null },],
    ]
  },

  {
    title: "Last Page", display: "block", inputFields: [
      [{ name: "city and date", tooltip: <span className="tooltipText">Enter the your current city and todays date.</span>, top: 5, defaultValue: null, placeholder: "City,  DD/MM/YYYY", type: null, size: "large", margin: "medium" },],
    ]
  },
];





