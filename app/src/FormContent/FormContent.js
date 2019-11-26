import React from "react";
import createFormRow from "../utilities/createFormRow";

export default function FormSection(inputFields, sectionTitle, showTooltip, onChangeSave, handleRadioForms){
  let formSectionInputFields = [];
  for (let row=0; row<inputFields.length; row++){
    if (inputFields[row][0] === "invisible"){
      formSectionInputFields.push(createFormRow(1, row, inputFields[row], sectionTitle, showTooltip, onChangeSave, handleRadioForms, "none"))
    }
    else{
      formSectionInputFields.push(createFormRow(0, row, inputFields[row], sectionTitle, showTooltip, onChangeSave, handleRadioForms, "block"))
    };
  };
  return(
    <div style={{padding:"0 0 0 2em"}}>{formSectionInputFields}</div>
  )
}
