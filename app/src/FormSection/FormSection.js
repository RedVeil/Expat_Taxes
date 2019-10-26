import React from "react";
import Tooltips from "../Tooltips/Tooltips";
import FormContent from "./FormContent";
import Grid from '@material-ui/core/Grid';
import "./FormSection.css"


export default function FormSection(formSectionData, showTooltip, onChangeSave, handleRadioForms) {
  let tooltips = [];
  for (let row = 0; row < formSectionData.inputFields.length; row++) {
    let i = 0
    if (formSectionData.inputFields[row][0] === "invisible"){
      i=1
    };
    for (i; i < formSectionData.inputFields[row].length; i++) {
      tooltips.push({ id: formSectionData.inputFields[row][i].name, text: formSectionData.inputFields[row][i].tooltip, top:formSectionData.inputFields[row][i].top})
    }
  };

  return (
    <div className="formSection" id={`${formSectionData.title}-section`} style={{display:formSectionData.display}}>
      <Grid container spacing={0}>
        <Grid item xs={0} sm={4} md={3} lg={3}>
          <div className="tooltipContainer">
            {Tooltips(tooltips)}
          </div>
        </Grid>
        <Grid item xs={12} sm={8} md={9} lg={9}>
          <div className="formContainer">
            <h2>{formSectionData.title}</h2>
            {FormContent(formSectionData.inputFields, formSectionData.title, showTooltip, onChangeSave, handleRadioForms)}
          </div>
        </Grid>
      </Grid>
    </div>
  )
};

/*



*/