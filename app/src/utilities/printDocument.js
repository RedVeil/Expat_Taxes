import jsPDF from 'jspdf';
import {pageOne} from "../databases/pageOne.js";
import {pageTwo} from "../databases/pageTwo.js";
import {pageThree} from "../databases/pageThree.js";
import {pageFour} from "../databases/pageFour.js";
import {pageFive} from "../databases/pageFive";
import {pageSix} from "../databases/pageSix";
import {pageSeven} from "../databases/pageSeven";
import {pageEight} from "../databases/pageEight";
import {xLocations} from "../databases/xLocations";
import {yLocations} from "../databases/yLocations";
import { inputFields } from "../databases/inputFields";
import { findInfos } from "./findInfos";
import {sepaMandateText} from "../databases/sepaMandateText";
import {documentMandateText} from "../databases/documentMandateText";

const pageArray = [pageOne,pageTwo,pageThree,pageFour,pageFive,pageSix,pageSeven,pageEight]

function generateSepaMandate(infos, pdf){
  pdf.addPage()
  //add infos to Text
  //print Text
  return pdf
};

function generateDocumentMandate(infos, pdf){
  pdf.addPage()
  return pdf
};

function createFirstPage(inputsPageOne){
  var pdf = new jsPDF('p', 'pt', 'a4');
  pdf.setFontSize(12);
  pdf.addImage(pageOne, "JPG",0,0, 590, 840,"1p","FAST")
  inputsPageOne.map(input =>{
    return pdf.text(input.userInput, input.xLocation,input.yLocation)
  });
  return pdf
};

function generatePage(pdf, page, inputs, counter){
  console.log(inputs)
  pdf.addPage()
  pdf.addImage(page, "JPG",0,0, 590, 840, counter, "FAST")
  inputs.map(input =>{
    return pdf.text(input.userInput, input.xLocation,input.yLocation)
  })
  return pdf
};

function addXLocation(input){
  let xLocation = xLocations[input.xLocationId]
  input.xLocation= xLocation
  return input
};

function addYLocation(input){
  let yLocation = yLocations[input.yLocationId]
  input.yLocation = yLocation
  return input
};

function addXYCoordinates(inputs){
  inputs.map(addXLocation)
  inputs.map(addYLocation)
};

function addInfoToInput(inputs){
  let newInputs = []
  for (let key in inputs){
    const foundInputField = inputFields.find(function(entry){
      return entry.name === key
    })
    const newInput = {id:foundInputField.id, name:foundInputField.name, xLocationId: foundInputField.xLocationId, yLocationId: foundInputField.yLocationId, userInput:inputs[key]}
    newInputs.push(newInput)
  }
  return newInputs
};

export function printDocument(inputs){
  const inputsPageOne = [];
  const inputsPageTwo = [];
  const inputsPageThree = [];
  const inputsPageFour = [];
  const inputsPageFive = [];
  const inputsPageSix = [];
  const inputsPageSeven = [];
  const inputsPageEight = [];
  const newInputs = addInfoToInput(inputs);
  newInputs.map(input => {
    if(input.id < 101){
      inputsPageOne.push(input)
    }
    else if(input.id < 201){
      inputsPageTwo.push(input)
    }
    else if(input.id < 301){
      inputsPageThree.push(input)
    }
    else if(input.id < 401){
      inputsPageFour.push(input)
    }
    else if(input.id < 501){
      inputsPageFive.push(input)
    }
    else if(input.id < 601){
      inputsPageSix.push(input)
    }
    else if(input.id < 701){
      inputsPageSeven.push(input)
    }
  });

  const inputPages = [inputsPageOne,inputsPageTwo,inputsPageThree,inputsPageFour,inputsPageFive,inputsPageSix,inputsPageSeven,inputsPageEight];
  inputPages.map(addXYCoordinates);
  var pdf = createFirstPage(inputPages[0])
  for (var i=1; i<8;i++){
    pdf = generatePage(pdf, pageArray[i], inputPages[i], i+1)
  };

  const sepa = inputsPageSeven.find(function(entry){
    return entry.name ==="SEPA"}
  );
  if(sepa.value === "yes"){
    const sepaRelevantKeys = ["holder","iban_de","iban_int","bic","u_strasse","u_hausnummer","u_postleitzahl","u_city"];
    const sepaInfos = findInfos(inputs, sepaRelevantKeys);
    pdf = generateSepaMandate(sepaInfos);
  };

  const documentRecipient = inputsPageThree.find(function(entry){
    return entry.name === "vollmacht_x"
  });
  if(documentRecipient.value === "x"){
    const documentRelevantKeys = [""]
    const documentRecipientInfos = findInfos(inputs, documentRelevantKeys);
    pdf = generateDocumentMandate(documentRecipientInfos)
  };

  pdf.save("Steuerliche Anmeldung.pdf");
};