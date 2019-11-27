import React from "react";
import FormRow from "../FormRow/FormRow";

export default function FormSection(inputFields, sectionTitle, showTooltip, onChangeSave, handleRadioForms, tooltips){
  console.log(tooltips)
  let formSectionInputFields = [];
  for (let row=0; row<inputFields.length; row++){
    if (inputFields[row][0] === "invisible"){
      formSectionInputFields.push(FormRow(1, row, inputFields[row], sectionTitle, showTooltip, onChangeSave, handleRadioForms, "none", tooltips))
    }
    else{
      formSectionInputFields.push(FormRow(0, row, inputFields[row], sectionTitle, showTooltip, onChangeSave, handleRadioForms, "block",tooltips))
    };
  };
  return(
    <div style={{padding:"0 0 0 2em"}}>{formSectionInputFields}</div>
  )
}
