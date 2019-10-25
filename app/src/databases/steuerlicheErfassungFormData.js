import React from "react";

export const steuerlicheErfassungFormData = [
{title: "Personal Informations",display:"block", inputFields:[
  [{name: "u_firstname", tooltip: <p className="tooltipText">If you have a middle name add it here.</p>, top: 5, defaultValue: null, placeholder: "First Name", type: null, size: "medium", margin: "medium"},
  {name: "u_lastname", tooltip: <p className="tooltipText"></p>, top: 5, defaultValue: null, placeholder: "Last Name", type: null, size: "medium", margin: "medium"},
  {name: "u_birth_name", tooltip: <p className="tooltipText">You need to fill this only if your maiden name is different to your current last name.</p>, top: 5, defaultValue: null, placeholder: "Maiden Name", type: null, 
  size: "medium", margin: "medium"},
  {name: "u_birthday", tooltip: <p className="tooltipText">Enter the date in the following format: DD/MM/YYYY.</p>, top: 5, defaultValue: null, placeholder: "Birthday", type: null, size: "medium", margin: "medium"},],
  [{name: "u_strasse",tooltip: <p className="tooltipText"></p>, top: 9, defaultValue: null, placeholder: "Street", type: null, size: "medium", margin: "medium"},
  {name: "u_hausnummer", tooltip: <p className="tooltipText"></p>, top:9, defaultValue: null, placeholder: "Nr", type: null, size: "small", margin: "small"},
  {name: "u_hausnummer_zusatz", tooltip: <p className="tooltipText">Include this, if you live in a rear or side building.</p>, top: 9, defaultValue: null, placeholder: "Addition", type: null, size: "small", margin: "medium"},
  {name: "u_postleitzahl", tooltip: <p className="tooltipText">Enter your Post Code / Zip Code.</p>, top: 9, defaultValue: null, placeholder: "Post Code", type: null, size: "medium", margin: "medium"},
  {name: "u_city", tooltip: <p className="tooltipText"></p>, top: 9, defaultValue: null, placeholder: "City", type: null, size: "medium", margin: "medium"},],
  [{name: "tel_int_vorwahl", tooltip: <p className="tooltipText">The first part of your number: <br/><br/>[+49] 17675242879<br/>[0] 17675242879</p>, top: 13, defaultValue: null, placeholder: "Country Code", type: null, size: "small", margin: "small"},
  {name: "vorwahl_tel", tooltip: <p className="tooltipText">The second part of your number: <br/><br/>+49 [176] 75242879<br/>0 [176] 75242879</p>, top: 13, defaultValue: null, placeholder: "Area Code", type: null, size: "small", margin: "medium"},
  {name: "rufnummer_tel", tooltip: <p className="tooltipText">The third part of your number: <br/><br/>+49176 [75242879]<br/>0176 [75242879]</p>, top: 13, defaultValue: null, placeholder: "Phone Number", type: null, size: "medium", margin: "medium"},
  {name: "e_mail", tooltip: <p className="tooltipText">Use your business relevant email adress.</p>, top: 13, defaultValue: null, placeholder: "Email", type: null, size: "medium", margin: "medium"},
  {name: "website", tooltip: <p className="tooltipText">Use the website for you corresponding business.</p>, top: 13, defaultValue: null, placeholder: "Website", type: null, size: "medium", margin: "medium"},],
  [{name: "u_current_job", tooltip: <p className="tooltipText">If you have more than one Job, choose the one where you earn the most.</p>, top: 17, defaultValue: null, placeholder: "Job Title/Job Description", type: null, size: "large", margin: "medium"},
  {name: "u_id", tooltip: <p className="tooltipText">You got your "Identifikationsnummer" with your "Anmeldung".<br/>If you are not sure where to find it click here...</p>, top: 17, defaultValue: null, placeholder: "Identification-Number", type: null, size: "large", margin: "medium"},],     
  [{name: "migration_date", tooltip: <p className="tooltipText">Only if you moved to your current city during the last 12 Months. <br/><br/>Enter the date in the following format: DD/MM/YYYY</p>, top: 21, defaultValue: null, placeholder: "Migration Date", type: null, size: "medium", margin: "medium"},],
  [{name: "u_reli", text:"Do you have to pay church tax?", tooltip: <p className="tooltipText">Church tax is added to your regular tax and send directly to your church.</p>, top: 26, 
  defaultValue: ["EV","RK","VD"], placeholder: ["Evangelic","Roman Catholic","No Christian Church Tax"], type: "radio", size: "medium", margin: "medium"},],
]},

{title: "Your Tax Office",display:"block", inputFields:[
  [{name: "finanzamt", tooltip: <p className="tooltipText">The name of your tax office is based on your district. 
  <br/> If follows this pattern "Finanzamt" + Area. <br/>If you live in Mitte your Finanzamt would be called: "Finanzamt Mitte".
  </p>, top: 0, defaultValue: null, placeholder: "Tax Office", type: null, size: "large", margin: "medium"},
  {name: "u_tax_id", tooltip: <p className="tooltipText">Enter if you have one already, otherwise leave this blank.</p>, top: 4.5, defaultValue: null, placeholder: "Tax ID", type: null, size: "large", margin: "medium"}],
]},

{title: "Your Partner", display:"block", inputFields:[
  [{name: "married", text:"Are you married?", tooltip: <p className="tooltipText"></p>, top: 3.5, defaultValue: ["yes","no"], placeholder: ["yes","no"], type: "radio", size: "medium", margin: "medium"}],
  ["invisible",{name: "marriage_date", tooltip: <p className="tooltipText">Enter the date in the following format: DD/MM/YYYY.</p>, top: 9, defaultValue: null, placeholder: "Marriage Date", type: null, size: "medium", margin: "medium"},],
  ["invisible",{name: "p_firstname", tooltip: <p className="tooltipText">If they have a middle name add it here.</p>, top: 12.5, defaultValue: null, placeholder: "First Name", type: null, size: "medium", margin: "medium"},
  {name: "p_lastname", tooltip: <p className="tooltipText"></p>, top: 12.5, defaultValue: null, placeholder: "Last Name", type: null, size: "medium", margin: "medium"},
  {name: "p_birth_name", tooltip: <p className="tooltipText">You need to fill this if your partners maiden name is different to their current last name.</p>, top: 12.5, defaultValue: null, placeholder: "Maiden Name", type: 
  null, size: "medium", margin: "medium"},
  {name: "p_birthday", tooltip: <p className="tooltipText">Enter the date in the following format: DD/MM/YYYY.</p>, top: 12.5, defaultValue: null, placeholder: "Birthday", type: null, size: "medium", margin: "medium"},],
  ["invisible",{name: "p_current_job", tooltip: <p className="tooltipText">If they have more than one Job, choose the one where they earn the most.</p>, 
  top: 17.5, defaultValue: null, placeholder: "Job Title/ Job Description", type: null, size: "large", margin: "medium"},
  {name: "p_id", tooltip: <p className="tooltipText">Only if they have a german Tax Id or had one before.</p>, top: 17.5, defaultValue: null, placeholder: "Identification-Number", type: null, size: "large", margin: "medium"},],  
  ["invisible",{name: "p_reli", text:"Do they have to pay church tax?", tooltip: <p className="tooltipText">Church tax is added to their regular tax and send directly to their church.</p>, top: 21.5, 
  defaultValue: ["EV","RK","VD"], placeholder: ["Evangelic","Roman Catholic","No Christian Church Tax"], type: "radio", size: "medium", margin: "medium"},],
  ["invisible",{name: "live_together", text:"Do you live together?", tooltip: <p className="tooltipText">...</p>, top: 26.5, defaultValue: ["yes","no"], placeholder: ["yes","no"], type: "radio", size: "medium", margin: "medium"},],
  ["invisible",{name: "p_strasse", tooltip: <p className="tooltipText">...</p>, top: 28.5, defaultValue: null, placeholder: "Street", type: null, size:"medium", margin: "small"},
  {name: "p_hausnummer", tooltip: <p className="tooltipText">...</p>, top: 28.5, defaultValue: null, placeholder: "Nr", type: null, size: "small", margin: "small"},
  {name: "p_hausnummer_zusatz", tooltip: <p className="tooltipText">Include this, if they live in a rear or side building.</p>, top: 28.5, defaultValue: null, placeholder: "Addon", type: null, size: "small", margin: "medium"},
  {name: "p_postleitzahl", tooltip: <p className="tooltipText">...</p>, top: 28.5, defaultValue: null, placeholder: "Post Code", type: null, size: "medium", margin: "medium"},
  {name: "p_city", tooltip: <p className="tooltipText">...</p>, top: 28.5, defaultValue: null, placeholder: "City", type: null, size: "medium", margin: "small"},],

  [{name: "old_marriage", text:"Have you been married before?",tooltip: <p className="tooltipText"></p>, top: 28.5, defaultValue: ["yes","no"], placeholder: ["yes","no"], type: "radio", size: "medium", margin: "medium"},],
  ["invisible",{name: "widow_date", tooltip: <p className="tooltipText"></p>, top: 28.5, defaultValue: null, placeholder: "Widow Date", type: null, size: "medium", margin: "medium"},
  {name: "divorce_date", tooltip: <p className="tooltipText"></p>, top: 28.5, defaultValue: null, placeholder: "Divorce Date", type: null, size: "medium", margin: "medium"},
  {name: "seperate_date", tooltip: <p className="tooltipText"></p>, top: 28.5, defaultValue: null, placeholder: "Seperation Date", type: null, size: "medium", margin: "medium"},],

]},

{title: "Your new Profession", display:"block", inputFields:[
  [{name: "art_taetigkeit", tooltip: <p className="tooltipText">Describe your Job, Job title and the industry you are working in. Enter as much as you want. 
  <br/><br/>e.g. If you have a website and make money through ads and affiliate-marketing you could write: "Managment of a website with income through advertisment and affiliate-marketing"
  <br/><br/>Tip: <br/>It helps to be broad in the description as you can claim more expenses.</p>, top: 0, defaultValue: null, placeholder: "Freelance Job Description", type: null, size: "large", margin: "medium"},
  {name: "work_date", tooltip: <p className="tooltipText">You can backdate this by up to 3 months to include preparation costs.<br/><br/>Enter the date in the following format: DD/MM/YYYY</p>, top: 0, defaultValue: null, placeholder: "Start of Occupation", type: null, size: "medium", margin: "medium"},],
]},

{title: "Your Bank Account", display:"block", inputFields:[
  [{name: "iban_de", tooltip: <p className="tooltipText">It is advised to use a business account here. 
  <br/>It is possible to use your private bank account for business but this brings only more stress as you have to be very careful which expenses you claim. 
  Plus if the tax office has to check your finances they will go through every single personal expense.
  <br/>For your own sake please dont do it, use a seperate account for your business.</p>, top: 0, defaultValue: null, placeholder: "IBAN", type: null, size: "medium", margin: "medium"},
  {name: "iban_int", tooltip: <p className="tooltipText">Enter this only if you dont have a german bacnk account for your business.</p>, top: 3.5, defaultValue: null, placeholder: "IBAN International", type: null, size: "medium", margin:"medium"},
  {name: "bic", xtooltip: <p className="tooltipText">...</p>, top: 5.5, defaultValue: null, placeholder: "BIC", type: null, size: "medium", margin: "medium"},
  {name: "holder", tooltip: <p className="tooltipText">Simply your first-, middle- and last name.</p>, top: 4.5, defaultValue: null, placeholder: "Holder Name", type: null, size: "medium", margin: "medium"},],

]},
{title: "SEPA", display:"block", inputFields:[
  [{name: "SEPA", text:"Do you want to use a SEPA-Mandate?", tooltip: <p className="tooltipText">A SEPA-Mandate allows the tax office to automatically collect your taxes. Otherwise you have to transfer your taxes manually every month.
    <br/><br/>A SEPA-Mandate is easier and a good option if your account is always covered. It always comes on a fixed date but if you cant pay it you have to pay extra penalties. Dont sign this if you want more flexibility about the timing of your payments or if your account is not covered through out the whole month.
    <br/><b>You will have to sign a seperate attached mandate.</b></p>, top: 0, defaultValue: ["yes","no"], placeholder: ["yes","no"], type: "radio", size: "medium", margin: "medium"},
  {name: "sepa_x", tooltip: <p className="tooltipText">null</p>, top: 3.5, defaultValue: "x", placeholder: null, type: null, size:null, margin:null},],
  
]},
{title: "Tax Consultant", display:"block", inputFields:[
  [{name: "tax_consultant", text:"Do you have a Tax Consultant?", tooltip: <p className="tooltipText"></p>, top: 5, defaultValue: ["yes","no"], placeholder: ["yes","no"], type: "radio", size: "medium", margin: "medium"},
  {name: "tax_consultant_yes", tooltip: <p className="tooltipText">null</p>, top: 3.5, defaultValue: "x", placeholder: null, type: null, size:null, margin:null},
  {name: "tax_consultant_no", tooltip: <p className="tooltipText">null</p>, top: 3.5, defaultValue: "x", placeholder: null, type: null, size:null, margin:null},],
  
  ["invisible",{name: "steuerberater", tooltip: <p className="tooltipText">...</p>, top: 9, defaultValue: null, placeholder: "Consultant Office", type: null, size: "medium", margin: "medium"},
  {name: "b_lastname", tooltip: <p className="tooltipText">...</p>, top: 9, defaultValue: null, placeholder: "Last Name", type: null, size: "medium", margin: "medium"},
  {name: "b_firstname", tooltip: <p className="tooltipText">...</p>, top: 9, defaultValue: null, placeholder: "First Name", type: null, size: "medium", margin: "medium"},],
  ["invisible",{name: "b_strasse", tooltip: <p className="tooltipText">...</p>, top: 12.5, defaultValue: null, placeholder: "Street", type: null, size: "medium", margin: "medium"},
  {name: "b_hausnummer", tooltip: <p className="tooltipText">...</p>, top: 12.5, defaultValue: null, placeholder: "Nr", type: null, size: "small", margin: "small"},
  {name: "b_adressergaenzung", tooltip: <p className="tooltipText">...</p>, top: 12.5, defaultValue: null, placeholder: "Addon", type: null, size: "small", margin: "medium"},
  {name: "b_postleitzahl", xtooltip: <p className="tooltipText">...</p>, top: 12.5, defaultValue: null, placeholder: "Post Code", type: null, size: "medium", margin: "medium"},
  {name: "b_ort", tooltip: <p className="tooltipText">...</p>, top: 12.5, defaultValue: null, placeholder: "City", type: null, size: "medium", margin: "small"},],
  ["invisible",{name: "b_tel_int_vorwahl", tooltip: <p className="tooltipText">...</p>, top: 17.5, defaultValue: null, placeholder: "Country Code", type: null, size: "small", margin: "small"},
  {name: "b_vorwahl_tel", tooltip: <p className="tooltipText">...</p>, top: 17.5, defaultValue: null, placeholder: "Area Code", type: null, size: "small", margin: "medium"},
  {name: "b_rufnummer_tel", tooltip: <p className="tooltipText">...</p>, top: 17.5, defaultValue: null, placeholder: "Phone Number", type: null, size: "medium", margin: "medium"},
  {name: "b_e_mail", tooltip: <p className="tooltipText">...</p>, top: 17.5, defaultValue: null, placeholder: "Email", type: null, size: "medium", margin: "medium"},],

]},
{title: "Document Recipient", display:"block", inputFields:[
  [{name: "doc_recipient", text:"Are you recieving all your documents?", tooltip: 
  <p className="tooltipText">Typically you get all your documents. If someone else shall recieve them, add there informations here.<br/>This can be changed whenever you want.<br/><b>You will have to sign a seperate attached mandate.</b> </p>, 
  top: 0, defaultValue: ["me","not me"], placeholder: ["me","not me"], type: "radio", size: "medium", margin: "medium"},
  {name: "vollmacht_x", tooltip: <p className="tooltipText">null</p>, top: 3.5, defaultValue: "x", placeholder: null, type: null, size:null, margin:null},
  {name: "vollmacht_attached", tooltip: <p className="tooltipText">null</p>, top: 3.5, defaultValue: "x", placeholder: null, type: null, size:null, margin:null},],
  ["invisible",{name: "doc_firma", tooltip: <p className="tooltipText">Enter this only if applicable.</p>, top: 9, defaultValue: null, placeholder: "Company Name", type: null, size: "medium", margin: "medium"},
  {name: "doc_lastname", tooltip: <p className="tooltipText">...</p>, top: 9, defaultValue: null, placeholder: "Last Name", type: null, size: "medium", margin: "medium"},
  {name: "doc_firstname", tooltip: <p className="tooltipText">...</p>, top: 9, defaultValue: null, placeholder: "First Name", type: null, size: "medium", margin: "medium"},],
  ["invisible",{name: "doc_strasse",tooltip: <p className="tooltipText">...</p>, top: 13, defaultValue: null, placeholder: "Street", type: null, size: "medium", margin: "medium"},
  {name: "doc_hausnummer",tooltip: <p className="tooltipText">...</p>, top:  13, defaultValue: null, placeholder: "Nr", type: null, size: "small", margin: "small"},
  {name: "doc_adressergaenzung", tooltip: <p className="tooltipText">...</p>, top: 13, defaultValue: null, placeholder: "Addon", type: null, size: "small", margin: "medium"},
  {name: "doc_postleitzahl",tooltip: <p className="tooltipText">...</p>, top: 13, defaultValue: null, placeholder: "Post Code", type: null, size: "medium", margin: "medium"},
  {name: "doc_city", tooltip: <p className="tooltipText">...</p>, top: 13, defaultValue: null, placeholder: "City", type: null, size: "medium", margin: "small"},],
  ["invisible",{name: "doc_tel_int_vorwahl",tooltip: <p className="tooltipText">...</p>, top: 3.5, defaultValue: null, placeholder: "Country Code", type: null, size: "small", margin: "small"},
  {name: "doc_vorwahl_tel",tooltip: <p className="tooltipText">...</p>, top: 17, defaultValue: null, placeholder: "Area Code", type: null, size: "small", margin: "medium"},
  {name: "doc_rufnummer_tel",tooltip: <p className="tooltipText">...</p>, top: 17, defaultValue: null, placeholder: "Phone Number", type: null, size: "medium", margin: "medium"},
  {name: "doc_e_mail", tooltip: <p className="tooltipText">...</p>, top: 17, defaultValue: null, placeholder: "Email", type: null, size: "medium", margin: "medium"},],
]},

{title: "Previous Life", display:"block", inputFields:[
  [{name: "pre_strasse", tooltip: <p className="tooltipText">?</p>, top: 5, defaultValue: null, placeholder: "Street", type: null, size: "medium", margin: "small"},
  {name: "pre_hausnummer", tooltip: <p className="tooltipText">?</p>, top: 5, defaultValue: null, placeholder: "Nr", type: null, size: "small", margin: "medium"},
  {name: "pre_adressergaenzung", tooltip: <p className="tooltipText">?</p>, top: 5, defaultValue: null, placeholder: "Addon", type: null, size: "small", margin: "medium"},
  {name: "pre_postleitzahl",  tooltip: <p className="tooltipText">?</p>, top: 5, defaultValue: null, placeholder: "Post Code", type: null, size: "medium", margin: "medium"},
  {name: "pre_city", tooltip: <p className="tooltipText">?</p>, top: 5, defaultValue: null, placeholder: "City", type: null, size: "medium", margin: "small"},],
  [{name: "pre_finanzamt", tooltip: <p className="tooltipText">?</p>, top: 9, defaultValue: null, placeholder: "Tax Office", type: null, size: "large", margin: "medium"},
  {name: "pre_steuernummer", tooltip: <p className="tooltipText">?</p>, top: 9, defaultValue: null, placeholder: "Tax ID", type: null, size: "large", margin: "medium"},],

  [{name: "old_tax_id", text:"Old Tax ID", tooltip: <p className="tooltipText">?</p>, top: 13, defaultValue: ["yes","no"], placeholder: ["yes","no"], type: "radio", size: "medium", margin: "medium"},
  {name: "old_tax_yes", tooltip: <p className="tooltipText">null</p>, top: 13, defaultValue: "x", placeholder: null, type: null, size:null, margin:null},
  {name: "old_tax_no", tooltip: <p className="tooltipText">null</p>, top: 13, defaultValue: "x", placeholder: null, type: null, size:null, margin:null},],
  
  ["invisible",{name: "pre_ustid", tooltip: <p className="tooltipText">...</p>, top: 17, defaultValue: null, placeholder: "Sales Tax ID", type: null, size: "medium", margin: "medium"},
  {name: "pre_ustid_yes", tooltip: <p className="tooltipText">null</p>, top: 17, defaultValue: null, placeholder: null, type: null, size:null, margin:null},
  {name: "pre_ustid_no", tooltip: <p className="tooltipText">null</p>, top: 17, defaultValue: null, placeholder: null, type: null, size:null, margin:null},
  {name: "pre_ustid_date", tooltip: <p className="tooltipText">Enter the date in the following format: DD/MM/YYYY</p>, top: 17, defaultValue: null, placeholder: "USTID Date", type: null, size: "medium", margin: "medium"},],  
]},

{title: "Workplace",display:"block", inputFields:[
  [{name: "dif_firm_address", text:"Is your Workplace not at home?", tooltip: 
  <p className="tooltipText">All tax related documents will be send to this address. Even when you work not from home you can decide to register your business there. 
  This might make sense if your workplace is a studio or workshop.</p>, top: 0, defaultValue: ["not home","home"], placeholder: ["Not Home","Home"], type: "radio", size: "medium", margin: "medium"},],

  ["invisible",{name: "firm_bezeichnung",tooltip: <p className="tooltipText">?</p>, top: 9, defaultValue: null, placeholder: "Company Name", type: null, size: "medium", margin: "medium"},],
  ["invisible",{name: "firm_strasse",tooltip: <p className="tooltipText">?</p>, top: 12.5, defaultValue: null, placeholder: "Street", type: null, size: "medium", margin: "medium"},
  {name: "firm_hausnummer",tooltip: <p className="tooltipText">?</p>, top: 12.5, defaultValue: null, placeholder: "Nr", type: null, size: "small", margin: "small"},
  {name: "firm_adressergaenzung",tooltip: <p className="tooltipText">?</p>, top: 12.5, defaultValue: null, placeholder: "Addon", type: null, size: "small", margin: "medium"},
  {name: "firm_postleitzahl",tooltip: <p className="tooltipText">?</p>, top: 12.5, defaultValue: null, placeholder: "Post Code", type: null, size: "medium", margin: "medium"},
  {name: "firm_city", tooltip: <p className="tooltipText">?</p>, top: 12.5, defaultValue: null, placeholder: "City", type: null, size: "medium", margin: "small"},],
  ["invisible",{name: "firm_tel_int_vorwahl", tooltip: <p className="tooltipText">?</p>, top: 17.5, defaultValue: null, placeholder: "Country Code", type: null, size: "small", margin: "small"},
  {name: "firm_vorwahl_tel", tooltip: <p className="tooltipText">?</p>, top: 17.5, defaultValue: null, placeholder: "Area Code", type: null, size: "small", margin: "medium"},
  {name: "firm_rufnummer_tel",tooltip: <p className="tooltipText">?</p>, top: 17.5, defaultValue: null, placeholder: "Phone Number", type: null, size: "medium", margin: "small"},],
  ["invisible",{name: "firm_e_mail", tooltip: <p className="tooltipText">?</p>, top: 21.5, defaultValue: null, placeholder: "Email", type: null, size: "medium", margin: "medium"},
  {name: "firm_website", tooltip: <p className="tooltipText">?</p>, top: 21.5, defaultValue: null, placeholder: "Website", type: null, size: "medium", margin: "medium"},],

]},

{title: "Exptected Income", display:"block", inputFields:[
  [{type:"text", text:"First Year"}],
  [{name: "u_betrag1", tooltip: <p className="tooltipText">Enter your expected income through self-employment for the first year of your business. 
  <br/>All of these numbers should estimates.<br/><br/>There is no direct consquence if these numbers dont hold up to reality. As a rule of thumb keep it at the lower reasonable end. <br/><br/>
  <b>Important</b><br/>You can enter your self-employment income here only if your job is in this <a href="" target="_blank" rel="noopener noreferrer">list.</a> Otherwise you enter it in Business Revenue.</p>, 
  top: 5, defaultValue: null, placeholder: "Selfemployment Income", type: null, size: "medium", margin: "medium"},
  {name: "u_betrag2", tooltip: <p className="tooltipText">Enter your expected income through employment for the first year of your business. 
  <br/>All of these numbers should estimates.<br/><br/>There is no direct consquence if these numbers dont hold up to reality. As a rule of thumb keep it at the lower reasonable end.</p>,
   top: 5, defaultValue: null, placeholder: "Salary", type: null, size: "medium", margin: "medium"},
  {name: "u_betrag3", tooltip: <p className="tooltipText">Enter your expected income through investments for the first year of your business. 
  <br/>All of these numbers should estimates.<br/><br/>There is no direct consquence if these numbers dont hold up to reality. As a rule of thumb keep it at the lower reasonable end.</p>,
   top: 5, defaultValue: null, placeholder: "Capital Gains", type: null, size: "medium", margin: "medium"},
  {name: "u_betrag5", tooltip: <p className="tooltipText">Enter the estimated revenue of your business for the first year. 
   <br/>All of these numbers should estimates.<br/><br/>There is no direct consquence if these numbers dont hold up to reality. As a rule of thumb keep it at the lower reasonable end.</p>,
    top: 5, defaultValue: null, placeholder: "Business Revenue", type: null, size: "medium", margin: "medium"},],
  [{name: "u_betrag4", tooltip: <p className="tooltipText">Enter your expected income through other sources for the first year of your business. 
  <br/><br/>This could be child benefits, BaföG, scholarships or grants etc.<br/>All of these numbers should estimates.<br/><br/>There is no direct consquence if these numbers dont hold up to reality. As a rule of thumb keep it at the lower reasonable end.</p>,
   top: 5, defaultValue: null, placeholder: "Other Income", type: null, size: "medium", margin: "medium"},
  {name: "u_sonderausgaben1",tooltip: <p className="tooltipText">Enter the sum of your estimated special expenses. Those could be insurance, professional liability etc.
  <br/>For a more comprehensive list click here: <a href="" target="_blank" rel="noopener noreferrer">german</a>
  <a href="" target="_blank" rel="noopener noreferrer">english</a></p>, top: 11.5, defaultValue: null, placeholder: "Special Expenses", type: null, size: "medium", margin: "medium"},
  {name: "u_steuerabzug1", tooltip: <p className="tooltipText">Enter the sum of your estimated special expenses.</p>, top: 11.5, defaultValue: null, placeholder: "Tax Deductions", type: null, size: "medium", margin: "medium"},
  {name: "sum1", tooltip: <p className="tooltipText">...</p>, top: 16, defaultValue: null, placeholder: "Total Revenue", type: null, size: "medium", margin: "medium"},],
  [{type:"text", text:"Second Year"}],
  [{name: "u_betrag6", tooltip: <p className="tooltipText">Enter your expected income through self-employment for the second year of your business. 
  <br/>All of these numbers should estimates.<br/><br/>There is no direct consquence if these numbers dont hold up to reality. As a rule of thumb keep it at the lower reasonable end. <br/><br/>
  <b>Important</b><br/>You can enter your self-employment income here only if your job is in this <a href="" target="_blank" rel="noopener noreferrer">list.</a> Otherwise you enter it in Business Revenue.</p>, top: 23, defaultValue: null, placeholder: "Selfemployment Income", type: null, size: "medium", margin: "medium"},
  {name: "u_betrag7", tooltip: <p className="tooltipText">Enter your expected income through employment for the second year of your business. 
  <br/>All of these numbers should estimates.<br/><br/>There is no direct consquence if these numbers dont hold up to reality. As a rule of thumb keep it at the lower reasonable end.</p>, top: 23, defaultValue: null, placeholder: "Salary", type: null, size: "medium", margin: "medium"},
  {name: "u_betrag8", tooltip: <p className="tooltipText">Enter your expected income through investments for the second year of your business. 
  <br/>All of these numbers should estimates.<br/><br/>There is no direct consquence if these numbers dont hold up to reality. As a rule of thumb keep it at the lower reasonable end.</p>, top: 23, defaultValue: null, placeholder: "Capital Gains", type: null, size: "medium", margin: "medium"},
  {name: "u_betrag10", tooltip: <p className="tooltipText">Enter the estimated revenue of your business for the second year. 
  <br/>All of these numbers should estimates.<br/><br/>There is no direct consquence if these numbers dont hold up to reality. As a rule of thumb keep it at the lower reasonable end.</p>,
  top: 23, defaultValue: null, placeholder: "Business Revenue", type: null, size: "medium", margin: "medium"},],
  [{name: "u_betrag9", tooltip: <p className="tooltipText">Enter your expected income through other sources for the second year of your business. 
  <br/><br/>This could be child benefits, BaföG, scholarships or grants etc.<br/>All of these numbers should estimates.<br/><br/>There is no direct consquence if these numbers dont hold up to reality. As a rule of thumb keep it at the lower reasonable end.
  </p>, top: 23, defaultValue: null, placeholder: "Other Income", type: null, size: "medium", margin: "medium"},
  {name: "u_sonderausgaben2", tooltip: <p className="tooltipText">Enter the sum of your estimated special expenses. Those could be insurance, professional liability etc.
  <br/>For a more comprehensive list click here: <a href="" target="_blank" rel="noopener noreferrer">german</a>
  <a href="" target="_blank" rel="noopener noreferrer">english</a></p>, top: 27, defaultValue: null, placeholder: "Special Expenses", type: null, size: "medium", margin: "medium"},
  {name: "u_steuerabzug2", tooltip: <p className="tooltipText">...</p>, top: 27, defaultValue: null, placeholder: "Tax Deductions", type: null, size: "medium", margin: "medium"},],
  [{name: "sum2", tooltip: <p className="tooltipText">...</p>, top: 31.5, defaultValue: null, placeholder: "Total Revenue", type: null, size: "medium", margin: "medium"},],
]},


{title: "Partner Exptected Income", display:"none", inputFields:[
  [{type:"text", text:"First Year"}],
  [{name: "p_betrag1", tooltip: <p className="tooltipText">Test test Test</p>, top: 7.5, defaultValue: null, placeholder: "Selfemployment Income", type: null, size: "medium", margin: "medium"},
  {name: "p_betrag2", tooltip: <p className="tooltipText">...</p>, top: 7.5, defaultValue: null, placeholder: "Salary", type: null, size: "medium", margin: "medium"},
  {name: "p_betrag3", tooltip: <p className="tooltipText">...</p>, top: 7.5, defaultValue: null, placeholder: "Capital Gains", type: null, size: "medium", margin: "medium"},
  {name: "p_betrag4", tooltip: <p className="tooltipText">...</p>, top: 7.5, defaultValue: null, placeholder: "Other Income", type: null, size: "medium", margin: "medium"},],
  [{name: "p_sonderausgaben1", tooltip: <p className="tooltipText">...</p>, top: 11.5, defaultValue: null, placeholder: "Special Expenses", type: null, size: "medium", margin: "medium"},
  {name: "p_steuerabzug1", tooltip: <p className="tooltipText">...</p>, top: 11.5, defaultValue: null, placeholder: "Tax Deductions", type: null, size: "medium", margin: "medium"},],
  [{type:"text", text:"Second Year"}],
  [{name: "p_betrag5", tooltip: <p className="tooltipText">Test</p>, top: 18.5, defaultValue: null, placeholder: "Selfemployment Income", type: null, size: "medium", margin: "medium"},
  {name: "p_betrag6", tooltip: <p className="tooltipText">...</p>, top: 18.5, defaultValue: null, placeholder: "Salary", type: null, size: "medium", margin: "medium"},
  {name: "p_betrag7", tooltip: <p className="tooltipText">...</p>, top: 18.5, defaultValue: null, placeholder: "Capital Gains", type: null, size: "medium", margin: "medium"},
  {name: "p_betrag8", tooltip: <p className="tooltipText">...</p>, top: 18.5, defaultValue: null, placeholder: "Other Income", type: null, size: "medium", margin: "medium"},],
  [{name: "p_sonderausgaben2", tooltip: <p className="tooltipText">...</p>, top: 22.5, defaultValue: null, placeholder: "Special Expenses", type: null, size: "medium", margin: "medium"},
  {name: "p_steuerabzug2", tooltip: <p className="tooltipText">...</p>, top: 22.5, defaultValue: null, placeholder: "Tax Deductions", type: null, size: "medium", margin: "medium"},],
]},

{title: "Small Business Rule", display:"block", inputFields:[
  [{name: "small_business", text:"Do you want to use the Kleinunternehmer-Regelung?", tooltip: <p className="tooltipText">...</p>, top: 0, defaultValue: ["yes","no"], placeholder: ["yes","no"], type: "radio", size: "medium", margin: "medium"},
  {name: "small_business_yes", tooltip: <p className="tooltipText">null</p>, top: 0, defaultValue: "x", placeholder: null, type: null, size:null, margin:null},
  {name: "small_business_no", tooltip: <p className="tooltipText">null</p>, top: 0, defaultValue: "x", placeholder: null, type: null, size:null, margin:null},],
]},

{title: "Unique Tax Law", display:"block", inputFields:[
  [{name: "sonstig",tooltip: <p className="tooltipText">...</p>, top: 5, defaultValue: null, placeholder: "Other Applicable Tax Rates", type: null, size: "large", margin: "medium"},
  {name: "sonstig_x", tooltip: <p className="tooltipText">null</p>, top: 3.5, defaultValue: "x", placeholder: null, type: null, size:null, margin:null},],
  [{name: "steuerbefreiung", tooltip: <p className="tooltipText">...</p>, top: 9, defaultValue: null, placeholder: "Tax Exemption", type: null, size: "large", margin: "small"},
  {name: "steuerbefreiung_art", tooltip: <p className="tooltipText">...</p>, top: 9, defaultValue: null, placeholder: "Article", type: null, size: "small", margin: "small"},],
  [{name: "durchschnittssteuer", tooltip: <p className="tooltipText">null</p>, top: 3.5, defaultValue: null, placeholder: null, type: null, size:null, margin:null},
  {name: "durchschnittssteuer_art", tooltip: <p className="tooltipText">null</p>, top: 3.5, defaultValue: null, placeholder: null, type: null, size:null, margin:null},],
  [{name: "steuerbefreiung_yes", tooltip: <p className="tooltipText">null</p>, top: 3.5, defaultValue: "x", placeholder: null, type: null, size:null, margin:null},
  {name: "steuerbefreiung_no",  tooltip: <p className="tooltipText">null</p>, top: 3.5, defaultValue: "x", placeholder: null, type: null, size:null, margin:null},],
  [{name: "steuersatz_yes", tooltip: <p className="tooltipText">null</p>, top: 3.5, defaultValue: "x", placeholder: null, type: null, size:null, margin:null},
  {name: "steuersatz_no",  tooltip: <p className="tooltipText">null</p>, top: 3.5, defaultValue: "x", placeholder: null, type: null, size:null, margin:null},],
]},

{title: "Last Page", display:"block", inputFields:[
  [{name: "city and date", tooltip: <p className="tooltipText">...</p>, top: 5, defaultValue: null, placeholder: "City,  DD/MM/YYYY", type: null, size: "large", margin: "medium"},],
]},
];





