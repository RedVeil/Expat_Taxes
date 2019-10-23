import React from "react";
import createInputField from "../InputFields/InputField/InputField";
import createRadioForm from "../InputFields/RadioForm/RadioForm";

function createFormRow(counter, rowCounter, rowInputFields, sectionTitle, showTooltip, onChangeSave, handleRadioForms, displayStyle){
  let formRow = [];
  for (let i = counter; i<rowInputFields.length; i++){
    if(rowInputFields[i].type ==="radio"){
      formRow.push(createRadioForm(rowInputFields[i], showTooltip, handleRadioForms))
    };
    if(rowInputFields[i].size != null && rowInputFields[i].type !== "radio"){
      formRow.push(createInputField(rowInputFields[i], showTooltip, onChangeSave))
    };
    if(rowInputFields[i].type === "text" && rowInputFields[i].text){
      formRow.push(<h4 className="rowTitle">{rowInputFields[i].text}</h4>)
    }
  };
  return <div className="row" id={`${sectionTitle}-row-${rowCounter}`} style={{display:displayStyle, padding:"0.2 0 0.2em 0"}}>{formRow}</div>;
};


export default function createFormSection(inputFields, sectionTitle, showTooltip, onChangeSave, handleRadioForms){
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
