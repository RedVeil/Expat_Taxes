import React from 'react';
import './RadioForm.css'
import ReactTooltip from "react-tooltip";

export default function RadioForm(radioForm, onFocusFunction,handleRadioForms,tooltip) {
  let newRadioForm = []
  for (var i = 0; i < radioForm.placeholder.length; i++){
    newRadioForm.push(
      <div className="radioButtonContainer">
        <label className="buttonField" htmlFor={`${radioForm.name}-${i}`} style={{fontSize: "1.2em", display: "inline-block"}}>{radioForm.placeholder[i]}
          <input type="radio" id={`${radioForm.name}-${i}`} name={radioForm.name} defaultValue={radioForm.defaultValue[i]} onFocus={onFocusFunction} onChange={handleRadioForms}></input>
          <span className="checkmark"></span>
        </label>
      </div>
    )
  }

  const marginStyle = {
    small:"0.5em",
    medium:"1em",
    large:"1em",
  };

  return (
    <div className="radioForm"
         style={{marginRight:marginStyle[radioForm.margin]}}
         data-tip data-for={tooltip.id}>
      <form >
        <h3 className="radioText">{radioForm.text}</h3>
        <div className="radioButtons">{newRadioForm}</div>
      </form>
      <ReactTooltip className="tooltip" id={tooltip.id} effect={"solid"}>{tooltip.text}</ReactTooltip>
    </div>
  )
  };