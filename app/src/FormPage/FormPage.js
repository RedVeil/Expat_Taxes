import React from 'react';
import './FormPage.css';
import { Form } from "../Form/Form";
import { ProgressBar } from "../ProgressBar/ProgressBar";


export class FormPage extends React.Component {
  constructor(props) {
    super(props);
    this.changeIndex = this.changeIndex.bind(this);
  }

  changeIndex() {
    let inputID = document.activeElement.id
    this.props.changeIndex(inputID)
  }

  render() {
    let tooltip;
    tooltip = <p style={{ color: "white" }}>{this.props.forms[this.props.formID].inputFields[this.props.index].tooltip}</p>

    return (
      <div>
        <div className="progressBarContainer">
          <ProgressBar maxLength={this.props.forms.length} formID={this.props.formID} />
        </div>
        <div className="grid">
          <div className="textSide">
            <div className="textContainer">
              {tooltip}
            </div>
          </div>
          <div className="formSide">
            <div className="title">
              <h2 id="title">{this.props.forms[this.props.formID].title}</h2>
            </div>
            <div className="textContent">
              <p>{this.props.forms[this.props.formID].header}</p>
            </div>
            <div className="formContent">
              <div className="form">
                <form>
                  {this.props.forms[this.props.formID].inputFields.map((inputField, index) => {
                    return <Form inputField={inputField} key={`${this.props.formID}-${index}`} changeIndex={this.changeIndex} saveValue={this.props.saveValue} label={0} />
                  })}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};
