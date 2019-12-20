import React from "react";

export const steuerlicheErfassungFormData = [
  {
    title: "Personal Informations", display: "block", inputFields: [
      <InputField id= "u_birthday" tooltipText="Enter the date in the following format: DD/MM/YYYY."  placeholder= "Birthday"   </Grid>
,
      <Grid item xs={12}>
<InputField id= "u_strasse" tooltipText="Enter the street you live in."  placeholder= "Street"   />
      <InputField id= "u_hausnummer" tooltipText="Enter your street number."  placeholder= "Nr"   />
      <InputField id= "u_hausnummer_zusatz" tooltipText="Include this, if you live in a rear or side building."  placeholder= "Addition"   />
      <InputField id= "u_postleitzahl" tooltipText="Enter your Post Code / Zip Code."  placeholder= "Post Code"   />
      <InputField id= "u_city" tooltipText=""  placeholder= "City"   /></Grid>
,
      <Grid item xs={12}>
<InputField id= "tel_int_vorwahl" tooltipText="The first part of your number: [+49] 17675242879[0] 17675242879"  placeholder= "Country Code"   />
      <InputField id= "vorwahl_tel" tooltipText="The second part of your number: +49 [176] 752428790 [176] 75242879"  placeholder= "Area Code"   />
      <InputField id= "rufnummer_tel" tooltipText="The third part of your number: +49176 [75242879]0176 [75242879]"  placeholder= "Phone Number"   />
      <InputField id= "e_mail" tooltipText="Use your business relevant email adress."  placeholder= "Email"   />
      <InputField id= "website" tooltipText="Use the website for you corresponding business."  placeholder= "Website"   /></Grid>
,
      <Grid item xs={12}>
<InputField id= "u_current_job" tooltipText="If you have more than one Job, choose the one where you earn the most."  placeholder= "Job Title/Job Description"   />
      <InputField id= "u_id" tooltipText="You got your "Identifikationsnummer" with your "Anmeldung".If you are not sure where to find it click here..."   placeholder= "Identification-Number"   /></Grid>
,
      <Grid item xs={12}>
{
        id= "u_reli", text: "Do you have to pay church tax?" tooltipText="Church tax is added to your regular tax and send directly to your church." 
        defaultValue: ["EV", "RK", "VD"], placeholder= ["Evangelic", "Roman Catholic", "No Christian Church Tax"], type: "radio",  
      /></Grid>
,
    ]
  />

  {
    title: "Your Tax Office", display: "block", inputFields: [
      <Grid item xs={12}>
{
        id= "finanzamt" tooltipText="The name of your tax office is based on your district.
   If follows this pattern "Finanzamt" + Area. If you live in Mitte your Finanzamt would be called: "Finanzamt Mitte".
  "   placeholder= "Tax Office"  
      />
      <InputField id= "u_tax_id" tooltipText="Enter if you have one already, otherwise leave this blank."   placeholder= "Tax ID/></Grid>
,
    ]
  />

  {
    title: "Your Partner", display: "block", inputFields: [
      <Grid item xs={12}>
<InputField id= "married", text: "Are you married?" tooltipText=""  defaultValue: ["yes", "no"], placeholder= ["Yes", "No"], type: "radio",   }</Grid>
,
      <Grid item xs={12}>
 <InputField id= "marriage_date" tooltipText="Enter the date in the following format: DD/MM/YYYY."  placeholder= "Marriage Date"   /></Grid>
,
      <Grid item xs={12}>
 <InputField id= "p_firstname" tooltipText="If they have a middle name add it here."   placeholder= "First Name"   />
        <InputField id= "p_lastname" tooltipText=""   placeholder= "Last Name"   />
        <InputField id= "p_birth_name" tooltipText="You need to fill this if your partners maiden name is different to their current last name."   placeholder= "Maiden Name", type:
          null,  />
        <InputField id= "p_birthday" tooltipText="Enter the date in the following format: DD/MM/YYYY."   placeholder= "Birthday"   /></Grid>
,
      <Grid item xs={12}>
 {
        id= "p_current_job" tooltipText="If they have more than one Job, choose the one where they earn the most."
          placeholder= "Job Title/ Job Description"  />
        <InputField id= "p_id" tooltipText="Only if they have a german Tax Id or had one before."   placeholder= "Identification-Number"   /></Grid>
,
      <Grid item xs={12}>
 {
        id= "p_reli", text: "Do they have to pay church tax?" tooltipText="Church tax is added to their regular tax and send directly to their church." 
        defaultValue: ["EV", "RK", "VD"], placeholder= ["Evangelic", "Roman Catholic", "No Christian Church Tax"], type: "radio",  /></Grid>
,
      <Grid item xs={12}>
 <InputField id= "live_together", text: "Do you live together?" tooltipText=""  defaultValue: ["yes", "no"], placeholder= ["Yes", "No"], type: "radio",   </Grid>
,
      <Grid item xs={12}>
 <InputField id= "p_strasse" tooltipText="Enter the street they live in."   placeholder= "Street"   />
        <InputField id= "p_hausnummer" tooltipText="Enter their street number."   placeholder= "Nr"   />
        <InputField id= "p_hausnummer_zusatz" tooltipText="Include this, if they live in a rear or side building."   placeholder= "Addon"   />
        <InputField id= "p_postleitzahl" tooltipText="What is their post code?"   placeholder= "Post Code"   />
        <InputField id= "p_city" tooltipText="In which city do they live?"   placeholder= "City"   </Grid>
,

      <Grid item xs={12}>
<InputField id= "old_marriage", text: "Have you been married before?" tooltipText=""  defaultValue: ["yes", "no"], placeholder= ["Yes", "No"], type: "radio",   </Grid>
,
      <Grid item xs={12}>
 <InputField id= "widow_date" tooltipText=""   placeholder= "Widow Date"   />
        <InputField id= "divorce_date" tooltipText=""   placeholder= "Divorce Date"   />
        <InputField id= "seperate_date" tooltipText=""   placeholder= "Seperation Date"   </Grid>
,
    ]
  />

  {
    title: "Your new Profession", display: "block", inputFields: [
      <Grid item xs={12}>
{
        id= "art_taetigkeit" tooltipText="Describe your Job, Job title and the industry you are working in. Enter as much as you want.
  e.g. If you have a website and make money through ads and affiliate-marketing you could write: "Managment of a website with income through advertisment and affiliate-marketing"
  Tip: It helps to be broad in the description as you can claim more expenses."   placeholder= "Freelance Job Description"  
      />
      <InputField id= "work_date" tooltipText="You can backdate this by up to 3 months to include preparation costs.Enter the date in the following format: DD/MM/YYYY"  placeholder= "Start of Occupation"   </Grid>
,
    ]
  />

  {
    title: "Your Bank Account", display: "block", inputFields: [
      <Grid item xs={12}>
{
        id= "iban_de" tooltipText="It is advised to use a business account here.
  It is possible to use your private bank account for business but this brings only more stress as you have to be very careful which expenses you claim.
                  Plus if the tax office has to check your finances they will go through every single personal expense.
  For your own sake please dont do it, use a seperate account for your business."   placeholder= "IBAN"  
      />
      <InputField id= "iban_int" tooltipText="Enter this only if you dont have a german bank account for your business."   placeholder= "IBAN International"   />
      <InputField id= "bic", xtooltipText= <span className="tooltipText">"   placeholder= "BIC"   />
      <InputField id= "holder" tooltipText="Simply your first-, middle- and last name."   placeholder= "Holder Name"   </Grid>
,
    ]
  />

  {
    title: "SEPA", display: "block", inputFields: [
      <Grid item xs={12}>
{
        id= "SEPA", text: "Do you want to use a SEPA-Mandate?" tooltipText="A SEPA-Mandate allows the tax office to automatically collect your taxes. Otherwise you have to transfer your taxes manually every month.
    A SEPA-Mandate is easier and a good option if your account is always covered. It always comes on a fixed date but if you cant pay it you have to pay extra penalties. Dont sign this if you want more flexibility about the timing of your payments or if your account is not covered through out the whole month.
    <b>You will have to sign a seperate attached mandate.</b>"  defaultValue: ["yes", "no"], placeholder= ["Yes", "No"], type: "radio",  
      />
      <InputField id= "sepa_x" tooltipText="null"  defaultValue: "x", placeholder= null size: null, margin: null </Grid>
,
    ]
  />

  {
    title: "Tax Consultant", display: "block", inputFields: [
      <Grid item xs={12}>
<InputField id= "tax_consultant", text: "Do you have a Tax Consultant?" tooltipText="" defaultValue: ["yes", "no"], placeholder= ["Yes", "No"], type: "radio",   />
      <InputField id= "tax_consultant_yes" tooltipText="null"  defaultValue: "x", placeholder= null size: null, margin: null />
      <InputField id= "tax_consultant_no" tooltipText="null"  defaultValue: "x", placeholder= null size: null, margin: null </Grid>
,

      <Grid item xs={12}>
 <InputField id= "steuerberater" tooltipText="Enter the name of your tax consultancy. Skip this if they operate udner their name."  placeholder= "Consultant Office"   />
      <InputField id= "b_firstname" tooltipText="Enter the first name of your personal tax consultant."  placeholder= "First Name"   />
      <InputField id= "b_lastname" tooltipText="Enter the last name of your personal tax consultant."  placeholder= "Last Name"   </Grid>
,
      <Grid item xs={12}>
 <InputField id= "b_strasse" tooltipText="Where is your tax consultant located?"   placeholder= "Street"   />
        <InputField id= "b_hausnummer" tooltipText="Where is your tax consultant located?"   placeholder= "Nr"   />
        <InputField id= "b_adressergaenzung" tooltipText="Include this, if they are located in a rear or side building."   placeholder= "Addon"   />
        <InputField id= "b_postleitzahl" tooltipText="Where is your tax consultant located?"   placeholder= "Post Code"   />
        <InputField id= "b_ort" tooltipText="Where is your tax consultant located?"   placeholder= "City"   </Grid>
,
      <Grid item xs={12}>
 <InputField id= "b_tel_int_vorwahl" tooltipText="What is their phone number?"   placeholder= "Country Code"   />
        <InputField id= "b_vorwahl_tel" tooltipText="What is their phone number?"   placeholder= "Area Code"   />
        <InputField id= "b_rufnummer_tel" tooltipText="What is their phone number?"   placeholder= "Phone Number"   />
        <InputField id= "b_e_mail" tooltipText="What is their email adress?"   placeholder= "Email"   </Grid>
,

    ]
  />
  {
    title: "Authorized Document Recipient", display: "block", inputFields: [
      <Grid item xs={12}>
{
        id= "doc_recipient", text: "Are you recieving all your documents?", tooltipText=
          <span className="tooltipText">Typically you get all your documents. If someone else shall recieve them, authorize them here.This can be changed whenever you want.<b>You will have to sign a seperate attached mandate.</b> "
         defaultValue: ["me", "not me"], placeholder= ["Yes", "No"], type: "radio",  
      />
      <InputField id= "vollmacht_x" tooltipText="null"  defaultValue: "x", placeholder= null size: null, margin: null />
      <InputField id= "vollmacht_attached" tooltipText="null"  defaultValue: "x", placeholder= null size: null, margin: null </Grid>
,
      <Grid item xs={12}>
 <InputField id= "doc_firma" tooltipText="Enter this only if applicable."  placeholder= "Company Name"   />
        <InputField id= "doc_firstname" tooltipText="Enter the first name of your authorized document recipient."  placeholder= "First Name"   />
        <InputField id= "doc_lastname" tooltipText="Enter the last name of your authorized document recipient."  placeholder= "Last Name"/>   </Grid>
,
      <Grid item xs={12}>
 <InputField id= "doc_strasse" tooltipText="Where is your authorized document recipient located?"   placeholder= "Street"   />
        <InputField id= "doc_hausnummer" tooltipText="Where is your authorized document recipient located?"   placeholder= "Nr"   />
        <InputField id= "doc_adressergaenzung" tooltipText="Include this, if they are located in a rear or side building."   placeholder= "Addon"   />
        <InputField id= "doc_postleitzahl" tooltipText="Where is your authorized document recipient located?"   placeholder= "Post Code"   />
        <InputField id= "doc_city" tooltipText="Where is your authorized document recipient located?"   placeholder= "City"/>   </Grid>
,
      <Grid item xs={12}>
 <InputField id= "doc_tel_int_vorwahl" tooltipText="What is their phone number?"   placeholder= "Country Code"   />
        <InputField id= "doc_vorwahl_tel" tooltipText="What is their phone number?"   placeholder= "Area Code"   />
        <InputField id= "doc_rufnummer_tel" tooltipText="What is their phone number?"   placeholder= "Phone Number"   />
        <InputField id= "doc_e_mail" tooltipText="What is their email adress?"   placeholder= "Email" />  </Grid>
,
    ]
  />

  {
    title: "Previous Residence", display: "block", inputFields: [
      <Grid item xs={12}>
{id="previous_residence",text: "Did you move in germany during the last 12 month?", 
      tooltipText=<span className="tooltipText">This is is important for the tax office to know. If you have moved, you were registered at another tax office before, 
      so they can request your old data."  defaultValue: ["yes", "no"], placeholder= ["Yes", "No"], type: "radio",   }],
      <Grid item xs={12}>
<InputField id= "migration_date" tooltipText="When did you move to your new home?Enter the date in the following format: DD/MM/YYYY" 
       placeholder= "Moving Date" />  </Grid>
,

      <Grid item xs={12}>
<InputField id= "pre_strasse" tooltipText="Enter the street you used to live in."   placeholder= "Street"   />
      <InputField id= "pre_hausnummer" tooltipText="Enter your old street number."   placeholder= "Nr"   />
      <InputField id= "pre_adressergaenzung" tooltipText="Include this, if you lived in a rear or side building."   placeholder= "Addon"   />
      <InputField id= "pre_postleitzahl" tooltipText="Enter your old post code."   placeholder= "Post Code"   />
      <InputField id= "pre_city" tooltipText="Enter the city you used to live in."   placeholder= "City"/>   </Grid>
,

      <Grid item xs={12}>
<InputField id= "old_tax_id", text: "Have you been registered for income tax in germany during the last 3 years?" tooltipText="" 
       defaultValue: ["yes", "no"], placeholder= ["Yes", "No"], type: "radio",   />
      <InputField id= "old_tax_yes" tooltipText=""  defaultValue: "x", placeholder= null size: null, margin: null />
      <InputField id= "old_tax_no" tooltipText=""  defaultValue: "x", placeholder= null size: null, margin: null </Grid>
,
      <Grid item xs={12}>
<InputField id= "pre_finanzamt" tooltipText=""   placeholder= "Old Tax Office"   />
      <InputField id= "pre_steuernummer" tooltipText=""   placeholder= "Old Tax ID" />   </Grid>
,

    ]
  />

  {
    title: "Business Adress", display: "block", inputFields: [
      <Grid item xs={12}>
{
        id= "dif_firm_address", text: "Where do you want to register your business?", tooltipText=
          <span className="tooltipText">Where do you want to register your business? All documents and letters will be send there.
  If your workplace is a studio or workshop, it might make sense to register your business at your home adress.<b>Your doorbell and mailbox must be tagged with the name of your business.</b>
            (This is obviously not necessary if you simply use your own name)"
         defaultValue: ["home", "not home"], placeholder= ["Home", "Somewhere Else"], type: "radio",  
      }],

      <Grid item xs={12}>
 <InputField id= "firm_bezeichnung" tooltipText="If you use your are self-employed and use your own name enter it here. Otherwise enter the name of your company. " 
        placeholder= "Company Name"   </Grid>
,
      <Grid item xs={12}>
 <InputField id= "firm_strasse" tooltipText="Enter the adress on which your business will be registered."   placeholder= "Street"   />
        <InputField id= "firm_hausnummer" tooltipText="Enter the adress on which your business will be registered."   placeholder= "Nr"   />
        <InputField id= "firm_adressergaenzung" tooltipText="Include this, if your business is in a rear or side building."   placeholder= "Addon"   />
        <InputField id= "firm_postleitzahl" tooltipText="Enter the adress on which your business will be registered."   placeholder= "Post Code"   />
        <InputField id= "firm_city" tooltipText="Enter the adress on which your business will be registered."   placeholder= "City"/>   </Grid>
,
      <Grid item xs={12}>
 <InputField id= "firm_tel_int_vorwahl" tooltipText="Enter the phone number of your business. (You can use your own, if you dont have an extra number)."  placeholder= "Country Code"   />
        <InputField id= "firm_vorwahl_tel" tooltipText="Enter the phone number of your business. (You can use your own, if you dont have an extra number)."  placeholder= "Area Code"   />
        <InputField id= "firm_rufnummer_tel" tooltipText="Enter the phone number of your business. (You can use your own, if you dont have an extra number)."  placeholder= "Phone Number" /> </Grid>
,
      <Grid item xs={12}>
 <InputField id= "firm_e_mail" tooltipText="Enter the email adress of your business."   placeholder= "Email"   />
        <InputField id= "firm_website" tooltipText="Enter the website of your business. Leave this blank if you dont have any."   placeholder= "Website" />  </Grid>
,

    ]
  />

  {
    title: "Expected Income", display: "block", inputFields: [
      <Grid item xs={12}>
{ type: "text", text: "First Year" }],
      <Grid item xs={12}>
{
        id= "u_betrag1" tooltipText="Enter your expected income through self-employment for the first year of your business.
  All of these numbers should estimates.There is no direct consquence if these numbers dont hold up to reality. As a rule of thumb keep it at the lower reasonable end. 
          <b><br/>You can enter your self-employment income here only if your job is in this <a href="" target="_blank" rel="noopener noreferrer">list.</a> Otherwise you enter it in Business Revenue.</b>"
         placeholder= "Selfemployment Income"  
      />
      {
        id= "u_betrag2" tooltipText="Enter your expected income through employment for the first year of your business.
  All of these numbers should estimates.There is no direct consquence if these numbers dont hold up to reality. As a rule of thumb keep it at the lower reasonable end."
         placeholder= "Salary"  
      />
      {
        id= "u_betrag3" tooltipText="Enter your expected income through investments for the first year of your business.
  All of these numbers should estimates.There is no direct consquence if these numbers dont hold up to reality. As a rule of thumb keep it at the lower reasonable end."
         placeholder= "Capital Gains"  
      />
      {
        id= "u_betrag9" tooltipText="Enter the estimated revenue of your business for the first year.
   All of these numbers should estimates.There is no direct consquence if these numbers dont hold up to reality. As a rule of thumb keep it at the lower reasonable end."
         placeholder= "Business Revenue"  
      </Grid>
,
      <Grid item xs={12}>
{
        id= "u_betrag4" tooltipText="Enter your expected income through other sources for the first year of your business.
  This could be child benefits, BaföG, scholarships or grants etc.All of these numbers should estimates.There is no direct consquence if these numbers dont hold up to reality. As a rule of thumb keep it at the lower reasonable end."
         placeholder= "Other Income"  
      />
      {
        id= "u_sonderausgaben1" tooltipText="Enter the sum of your estimated special expenses. Those could be insurance, professional liability etc.
  For a more comprehensive list click here: <a href="" target="_blank" rel="noopener noreferrer">german</a>,
          <a href="" target="_blank" rel="noopener noreferrer">english</a>"   placeholder= "Special Expenses"  
      />
      <InputField id= "u_steuerabzug1" tooltipText="List of tax deductions coming soon."   placeholder= "Tax Deductions"   />
      <InputField id= "sum1" tooltipText="Add your Business Revenue to your Selfemployment Income."   placeholder= "Total Revenue"   </Grid>
,
      <Grid item xs={12}>
{ type: "text", text: "Second Year" }],
      <Grid item xs={12}>
{
        id= "u_betrag5" tooltipText="Enter your expected income through self-employment for the second year of your business.
  All of these numbers should estimates.There is no direct consquence if these numbers dont hold up to reality. As a rule of thumb keep it at the lower reasonable end. 
  <b><br/>You can enter your self-employment income here only if your job is in this <a href="" target="_blank" rel="noopener noreferrer">list.</a> Otherwise you enter it in Business Revenue.</b>" 
            placeholder= "Selfemployment Income"  />
      <InputField id= "u_betrag6" tooltipText="Enter your expected income through employment for the second year of your business.
  All of these numbers should estimates.There is no direct consquence if these numbers dont hold up to reality. As a rule of thumb keep it at the lower reasonable end.
  "   placeholder= "Salary"  />
      {id= "u_betrag7" tooltipText="Enter your expected income through investments for the second year of your business.
  All of these numbers should estimates.There is no direct consquence if these numbers dont hold up to reality. As a rule of thumb keep it at the lower reasonable end." 
    placeholder= "Capital Gains"  />
      <InputField id= "u_betrag10" tooltipText="Enter the estimated revenue of your business for the second year.
  All of these numbers should estimates.There is no direct consquence if these numbers dont hold up to reality. As a rule of thumb keep it at the lower reasonable end."
          placeholder= "Business Revenue"  
      </Grid>
,
      <Grid item xs={12}>
{
        id= "u_betrag8" tooltipText="Enter your expected income through other sources for the second year of your business.
  This could be child benefits, BaföG, scholarships or grants etc.All of these numbers should estimates.There is no direct consquence if these numbers dont hold up to reality. As a rule of thumb keep it at the lower reasonable end.
  "   placeholder= "Other Income"  
      />
      {
        id= "u_sonderausgaben2" tooltipText="Enter the sum of your estimated special expenses. Those could be insurance, professional liability etc.
  For a more comprehensive list click here: <a href="localhost:3000/specialExpensesListGerman" target="_blank" rel="noopener noreferrer">german</a>,
          <a href="" target="_blank" rel="noopener noreferrer">english</a>"   placeholder= "Special Expenses"  
      />
      <InputField id= "u_steuerabzug2" tooltipText="List of tax deductions coming soon."   placeholder= "Tax Deductions"   />
      <InputField id= "sum2" tooltipText="Add your Business Revenue to your Selfemployment Income."   placeholder= "Total Revenue"   </Grid>
,
    ]
  />
  {title: "Partner Expected Income", display: "none", inputFields: [
      <Grid item xs={12}>
{ type: "text", text: "First Year" }],
      <Grid item xs={12}>
<InputField id= "p_betrag1" tooltipText='Enter their expected income through self-employment for the first year of their business.
  All of these numbers should estimates.There is no direct consquence if these numbers dont hold up to reality. As a rule of thumb keep it at the lower reasonable end. 
          <b>Important</b>You can enter their self-employment income here only if their job is in this <a href="" target="_blank" rel="noopener noreferrer">list.</a> Otherwise you enter it in Business Revenue.'
         placeholder= "Selfemployment Income"  
      />
      <InputField
        id= "p_betrag2" tooltipText="Enter their expected income through employment for the first year of their business.
  All of these numbers should estimates.There is no direct consquence if these numbers dont hold up to reality. As a rule of thumb keep it at the lower reasonable end."
         placeholder= "Salary"  
      />
      <InputField
        id= "p_betrag3" tooltipText="Enter their expected income through investments for the first year of their business.
  All of these numbers should estimates.There is no direct consquence if these numbers dont hold up to reality. As a rule of thumb keep it at the lower reasonable end."
         placeholder= "Capital Gains"  
      />
      <InputField
        id= "p_betrag9" tooltipText="Enter the estimated revenue of their business for the first year.
   All of these numbers should estimates.There is no direct consquence if these numbers dont hold up to reality. As a rule of thumb keep it at the lower reasonable end."
         placeholder= "Business Revenue"  />
      </Grid>
,
      <Grid item xs={12}>
<InputField
        id= "p_betrag4" tooltipText="Enter their expected income through other sources for the first year of their business.
  This could be child benefits, BaföG, scholarships or grants etc.All of these numbers should estimates.There is no direct consquence if these numbers dont hold up to reality. As a rule of thumb keep it at the lower reasonable end."
         placeholder= "Other Income"  
      />
      <InputField
        id= "p_sonderausgaben1" tooltipText='Enter the sum of their estimated special expenses. Those could be insurance, professional liability etc.
  For a more comprehensive list click here: <a href="" target="_blank" rel="noopener noreferrer">german </a>, 
          <a href="" target="_blank" rel="noopener noreferrer">english</a>'   placeholder= "Special Expenses"  
      />
      <InputField id= "p_steuerabzug1" tooltipText="List of tax deductions coming soon."   placeholder= "Tax Deductions" />  </Grid>
,
      <Grid item xs={12}>
{ type: "text", text: "Second Year" }],
      <Grid item xs={12}>
<InputField
        id= "p_betrag5" tooltipText="Enter their expected income through self-employment for the second year of their business.
  All of these numbers should estimates.There is no direct consquence if these numbers dont hold up to reality. As a rule of thumb keep it at the lower reasonable end. 
          <b>Important</b>You can enter their self-employment income here only if their job is in this <a href="" target="_blank" rel="noopener noreferrer">list.</a> Otherwise you enter it in Business Revenue."   placeholder= "Selfemployment Income"  
      />
      <InputField
        id= "p_betrag6" tooltipText="Enter their expected income through employment for the second year of their business.
  All of these numbers should estimates.There is no direct consquence if these numbers dont hold up to reality. As a rule of thumb keep it at the lower reasonable end."   placeholder= "Salary"  
      />
      <InputField
        id= "p_betrag7" tooltipText="Enter their expected income through investments for the second year of their business.
  All of these numbers should estimates.There is no direct consquence if these numbers dont hold up to reality. As a rule of thumb keep it at the lower reasonable end."   placeholder= "Capital Gains"  
      />
      <InputField
        id= "p_betrag10" tooltipText="Enter the estimated revenue of their business for the second year.
  All of these numbers should estimates.There is no direct consquence if these numbers dont hold up to reality. As a rule of thumb keep it at the lower reasonable end."
          placeholder= "Business Revenue"  />
      </Grid>
,
      <Grid item xs={12}>
<InputField
        id= "p_betrag8" tooltipText="Enter their expected income through other sources for the second year of their business.
  This could be child benefits, BaföG, scholarships or grants etc.All of these numbers should estimates.There is no direct consquence if these numbers dont hold up to reality. As a rule of thumb keep it at the lower reasonable end.
  "   placeholder= "Other Income"  
      />
      <InputField
        id= "p_sonderausgaben2" tooltipText='Enter the sum of their estimated special expenses. Those could be insurance, professional liability etc.
  For a more comprehensive list click here: <a href="localhost:3000/specialExpensesListGerman" target="_blank" rel="noopener noreferrer">german</a>,
          <a href="" target="_blank" rel="noopener noreferrer">english</a>'   placeholder= "Special Expenses"  
      />
      <InputField id= "p_steuerabzug2" tooltipText="List of tax deductions coming soon."   placeholder= "Tax Deductions" />  </Grid>
,
    ]
  />

    title: "Previous Business", display: "block", inputFields: [
      <Grid item xs={12}>
<InputField id= "old_business", text: "Did you have a business in Germany in the last 5 years?" tooltipText="Have you had a business or/and worked self-employed in germany during the past five years?" 
       defaultValue: ["yes", "no"], placeholder= ["Yes", "No"], type: "radio",   />
      <InputField id= "old_business_yes" tooltipText=""  defaultValue: "x", placeholder= null size: null, margin: null />
      <InputField id= "old_business_no" tooltipText=""  defaultValue: "x", placeholder= null size: null, margin: null </Grid>
,
      <Grid item xs={12}>

        <InputField id= "old_business_name" tooltipText="What was the name of your old business? <br/>Leave this out if you were simply self-employed."   placeholder= "Old Business"   />
        <InputField id= "old_business_city" tooltipText="Where did you worked/ Where was your business?"  placeholder= "City"   />
        <InputField id= "old_business_start_date" tooltipText="When did you start it?<br/>Enter the date in the following format: DD/MM/YYYY"  placeholder= "Start Date"   />
        <InputField id= "old_business_end_date" tooltipText="When did it end?<br/>Enter the date in the following format: DD/MM/YYYY"  placeholder= "End Date" /></Grid>
,
      <Grid item xs={12}>

        <InputField id= "old_business_finanzamt" tooltipText="At which tax office where you registered?"   placeholder= "Finanzamt"   />
        <InputField id= "old_business_tax_id" tooltipText="What was your old tax id?"   placeholder= "Tax Id"   />
        <InputField id= "old_business_ustid" tooltipText="What was your old sales tax id?(Umsatzsteuer-Identifikationsnummer)"   placeholder= "Ustid" />  </Grid>

    ]
  />

  {
    title: "Handelsregister", display: "block", inputFields: [
      <Grid item xs={12}>
<InputField id= "handelsregister", text: "Is your business registered at the Handelsregister?" tooltipText="..."  defaultValue: ["yes", "no"], placeholder= ["Yes", "No"], type: "radio",   />
      <InputField id= "handelsregister_yes" tooltipText="..."  defaultValue: "x", placeholder= null size: null, margin: null />
      <InputField id= "handelsregister_no" tooltipText="..."  defaultValue: "x", placeholder= null size: null, margin: null </Grid>
,
      <Grid item xs={12}>

        <InputField id= "handelsregister_date" tooltipText="Since when is your business registered"   placeholder= "Date" />
        <InputField id= "handelsregister_city1" tooltipText="In which city is your business registered?"   placeholder= "City" />
        <InputField id= "registry_number1" tooltipText="What is your registry number?"   placeholder= "Registry Number" /> </Grid>
,
      <Grid item xs={12}>

      <InputField id= "handelsregister_application_done", text: "Did you submit your application?", 
      tooltipText= <span className="tooltipText">Did you submit your application to a local court?" defaultValue: ["yes", "no"], placeholder= ["Yes", "Not Yet"], type: "radio",   />
      <InputField id= "application_intended" tooltipText="..."  defaultValue: "x", placeholder= null size: null, margin: null />
      <InputField id= "application_done" tooltipText="..."  defaultValue: "x", placeholder= null size: null, margin: null }],
      <Grid item xs={12}>

        <InputField id= "registration_done_date" tooltipText="When did you submit your application?<br/>Enter the date in the following format: DD/MM/YYYY" 
         placeholder= "Date"   />
        <InputField id= "handelsregister_city2" tooltipText="In which city is did you submit it?"   placeholder= "City"   />
        <InputField id= "registry_number2" tooltipText="What is your registry number?"   placeholder= "Registry Number" />
    ]
  />

  {
    title: "Kleinunternehmer-Regelung", display: "block", inputFields: [
      <Grid item xs={12}>
<InputField id= "small_business", text: "Do you want to use the Kleinunternehmer-Regelung?", tooltipText= 
      <span className="tooltipText">If your total revenue (Umsatz) is lower than 19.000€ you may decide to use the Kleinunternehmer-Regel (Small Business Rule).
      This means you dont have to pay any sales tax (Umsatzsteuer). <br/><b>In this case you can obviously not add sales tax to your receivables.</b><br/><br/>
      If you click "No" you simply pay sales tax and add it to your receivables."  defaultValue: ["yes", "no"], placeholder= ["Yes", "No"], type: "radio",   />
      <InputField id= "small_business_yes" tooltipText="null"  defaultValue: "x", placeholder= null size: null, margin: null />
      <InputField id= "small_business_no" tooltipText="null"  defaultValue: "x", placeholder= null size: null, margin: null </Grid>
,
    ]
  />

  {
    title: "Unique Tax Rules", display: "none", inputFields: [
      <Grid item xs={12}>
<InputField id= "steuerbefreiung" tooltipText="..."   placeholder= "Tax Exemption"   />
      <InputField id= "steuerbefreiung_art" tooltipText="Enter the article/paragraph number where your tax exemption is listed."   placeholder= "Article"/>   </Grid>
,
      <Grid item xs={12}>
<InputField id= "durchschnittssteuer" tooltipText="null"   placeholder="" />
      <InputField id= "durchschnittssteuer_art" tooltipText="null"   placeholder= "/>
,
      <Grid item xs={12}>
<InputField id= "steuerbefreiung_yes" tooltipText="null"  defaultValue: "x", placeholder= null size: null, margin: null />
      <InputField id= "steuerbefreiung_no" tooltipText="null"  defaultValue: "x", placeholder= null size: null, margin: null </Grid>
,
      <Grid item xs={12}>
<InputField id= "steuersatz_yes" tooltipText="null"  defaultValue: "x", placeholder= null size: null, margin: null />
      <InputField id= "steuersatz_no" tooltipText="null"  defaultValue: "x", placeholder= null size: null, margin: null </Grid>
,
    ]
  />

  {
    title: "Last Page", display: "block", inputFields: [
      <Grid item xs={12}>
<InputField id= "city and date" tooltipText="Enter the your current city and todays date."  placeholder= "City,  DD/MM/YYYY"   /></Grid>
,
    ]
  />
];





