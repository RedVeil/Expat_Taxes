import React from 'react';
import './Saved.css';
import { Form } from "../Form/Form";

export class Saved extends React.Component {
  constructor(props) {
    super(props)
    this.saveAndSendAll = this.saveAndSendAll.bind(this);
  }

  saveAndSendAll() {
    const downloadURL = "http://localhost:5000/download";
    var input_fields = document.getElementsByClassName("inputField")
    let listToSend = []
    for (let n = 0, len = input_fields.length; n < len; n++) {
      input_fields[n].defaultValue = input_fields[n].value
      listToSend.push({ name: input_fields[n].name, defaultValue: input_fields[n].defaultValue })
    }
    fetch(downloadURL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(listToSend)
    })
      .then(response => { if (response.ok) { window.location.href = "http://localhost:5000/pdf" } });

  }


  render() {
    let savedPage = {}
    let tempList = []
    let blockList = []
    let sizeCounter = 0
    for (let i = 0; i < this.props.forms.length; i++) {
      this.props.forms[i].inputFields.map((inputField, index) => {
        if (inputField.type !== "radio") {
          sizeCounter += inputField.size * 2
          //make list of breakpoints in int (start next list after x)
          if (sizeCounter <= 35) {
            tempList.push(<Form inputField={inputField} key={`${i}-${index}`} label={1} />)
          }
          else {
            blockList.push(<div>{tempList}</div>)
            tempList = []
            sizeCounter = inputField.size * 2
            tempList.push(<Form inputField={inputField} key={`${i}-${index}`} label={1} />)
          }
        }
      })
      switch (i) {
        case 10:
          savedPage["Personal Informations"] = blockList;
          blockList = []
          break;
        case 16:
          savedPage["Your Partner"] = blockList
          blockList = []
          break;
        case 18:
          savedPage["Stuff"] = blockList
          blockList = []
          break;
        case 23:
          savedPage["Tax Consultant"] = blockList
          blockList = []
          break;
        case 27:
          savedPage["Document Recipient"] = blockList
          blockList = []
          break;
        case 30:
          savedPage["Not so personal Informations"] = blockList
          blockList = []
          break;
        case 35:
          savedPage["Workplace"] = blockList
          blockList = []
          break;
        case 45:
          savedPage["Expected Income"] = blockList
          blockList = []
          break;
        case 51:
          savedPage["Special Tax"] = blockList
          blockList = []
          break;
      }
    }

    return (
      <div className="centerSaved">
        <div className="savedPage">
          <h2>Overview</h2>
          {Object.keys(savedPage).map((key, index) => (
            <fieldset><legend>{key}</legend>{savedPage[key]}</fieldset>))}
          <div><button id="send" onClick={this.saveAndSendAll}>Send</button></div>
        </div>
      </div>)
  }
}


