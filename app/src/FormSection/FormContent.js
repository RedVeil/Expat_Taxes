import React from "react";
import createInputField from "../InputFields/InputField/InputField";
import createRadioForm from "../InputFields/RadioForm/RadioForm";

export default function createFormSection(inputFields, showTooltip, onChangeSave){
  const formSectionInputFields = inputFields.map(function(inputField){
    if(inputField.type ==="radio"){
      return createRadioForm(inputField, showTooltip)
    }
    if(inputField.size !== null){
      return createInputField(inputField, showTooltip, onChangeSave)
    }
    })
  return(
    <div style={{padding:"0 0 1.2em 0"}}>{formSectionInputFields}</div>
  )
}
