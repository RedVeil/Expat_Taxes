import React from 'react';
import './Form.css';



export class Form extends React.Component {
  render() {
    let inputField;
    let key = `${this.props.counter}-${this.props.formId}`;
    if (this.props.inputField.index === 0) {
      if (this.props.inputField.type === "date") {
        inputField = <input type="date" className="inputField"
          id={this.props.inputField.index} name={this.props.inputField.name}
          placeholder={this.props.inputField.placeholder} onFocus={this.props.changeIndex} checked={true} onChange={this.props.saveValue}></input>;
      }
      if (this.props.inputField.type === "radio") {
        inputField = <>
          <input type="radio" className="inputField"
            id={this.props.inputField.index} name={this.props.inputField.name}
            value={this.props.inputField.defaultValue} defaultValue="" onFocus={this.props.changeIndex} onChange={this.props.saveValue}></input>
          <label htmlFor={this.props.inputField.name}>{this.props.inputField.placeholder}</label>
        </>
      }
      else {
        if (this.props.label === 1) {
          inputField =
            <><input type="text" className="inputField"
              id={this.props.inputField.index} name={this.props.inputField.name}
              placeholder={this.props.inputField.placeholder} defaultValue={this.props.inputField.defaultValue}
              onFocus={this.props.changeIndex} autofocus={true} onChange={this.props.saveValue}></input>
              <label htmlFor={this.props.inputField.name}>{this.props.inputField.placeholder}</label><br />
            </>
        }
        else {
          inputField = <input type="text" className="inputField"
            id={this.props.inputField.index} name={this.props.inputField.name}
            placeholder={this.props.inputField.placeholder} defaultValue={this.props.inputField.defaultValue}
            onFocus={this.props.changeIndex} autofocus={true} onChange={this.props.saveValue}></input>;
        }
      }
    }
    if (this.props.inputField.type === "date") {
      inputField = <>
        <input type="date" className="inputField"
          id={this.props.inputField.index} name={this.props.inputField.name} onFocus={this.props.changeIndex} onChange={this.props.saveValue} placeholder="test"></input>
        <label htmlFor={this.props.inputField.index}>{this.props.inputField.placeholder}</label><br />
      </>;
    }
    if (this.props.inputField.type === "radio") {
      inputField = <>
        <input type="radio" className="inputField"
          id={this.props.inputField.index} name={this.props.inputField.name}
          value={this.props.inputField.defaultValue} defaultValue="" onFocus={this.props.changeIndex} onChange={this.props.saveValue}></input>
        <label htmlFor={this.props.inputField.index}>{this.props.inputField.placeholder}</label><br />
      </>
    }
    if (this.props.inputField.type === undefined) {
      if (this.props.label === 1) {
        inputField = <>
          <label htmlFor={this.props.inputField.name} style={{ display: "inline", width: `6em`, margin: `0.5em` }}>{this.props.inputField.placeholder}</label>
          <input type="text" className="inputField"
            id={this.props.inputField.index} name={this.props.inputField.name}
            placeholder={this.props.inputField.placeholder} defaultValue={this.props.inputField.defaultValue}
            onFocus={this.props.changeIndex} autofocus={true} onChange={this.props.saveValue}
            style={{ width: `${this.props.inputField.size}em`, margin: `${this.props.inputField.margin}em` }}></input>
        </>


      }
      else {
        inputField = <input type="text" className="inputField"
          id={this.props.inputField.index} name={this.props.inputField.name}
          placeholder={this.props.inputField.placeholder} defaultValue={this.props.inputField.defaultValue}
          style={{ width: `${this.props.inputField.size}em`, margin: `${this.props.inputField.margin}em` }}
          onFocus={this.props.changeIndex} onChange={this.props.saveValue}></input>;
      }
    }
    return inputField;
  }
}