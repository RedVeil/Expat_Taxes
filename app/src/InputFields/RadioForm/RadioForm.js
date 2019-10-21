import React from 'react';
import './RadioForm.css'

export default function createRadioForm(radioForm, onFocusFunction) {
  let newRadioForm = []
  for (var i = 0; i < radioForm.placeholder.length; i++){
    newRadioForm.push(
      <div className="radioButtonContainer">
        <label className="buttonField" htmlFor={`${radioForm.name}-${i}`} style={{fontSize:"1em", display: "inline-block"}}>{radioForm.placeholder[i]}
          <input type="radio" id={`${radioForm.name}-${i}`} name={radioForm.name} defaultValue={radioForm.defaultValue[i]} onFocus={onFocusFunction}></input>
          <span class="checkmark"></span>
        </label>
      </div>
    )
  }
  return (
    <form className="radioForm">
      <h3>Church Tax:</h3>
      <div class="radioButtons">{newRadioForm}</div>
    </form>
  )
  };