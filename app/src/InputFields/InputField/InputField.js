import React from 'react';
import './InputField.css';

export default function createInputField(inputField, onFocusFunction, onChangeFunction){
  return (
    <div className="greyBackground">
      <input id={inputField.name} type={inputField.type="text"} name={inputField.name} autocomplete={"off"} onFocus={onFocusFunction} onChange={onChangeFunction} required/>
      <label htmlFor={inputField.name}>{inputField.placeholder}</label>
    </div>
  )
};