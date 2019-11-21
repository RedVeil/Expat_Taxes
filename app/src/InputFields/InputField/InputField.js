import React from 'react';
import './InputField.css';

export default function InputField(inputField, onFocusFunction, onChangeFunction){
  const widthStyle = {
    small:{
      background:"6.7em",
      inputField: "5.1em",
    },
    medium:{
      background:"15em",
      inputField:"12.7em",
    },
    large:{
      background:"33.8em",
      inputField:"29.8em"
    }
  };

  const marginStyle = {
    small:"1.25em",
    medium:"3em",
    large:"2em",
  };

  return (
    <div className="greyBackground" style={{width:widthStyle[inputField.size].background, margin:`0.5em ${marginStyle[inputField.margin]} 0.5em 0.5em`}}>
      <input 
        id={inputField.name} 
        type={inputField.type="text"} 
        name={inputField.name} 
        autoComplete={"off"} 
        onFocus={onFocusFunction} 
        onChange={onChangeFunction} 
        required
        style={{width:widthStyle[inputField.size].inputField}}/>
      <label htmlFor={inputField.name} className={`${inputField.name}-label`} tyle={{width:widthStyle[inputField.size].inputField}}>{inputField.placeholder}</label>
    </div>
  )
};