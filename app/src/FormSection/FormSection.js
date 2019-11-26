import React from "react";
import Tooltips from "../Tooltips/Tooltips";
import FormContent from "../FormContent/FormContent";
import Grid from '@material-ui/core/Grid';
import styles from "./FormSection.module.css";
import getTooltips from "../utilities/getTooltips";


export default function FormSection(formSectionData, showTooltip, onChangeSave, handleRadioForms) {
  const tooltips = getTooltips(formSectionData.inputFields)

  return (
    <div className={styles.formSection} id={`${formSectionData.title}-section`} style={{display:formSectionData.display}}>
        <h2>{formSectionData.title}</h2>
        {FormContent(formSectionData.inputFields, formSectionData.title, showTooltip, onChangeSave, handleRadioForms, tooltips)}
    </div>
  )
};