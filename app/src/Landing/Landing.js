import React from 'react';
import './Landing.css';
import { FormPage } from "../FormPage/FormPage";
//import {Save} from "../Save/Save";

export class Landing extends React.Component {
  render() {
    return (<div>
      {this.props.forms ? <FormPage forms={this.props.forms} saveValue={this.props.saveValue} formID={this.props.formID}
        nextForm={this.props.nextForm} previousForm={this.props.previousForm} index={this.props.index} changeIndex={this.props.changeIndex} /> : <p>Hello</p>}
    </div>
    )
  };
}

/**/
