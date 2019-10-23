import React from 'react';
import './InputField.css';

export default function createInputField(inputField, onFocusFunction, onChangeFunction){
  const widthStyle = {
    small:{
      background:"5.3em",
      inputField: "4.1em",
    },
    medium:{
      background:"11.2em",
      inputField:"10em",
    },
    large:{
      background:"23.4em",
      inputField:"22.2em"
    }
  };

  const marginStyle = {
    small:"0.1em",
    medium:"0.5em",
    large:"1em",
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
      <label htmlFor={inputField.name} style={{width:widthStyle[inputField.size].inputField}}>{inputField.placeholder}</label>
    </div>
  )
};