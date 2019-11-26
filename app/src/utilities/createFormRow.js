import React from "react";
import InputField from "../InputFields/InputField/InputField";
import RadioForm from "../InputFields/RadioForm/RadioForm";


export default function createFormRow(counter, rowCounter, rowInputFields, sectionTitle, showTooltip, onChangeSave, handleRadioForms, displayStyle, tooltip){
    let formRow = [];
    for (let i = counter; i<rowInputFields.length; i++){
      if(rowInputFields[i].type ==="radio"){
        formRow.push(RadioForm(rowInputFields[i], showTooltip, handleRadioForms))
      };
      if(rowInputFields[i].size != null && rowInputFields[i].type !== "radio"){
        formRow.push(InputField(rowInputFields[i], showTooltip, onChangeSave))
      };
      if(rowInputFields[i].type === "text" && rowInputFields[i].text){
        formRow.push(<h4 className="rowTitle">{rowInputFields[i].text}</h4>)
      }
    };
    return <div className="row" id={`${sectionTitle}-row-${rowCounter}`} style={{display:displayStyle, padding:"0", margin:"0 0 0.5em 0"}}>{formRow}<div>{tooltip}</div></div>;
  };