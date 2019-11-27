import React from "react";
import InputField from "../InputFields/InputField/InputField";
import RadioForm from "../InputFields/RadioForm/RadioForm";
import styles from "./FormRow.module.css";
import { element } from "prop-types";


export default function FormRow(counter, rowCounter, rowInputFields, sectionTitle, showTooltip, onChangeSave, handleRadioForms, displayStyle, tooltips) {
  let formRow = [];
  for (let i = counter; i < rowInputFields.length; i++) {
    if (rowInputFields[i].type === "radio") {
      let tooltip = tooltips.find(element => element.id === `${rowInputFields[i].name}-tooltip`)
      formRow.push(RadioForm(rowInputFields[i], showTooltip, handleRadioForms,tooltip))
    };
    if (rowInputFields[i].size != null && rowInputFields[i].type !== "radio") {
      let tooltip = tooltips.find(element => element.id === `${rowInputFields[i].name}-tooltip`)
      formRow.push(InputField(rowInputFields[i], showTooltip, onChangeSave,tooltip))
    };
    if (rowInputFields[i].type === "text" && rowInputFields[i].text) {
      formRow.push(<h4 className="rowTitle">{rowInputFields[i].text}</h4>)
    }
  };
  return (
    <div className={styles.row} id={`${sectionTitle}-row-${rowCounter}`} style={{display: displayStyle}}>
      {formRow}
    </div>
    );
};