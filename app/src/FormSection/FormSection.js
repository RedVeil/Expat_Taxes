import React from "react";
import createTooltips from "./Tooltip";
import createFormContent from "./FormContent";
import Grid from '@material-ui/core/Grid';
import "./FormSection.css"

export default function createFormSection(formSectionDict) {
  const tooltips = formSectionDict.inputFields.map(function(inputField){
    return  {id: inputField.name, text:inputField.tooltip}
  });

  function showTooltip(event){
    let tooltip = document.getElementById(`${event.target.name}-tooltip`)
    tooltip.style.display = "inline-block"
  }

  function onChangeSave(){
    return true
  }
   
  return (
    <div className="formSection">
      <Grid container spacing={0}>
        <Grid item xs={3}>
          <div className="tooltipContainer">
            {createTooltips(tooltips)}
          </div>
        </Grid>
        <Grid item xs={9}>
          <div className="formContainer">
            <h2>{formSectionDict.title}</h2>         
            {createFormContent(formSectionDict.inputFields, showTooltip, onChangeSave)}
          </div>
        </Grid>
      </Grid>
    </div>
  )
};