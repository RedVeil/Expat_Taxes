import React from "react";




export const steuerlicheErfassungFormData = [
{title: "Personal Informations",inputFields:[
  [{name: "u_firstname", tooltip: <p>Hints, Help and Tips will be displayed on this side. If you have a middle name add it here.</p>, defaultValue: null, placeholder: "First Name", type: null, size: "medium", margin: "medium"},
  {name: "u_lastname", tooltip: <p>...</p>, defaultValue: null, placeholder: "Last Name", type: null, size: "medium", margin: "medium"},
  {name: "u_birth_name", tooltip: <p>You need to fill this only if your maiden name is different to your current last name.</p>, defaultValue: null, placeholder: "Maiden Name", type: null, 
  size: "medium", margin: "medium"},
  {name: "u_birthday", tooltip: <p>Enter the date in the following format: DD/MM/YYYY.</p>, defaultValue: null, placeholder: "Birthday", type: null, size: "medium", margin: "medium"},],
  [{type:"text", text:"Test"}],
  [{name: "u_strasse",tooltip: <p>...</p>, defaultValue: null, placeholder: "Street", type: null, size: "medium", margin: "medium"},
  {name: "u_hausnummer", tooltip: <p>...</p>, defaultValue: null, placeholder: "Nr", type: null, size: "small", margin: "small"},
  {name: "u_hausnummer_zusatz", tooltip: <p>?</p>, defaultValue: null, placeholder: "Addon", type: null, size: "small", margin: "medium"},
  {name: "u_postleitzahl", xLocationId: 1, yLocationId: 7, tooltip: <p>Enter your Post Code / Zip Code.</p>, defaultValue: null, placeholder: "Post Code", type: null, size: "medium", margin: "medium"},],
  {name: "u_city", xLocationId: 3, yLocationId: 7, tooltip: <p>...</p>, defaultValue: null, placeholder: "City", type: null, size: "medium", margin: "medium"},
  [{name: "tel_int_vorwahl", xLocationId: 1, yLocationId: 17, tooltip: <p>...</p>, defaultValue: null, placeholder: "Country Code", type: null, size: "small", margin: "small"},
  {name: "vorwahl_tel", xLocationId: 5, yLocationId: 17, tooltip: <p>...</p>, defaultValue: null, placeholder: "Area Code", type: null, size: "small", margin: "medium"},
  {name: "rufnummer_tel", xLocationId: 13, yLocationId: 17, tooltip: <p>...</p>, defaultValue: null, placeholder: "Phone Number", type: null, size: "medium", margin: "medium"},
  {name: "e_mail", xLocationId: 1, yLocationId: 18, tooltip: <p>...</p>, defaultValue: null, placeholder: "Email", type: null, size: "medium", margin: "medium"},
  {name: "website", xLocationId: 1, yLocationId: 19, tooltip: <p>...</p>, defaultValue: null, placeholder: "Website", type: null, size: "medium", margin: "medium"},],
  [{name: "u_current_job", tooltip: <p>If you have more than one Job, choose the one where you earn the most. If this is also difficult choose the one where you work the most hours.</p>, defaultValue: null, placeholder: "Job Title/Job Description", type: null, size: "large", margin: "medium"},
  {name: "u_id", tooltip: <p>You got your "Identifikationsnummer" with your "Anmeldung".</p>, defaultValue: null, placeholder: "Identification-Number", type: null, size: "large", margin: "medium"},],     
  [{name: "migration_date", xLocationId: 21, yLocationId: 47, tooltip: <p>Enter the date in the following format: DD/MM/YYYY</p>, defaultValue: null, placeholder: "Migration Date", type: null, size: "medium", margin: "medium"},],
  [{name: "u_reli", text:"Church Tax:", tooltip: <p>...</p>, defaultValue: ["EV","RK","VD"], placeholder: ["Evangelic","Roman Catholic","No Religion"], type: "radio", size: "medium", margin: "medium"},],
]},

{title: "Your Finanzamt",inputFields:[
  [{name: "finanzamt", xLocationId: 1, yLocationId: 1, tooltip: <p>The name of your tax office is based on your district. <br/> If follows this pattern "Finanzamt" + Area. If you live in Mitte your Finanzamt would be called: "Finanzamt Mitte".</p>, defaultValue: null, placeholder: "Finanzamt", type: null, size: "large", margin: "medium"},
  {name: "u_tax_id", xLocationId: 5, yLocationId: 93, tooltip: <p>If you have one already. otherwise leave this out.</p>, defaultValue: null, placeholder: "Tax ID", type: null, size: "large", margin: "medium"}],
]},

{title: "Your Partner", inputFields:[
  [{name: "married", text:"married", tooltip: <p>...</p>, defaultValue: ["yes","no"], placeholder: ["yes","no"], type: "radio", size: "medium", margin: "medium"}],
  ["invisible",{name: "marriage_date", xLocationId: 10, yLocationId: 9, tooltip: <p>Enter the date in the following format: DD/MM/YYYY.</p>, defaultValue: null, placeholder: "Marriage Date", type: null, size: "medium", margin: "medium"},],
  ["invisible",{name: "p_firstname", xLocationId: 2, yLocationId: 10, tooltip: <p>You know the deal.</p>, defaultValue: null, placeholder: "First Name", type: null, size: "medium", margin: "medium"},
  {name: "p_lastname", xLocationId: 1, yLocationId: 10, tooltip: <p>You know the deal.</p>, defaultValue: null, placeholder: "Last Name", type: null, size: "medium", margin: "medium"},
  {name: "p_birth_name", xLocationId: 1, yLocationId: 11, tooltip: <p>You need to fill this if your partners maiden name is different to their current last name.</p>, defaultValue: null, placeholder: "Maiden Name", type: 
  null, size: "medium", margin: "medium"},
  {name: "p_birthday", xLocationId: 4, yLocationId: 12, tooltip: <p>Enter the date in the following format: DD/MM/YYYY.</p>, defaultValue: null, placeholder: "Birthday", type: null, size: "medium", margin: "medium"},],
  ["invisible",{name: "p_current_job", xLocationId: 1, yLocationId: 12, tooltip: <p>If they have more than one Job, choose the one where they earn the most. If this is also difficult choose the one where they work the most hours.</p>, defaultValue: null, placeholder: "Job Title/ Job Description", type: null, size: "large", margin: "medium"},
  {name: "p_id", xLocationId: 3, yLocationId: 16, tooltip: <p>Only if they have/had a german Tax Id before.</p>, defaultValue: null, placeholder: "Identification-Number", type: null, size: "large", margin: "medium"},],  
  ["invisible",{name: "p_reli", text:"Church Tax:", tooltip: <p>...</p>, defaultValue: ["EV","RK","VD"], placeholder: ["Evangelic","Roman Catholic","No Religion"], type: "radio", size: "medium", margin: "medium"},],
  ["invisible",{name: "live_together", text:"Live together", tooltip: <p>...</p>, defaultValue: ["yes","no"], placeholder: ["yes","no"], type: "radio", size: "medium", margin: "medium"},],
  ["invisible",{name: "p_strasse", xLocationId: 1, yLocationId: 13, tooltip: <p>...</p>, defaultValue: null, placeholder: "Street", type: null, size:"medium", margin: "small"},
  {name: "p_hausnummer", xLocationId: 1, yLocationId: 14, tooltip: <p>...</p>, defaultValue: null, placeholder: "Nr", type: null, size: "small", margin: "small"},
  {name: "p_hausnummer_zusatz", xLocationId: 5, yLocationId: 14, tooltip: <p>...</p>, defaultValue: null, placeholder: "Addon", type: null, size: "small", margin: "medium"},
  {name: "p_postleitzahl", xLocationId: 1, yLocationId: 15, tooltip: <p>...</p>, defaultValue: null, placeholder: "Post Code", type: null, size: "medium", margin: "medium"},
  {name: "p_city", xLocationId: 3, yLocationId: 15, tooltip: <p>...</p>, defaultValue: null, placeholder: "City", type: null, size: "medium", margin: "small"},],

  [{name: "old_marriage", text:"Old Marriage",tooltip: <p>...</p>, defaultValue: ["yes","no"], placeholder: ["yes","no"], type: "radio", size: "medium", margin: "medium"},],
  ["invisible",{name: "widow_date", xLocationId: 11, yLocationId: 9, tooltip: <p>Enter the date in the following format: DD/MM/YYYY.</p>, defaultValue: null, placeholder: "Widow Date", type: null, size: "medium", margin: "medium"},
  {name: "divorce_date", xLocationId: 12, yLocationId: 9, tooltip: <p>Enter the date in the following format: DD/MM/YYYY.</p>, defaultValue: null, placeholder: "Divorce Date", type: null, size: "medium", margin: "medium"},
  {name: "seperate_date", xLocationId: 1, yLocationId: 9, tooltip: <p>Enter the date in the following format: DD/MM/YYYY.</p>, defaultValue: null, placeholder: "Seperation Date", type: null, size: "medium", margin: "medium"},],

]},

{title: "Your new Profession", inputFields:[
  [{name: "art_taetigkeit", xLocationId: 1, yLocationId: 20, tooltip: <p>Describe your Job, Job title and the industry you are working in. Enter as much as you want. <br/><br/>e.g. If you have a website and make money through ads and affiliate-marketing you could write: "Managment of a website with income through advertisment and affiliate-marketing"<br/><br/>Tip: <br/>It helps to be broad in the description as you can claim more expenses.</p>, defaultValue: null, placeholder: "Freelance Job Description", type: null, size: "large", margin: "medium"},
  {name: "work_date", xLocationId: 23, yLocationId: 63, tooltip: <p>You can backdate this by up to 3 months to include preparation costs.<br/><br/>Enter the date in the following format: DD/MM/YYYY</p>, defaultValue: null, placeholder: "Work Date", type: null, size: "medium", margin: "medium"},],
]},

{title: "Your Bank Account", inputFields:[
  [{name: "iban_de", tooltip: <p>It is advised to use a business account here. <br/>It is possible to use your private bank account for business but this brings only more stress as you have to be very careful which expenses you claim. <br/>For your own sake please dont do it, use a seperate account for your business.</p>, defaultValue: null, placeholder: "IBAN", type: null, size: "medium", margin: "medium"},
  {name: "iban_int", tooltip: <p>...</p>, defaultValue: null, placeholder: "IBAN International", type: null, size: "medium", margin:null},
  {name: "bic", xtooltip: <p>...</p>, defaultValue: null, placeholder: "BIC", type: null, size: "medium", margin: "medium"},
  {name: "holder", tooltip: <p>Enter this only if you are not the account holder.</p>, defaultValue: null, placeholder: "Holder Name", type: null, size: "medium", margin: "medium"},],

]},
{title: "SEPA", inputFields:[
  [{name: "SEPA", text:"Sepa", tooltip: <p>A SEPA-Mandat allows the tax office to automatically collect your taxes. Otherwise you have to transfer your taxes manually every month.<br/><br/>You have to fill the SEPA-Mandat seperatly and send it together with this document to your tax office.</p>, defaultValue: ["yes","no"], placeholder: ["yes","no"], type: "radio", size: "medium", margin: "medium"},
  {name: "sepa_x", tooltip: <p>null</p>, defaultValue: "x", placeholder: null, type: null, size:null, margin:null},],
  
]},
{title: "Tax Consultant", inputFields:[
  [{name: "tax_consultant", text:"Tax Consultant", tooltip: <p>Do you?</p>, defaultValue: ["yes","no"], placeholder: ["yes","no"], type: "radio", size: "medium", margin: "medium"},
  {name: "tax_consultant_yes", tooltip: <p>null</p>, defaultValue: "x", placeholder: null, type: null, size:null, margin:null},
  {name: "tax_consultant_no", tooltip: <p>null</p>, defaultValue: "x", placeholder: null, type: null, size:null, margin:null},],
  
  ["invisible",{name: "steuerberater", tooltip: <p>...</p>, defaultValue: null, placeholder: "Consultant Office", type: null, size: "medium", margin: "medium"},
  {name: "b_lastname", tooltip: <p>...</p>, defaultValue: null, placeholder: "Last Name", type: null, size: "medium", margin: "medium"},
  {name: "b_firstname", tooltip: <p>...</p>, defaultValue: null, placeholder: "First Name", type: null, size: "medium", margin: "medium"},],
  ["invisible",{name: "b_strasse", tooltip: <p>...</p>, defaultValue: null, placeholder: "Street", type: null, size: "medium", margin: "medium"},
  {name: "b_hausnummer", tooltip: <p>...</p>, defaultValue: null, placeholder: "Nr", type: null, size: "small", margin: "small"},
  {name: "b_adressergaenzung", tooltip: <p>...</p>, defaultValue: null, placeholder: "Addon", type: null, size: "small", margin: "medium"},
  {name: "b_postleitzahl", xtooltip: <p>...</p>, defaultValue: null, placeholder: "Post Code", type: null, size: "medium", margin: "medium"},
  {name: "b_ort", tooltip: <p>...</p>, defaultValue: null, placeholder: "City", type: null, size: "medium", margin: "small"},],
  ["invisible",{name: "b_tel_int_vorwahl", xLocationId: 15, yLocationId: 38, tooltip: <p>...</p>, defaultValue: null, placeholder: "Country Code", type: null, size: "small", margin: "small"},
  {name: "b_vorwahl_tel", xLocationId: 18, yLocationId: 38, tooltip: <p>...</p>, defaultValue: null, placeholder: "Area Code", type: null, size: "small", margin: "medium"},
  {name: "b_rufnummer_tel", xLocationId: 20, yLocationId: 38, tooltip: <p>...</p>, defaultValue: null, placeholder: "Phone Number", type: null, size: "medium", margin: "medium"},
  {name: "b_e_mail", xLocationId: 15, yLocationId: 39, tooltip: <p>...</p>, defaultValue: null, placeholder: "Email", type: null, size: "medium", margin: "medium"},],

]},
{title: "Document Recipient", inputFields:[
  [{name: "doc_recipient", text:"Document Recipient", tooltip: <p>If you dont have a tax consultant but someone else is recieving your documents than add them here.<br/>This can be changed whenever you want.</p>, defaultValue: ["me","not me"], placeholder: ["me","not me"], type: "radio", size: "medium", margin: "medium"},
  {name: "vollmacht_x", xLocationId: 1, yLocationId: 96, tooltip: <p>null</p>, defaultValue: "x", placeholder: null, type: null, size:null, margin:null},
  {name: "vollmacht_attached", xLocationId: 1, yLocationId: 97, tooltip: <p>null</p>, defaultValue: "x", placeholder: null, type: null, size:null, margin:null},],
  ["invisible",{name: "doc_firma", xLocationId: 1, yLocationId: 40, tooltip: <p>Enter this only if applicable.</p>, defaultValue: null, placeholder: "Company Name", type: null, size: "medium", margin: "medium"},
  {name: "doc_lastname", xLocationId: 1, yLocationId: 41, tooltip: <p>...</p>, defaultValue: null, placeholder: "Last Name", type: null, size: "medium", margin: "medium"},
  {name: "doc_firstname", xLocationId: 2, yLocationId: 41, tooltip: <p>...</p>, defaultValue: null, placeholder: "First Name", type: null, size: "medium", margin: "medium"},],
  ["invisible",{name: "doc_strasse", xLocationId: 1, yLocationId: 42, tooltip: <p>...</p>, defaultValue: null, placeholder: "Street", type: null, size: "medium", margin: "medium"},
  {name: "doc_hausnummer", xLocationId: 1, yLocationId: 43, tooltip: <p>...</p>, defaultValue: null, placeholder: "Nr", type: null, size: "small", margin: "small"},
  {name: "doc_adressergaenzung", xLocationId: 6, yLocationId: 43, tooltip: <p>...</p>, defaultValue: null, placeholder: "Addon", type: null, size: "small", margin: "medium"},
  {name: "doc_postleitzahl", xLocationId: 1, yLocationId: 44, tooltip: <p>...</p>, defaultValue: null, placeholder: "Post Code", type: null, size: "medium", margin: "medium"},
  {name: "doc_city", xLocationId: 7, yLocationId: 44, tooltip: <p>...</p>, defaultValue: null, placeholder: "City", type: null, size: "medium", margin: "small"},],
  ["invisible",{name: "doc_tel_int_vorwahl", xLocationId: 1, yLocationId: 45, tooltip: <p>...</p>, defaultValue: null, placeholder: "Country Code", type: null, size: "small", margin: "small"},
  {name: "doc_vorwahl_tel", xLocationId: 5, yLocationId: 45, tooltip: <p>...</p>, defaultValue: null, placeholder: "Area Code", type: null, size: "small", margin: "medium"},
  {name: "doc_rufnummer_tel", xLocationId: 13, yLocationId: 45, tooltip: <p>...</p>, defaultValue: null, placeholder: "Phone Number", type: null, size: "medium", margin: "medium"},
  {name: "doc_e_mail", xLocationId: 1, yLocationId: 46, tooltip: <p>...</p>, defaultValue: null, placeholder: "Email", type: null, size: "medium", margin: "medium"},],
]},

{title: "Migration Date", inputFields:[
  [{name: "pre_strasse", xLocationId: 1, yLocationId: 48, tooltip: <p>?</p>, defaultValue: null, placeholder: "Street", type: null, size: "medium", margin: "small"},
  {name: "pre_hausnummer", xLocationId: 1, yLocationId: 49, tooltip: <p>?</p>, defaultValue: null, placeholder: "Nr", type: null, size: "small", margin: "medium"},
  {name: "pre_adressergaenzung", xLocationId: 6, yLocationId: 49, tooltip: <p>?</p>, defaultValue: null, placeholder: "Addon", type: null, size: "small", margin: "medium"},
  {name: "pre_postleitzahl", xLocationId: 1, yLocationId: 50, tooltip: <p>?</p>, defaultValue: null, placeholder: "Post Code", type: null, size: "medium", margin: "medium"},
  {name: "pre_city", xLocationId: 7, yLocationId: 50, tooltip: <p>?</p>, defaultValue: null, placeholder: "City", type: null, size: "medium", margin: "small"},],
  [{name: "pre_finanzamt", xLocationId: 22, yLocationId: 51, tooltip: <p>?</p>, defaultValue: null, placeholder: "Tax Office", type: null, size: "large", margin: "medium"},
  {name: "pre_steuernummer", xLocationId: 22, yLocationId: 52, tooltip: <p>?</p>, defaultValue: null, placeholder: "Tax ID", type: null, size: "large", margin: "medium"},],
]},

{title: "Previous German Tax Id", inputFields:[
  [{name: "old_tax_id", text:"Old Tax ID", tooltip: <p>?</p>, defaultValue: ["yes","no"], placeholder: ["yes","no"], type: "radio", size: "medium", margin: "medium"},
  {name: "old_tax_yes", xLocationId: 19, yLocationId: 101, tooltip: <p>null</p>, defaultValue: "x", placeholder: null, type: null, size:null, margin:null},
  {name: "old_tax_no", xLocationId: 1, yLocationId: 101, tooltip: <p>null</p>, defaultValue: "x", placeholder: null, type: null, size:null, margin:null},],
  
  ["invisible",{name: "pre_ustid", text:"previous Ustid", tooltip: <p>...</p>, defaultValue: null, placeholder: "Sales Tax ID", type: null, size: "large", margin: "medium"},
  {name: "pre_ustid_yes", xLocationId: 1, yLocationId: 100, tooltip: <p>null</p>, defaultValue: null, placeholder: null, type: null, size:null, margin:null},
  {name: "pre_ustid_no", xLocationId: 1, yLocationId: 99, tooltip: <p>null</p>, defaultValue: null, placeholder: null, type: null, size:null, margin:null},
  {name: "pre_ustid_date", xLocationId: 2, yLocationId: 46, tooltip: <p>Enter the date in the following format: DD/MM/YYYY</p>, defaultValue: null, placeholder: "USTID Date", type: null, size: "medium", margin: "medium"},],  
]},

{title: "Workplace",inputFields:[
  [{name: "dif_firm_address", text:"Different Firm Adress", tooltip: <p>All tax related documents will be send to this address. Even when you work not from home you can decide to register your business there. This might make sense if your workplace is a studio or workshop.</p>, defaultValue: ["not home","home"], placeholder: ["Not Home","Home"], type: "radio", size: "medium", margin: "medium"},],

  ["invisible",{name: "firm_bezeichnung", xLocationId: 1, yLocationId: 53, tooltip: <p>?</p>, defaultValue: null, placeholder: "Company Name", type: null, size: "medium", margin: "medium"},],
  ["invisible",{name: "firm_strasse", xLocationId: 1, yLocationId: 54, tooltip: <p>?</p>, defaultValue: null, placeholder: "Street", type: null, size: "medium", margin: "medium"},
  {name: "firm_hausnummer", xLocationId: 1, yLocationId: 55, tooltip: <p>?</p>, defaultValue: null, placeholder: "Nr", type: null, size: "small", margin: "small"},
  {name: "firm_adressergaenzung", xLocationId: 6, yLocationId: 55, tooltip: <p>?</p>, defaultValue: null, placeholder: "Addon", type: null, size: "small", margin: "medium"},
  {name: "firm_postleitzahl", xLocationId: 1, yLocationId: 56, tooltip: <p>?</p>, defaultValue: null, placeholder: "Post Code", type: null, size: "medium", margin: "medium"},
  {name: "firm_city", xLocationId: 7, yLocationId: 56, tooltip: <p>?</p>, defaultValue: null, placeholder: "City", type: null, size: "medium", margin: "small"},],
  ["invisible",{name: "firm_tel_int_vorwahl", xLocationId: 1, yLocationId: 60, tooltip: <p>?</p>, defaultValue: null, placeholder: "Country Code", type: null, size: "small", margin: "small"},
  {name: "firm_vorwahl_tel", xLocationId: 5, yLocationId: 60, tooltip: <p>?</p>, defaultValue: null, placeholder: "Area Code", type: null, size: "small", margin: "medium"},
  {name: "firm_rufnummer_tel", xLocationId: 13, yLocationId: 60, tooltip: <p>?</p>, defaultValue: null, placeholder: "Phone Number", type: null, size: "medium", margin: "small"},],
  ["invisible",{name: "firm_e_mail", xLocationId: 1, yLocationId: 61, tooltip: <p>?</p>, defaultValue: null, placeholder: "Email", type: null, size: "medium", margin: "medium"},
  {name: "firm_website", xLocationId: 1, yLocationId: 62, tooltip: <p>?</p>, defaultValue: null, placeholder: "Website", type: null, size: "medium", margin: "medium"},],

]},

{title: "Exptected Income", inputFields:[
  [{name: "u_betrag1", xLocationId: 38, yLocationId: 82, tooltip: <p>...</p>, defaultValue: null, placeholder: "Freelance Income", type: null, size: "medium", margin: "medium"},
  {name: "u_betrag2", xLocationId: 38, yLocationId: 83, tooltip: <p>...</p>, defaultValue: null, placeholder: "Employee Salary", type: null, size: "medium", margin: "medium"},
  {name: "u_betrag3", xLocationId: 38, yLocationId: 84, tooltip: <p>...</p>, defaultValue: null, placeholder: "Capital Gains", type: null, size: "medium", margin: "medium"},
  {name: "u_betrag4", xLocationId: 38, yLocationId: 85, tooltip: <p>...</p>, defaultValue: null, placeholder: "Other Income", type: null, size: "medium", margin: "medium"},],
  [{name: "u_betrag5", xLocationId: 35, yLocationId: 82, tooltip: <p>...</p>, defaultValue: null, placeholder: "Freelance Income", type: null, size: "medium", margin: "medium"},
  {name: "u_betrag6", xLocationId: 35, yLocationId: 83, tooltip: <p>...</p>, defaultValue: null, placeholder: "Employee Salary", type: null, size: "medium", margin: "medium"},
  {name: "u_betrag7", xLocationId: 35, yLocationId: 84, tooltip: <p>...</p>, defaultValue: null, placeholder: "Capital Gains", type: null, size: "medium", margin: "medium"},
  {name: "u_betrag8", xLocationId: 35, yLocationId: 85, tooltip: <p>...</p>, defaultValue: null, placeholder: "Other Income", type: null, size: "medium", margin: "medium"},],
  [{name: "p_betrag1", xLocationId: 34, yLocationId: 82, tooltip: <p>...</p>, defaultValue: null, placeholder: "Freelance Income", type: null, size: "medium", margin: "medium"},
  {name: "p_betrag2", xLocationId: 34, yLocationId: 83, tooltip: <p>...</p>, defaultValue: null, placeholder: "Employee Salary", type: null, size: "medium", margin: "medium"},
  {name: "p_betrag3", xLocationId: 34, yLocationId: 84, tooltip: <p>...</p>, defaultValue: null, placeholder: "Capital Gains", type: null, size: "medium", margin: "medium"},
  {name: "p_betrag4", xLocationId: 34, yLocationId: 85, tooltip: <p>...</p>, defaultValue: null, placeholder: "Other Income", type: null, size: "medium", margin: "medium"},],
  [{name: "p_betrag5", xLocationId: 36, yLocationId: 82, tooltip: <p>...</p>, defaultValue: null, placeholder: "Freelance Income", type: null, size: "medium", margin: "medium"},
  {name: "p_betrag6", xLocationId: 36, yLocationId: 83, tooltip: <p>...</p>, defaultValue: null, placeholder: "Employee Salary", type: null, size: "medium", margin: "medium"},
  {name: "p_betrag7", xLocationId: 36, yLocationId: 84, tooltip: <p>...</p>, defaultValue: null, placeholder: "Capital Gains", type: null, size: "medium", margin: "medium"},
  {name: "p_betrag8", xLocationId: 36, yLocationId: 85, tooltip: <p>...</p>, defaultValue: null, placeholder: "Other Income", type: null, size: "medium", margin: "medium"},],
  [{name: "u_sonderausgaben1", xLocationId: 22, yLocationId: 86, tooltip: <p>...</p>, defaultValue: null, placeholder: "Amount in €", type: null, size: "medium", margin: "medium"},
  {name: "p_sonderausgaben1", xLocationId: 34, yLocationId: 86, tooltip: <p>...</p>, defaultValue: null, placeholder: "Amount in €", type: null, size: "medium", margin: "medium"},],
  [{name: "u_sonderausgaben2", xLocationId: 35, yLocationId: 86, tooltip: <p>...</p>, defaultValue: null, placeholder: "Amount in €", type: null, size: "medium", margin: "medium"},
  {name: "p_sonderausgaben2", xLocationId: 36, yLocationId: 86, tooltip: <p>...</p>, defaultValue: null, placeholder: "Amount in €", type: null, size: "medium", margin: "medium"},],
  [{name: "u_steuerabzug1", xLocationId: 22, yLocationId: 51, tooltip: <p>...</p>, defaultValue: null, placeholder: "Amount in €", type: null, size: "medium", margin: "medium"},
  {name: "p_steuerabzug1", xLocationId: 34, yLocationId: 51, tooltip: <p>...</p>, defaultValue: null, placeholder: "Amount in €", type: null, size: "medium", margin: "medium"},],
  [{name: "u_steuerabzug2", xLocationId: 35, yLocationId: 51, tooltip: <p>...</p>, defaultValue: null, placeholder: "Amount in €", type: null, size: "medium", margin: "medium"},
  {name: "p_steuerabzug2", xLocationId: 36, yLocationId: 51, tooltip: <p>...</p>, defaultValue: null, placeholder: "Amount in €", type: null, size: "medium", margin: "medium"},],
  [{name: "sum1", xLocationId: 38, yLocationId: 88, tooltip: <p>...</p>, defaultValue: null, placeholder: "Amount in €", type: null, size: "medium", margin: "medium"},
  {name: "sum2", xLocationId: 39, yLocationId: 88, tooltip: <p>...</p>, defaultValue: null, placeholder: "Amount in €", type: null, size: "medium", margin: "medium"},],
]},

{title: "Small Business Rule", inputFields:[
  [{name: "small_business", text:"Small Business Rule", tooltip: <p>...</p>, defaultValue: ["yes","no"], placeholder: ["yes","no"], type: "radio", size: "medium", margin: "medium"},
  {name: "small_business_yes", xLocationId: 15, yLocationId: 97, tooltip: <p>null</p>, defaultValue: "x", placeholder: null, type: null, size:null, margin:null},
  {name: "small_business_no", xLocationId: 15, yLocationId: 98, tooltip: <p>null</p>, defaultValue: "x", placeholder: null, type: null, size:null, margin:null},],
]},

{title: "Unique Tax Law", inputFields:[
  [{name: "sonstig", xLocationId: 37, yLocationId: 87, tooltip: <p>...</p>, defaultValue: null, placeholder: "Description", type: null, size: "large", margin: "medium"},
  {name: "sonstig_x", xLocationId: 45, yLocationId: 87, tooltip: <p>null</p>, defaultValue: "x", placeholder: null, type: null, size:null, margin:null},],
  [{name: "steuerbefreiung", xLocationId: 40, yLocationId: 89, tooltip: <p>...</p>, defaultValue: null, placeholder: "Description", type: null, size: "large", margin: "small"},
  {name: "steuerbefreiung_art", xLocationId: 41, yLocationId: 89, tooltip: <p>...</p>, defaultValue: null, placeholder: "Article", type: null, size: "small", margin: "small"},],
  [{name: "durchschnittssteuer", xLocationId: 40, yLocationId: 91, tooltip: <p>null</p>, defaultValue: null, placeholder: null, type: null, size:null, margin:null},
  {name: "durchschnittssteuer_art", xLocationId: 41, yLocationId: 91, tooltip: <p>null</p>, defaultValue: null, placeholder: null, type: null, size:null, margin:null},],
  [{name: "steuerbefreiung_yes", xLocationId: 24, yLocationId: 89, tooltip: <p>null</p>, defaultValue: "x", placeholder: null, type: null, size:null, margin:null},
  {name: "steuerbefreiung_no", xLocationId: 15, yLocationId: 89, tooltip: <p>null</p>, defaultValue: "x", placeholder: null, type: null, size:null, margin:null},],
  [{name: "steuersatz_yes", xLocationId: 24, yLocationId: 90, tooltip: <p>null</p>, defaultValue: "x", placeholder: null, type: null, size:null, margin:null},
  {name: "steuersatz_no", xLocationId: 15, yLocationId: 90, tooltip: <p>null</p>, defaultValue: "x", placeholder: null, type: null, size:null, margin:null},],
  [{name: "durchschnittssteuer_yes", xLocationId: 24, yLocationId: 91, tooltip: <p>null</p>, defaultValue: "x", placeholder: null, type: null, size:null, margin:null},
  {name: "durchschnittssteuer_no", xLocationId: 15, yLocationId: 91, tooltip: <p>null</p>, defaultValue: "x", placeholder: null, type: null, size:null, margin:null},],
]},

{title: "Last Page", inputFields:[
  [{name: "city and date", xLocationId: 1, yLocationId: 92, tooltip: <p>...</p>, defaultValue: null, placeholder: "City, DD/MM/YYYY", type: null, size: "large", margin: "medium"},],
]},
];





