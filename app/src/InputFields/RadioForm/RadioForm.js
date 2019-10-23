import React from 'react';
import './RadioForm.css'

export default function createRadioForm(radioForm, onFocusFunction,handleRadioForms) {
  let newRadioForm = []
  for (var i = 0; i < radioForm.placeholder.length; i++){
    newRadioForm.push(
      <div className="radioButtonContainer">
        <label className="buttonField" htmlFor={`${radioForm.name}-${i}`} style={{fontSize:"1em", display: "inline-block"}}>{radioForm.placeholder[i]}
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
    <div className="radioForm" style={{marginRight:marginStyle[radioForm.margin]}}>
      <form >
        <h3>{radioForm.text}</h3>
        <div className="radioButtons">{newRadioForm}</div>
      </form>
    </div>
  )
  };