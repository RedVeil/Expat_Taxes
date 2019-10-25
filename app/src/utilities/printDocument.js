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
import {sepaMandateXY} from "../databases/sepaMandateXY";
import {documentMandateXY} from "../databases/documentMandateXY";
import { sepaMandate } from "../databases/sepaMandate";

const pageArray = [pageOne,pageTwo,pageThree,pageFour,pageFive,pageSix,pageSeven,pageEight]

function generateSepaMandate(infos, pdf){
  pdf.addPage()
  pdf.addImage(sepaMandate, "JPG",0,0, 590, 840,"sepa","FAST")
  infos.map(info =>{
    return pdf.text(info.value, info.x,info.y)
  })
  return pdf
};

function generateDocumentMandate(infos, pdf){
  pdf.addPage()
  infos.map(info =>{
    return pdf.text(info.value, info.x,info.y)
  })
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

function addXYtoInfos(inputs, xyArray){
  const inputsWithLocations = inputs.map(input =>{
    return {name:input.name, value:input.value, x:xyArray[input.name].x,y:xyArray[input.name].y}
  });
  return inputsWithLocations;
};

function addInfoToInput(inputs){
  console.log(inputs)
  let newInputs = []
  for (let key in inputs){
    const foundInputField = inputFields.find(function(entry){
      return entry.name === key
    })
    if (foundInputField !== undefined && foundInputField.xLocationId !== null && inputs[key] !== undefined){
      const newInput = {id:foundInputField.id, name:foundInputField.name, xLocationId: foundInputField.xLocationId, yLocationId: foundInputField.yLocationId, userInput:inputs[key]}
      newInputs.push(newInput)
    };
  };
  return newInputs;
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

  
  if(inputs["SEPA"] === "yes"){
    const sepaRelevantKeys = ["holder","iban_de","iban_int","bic","u_strasse","u_hausnummer","u_postleitzahl","u_city"];
    const sepaInfos = [];
    for(let i=0; i<sepaRelevantKeys.length;i++){
      if (inputs[sepaRelevantKeys[i]]){
        sepaInfos.push({name:sepaRelevantKeys[i],value:inputs[sepaRelevantKeys[i]]});
      };
    };

    const sepaInfosWithLocations = addXYtoInfos(sepaInfos, sepaMandateXY)
    sepaInfosWithLocations.push({name:"country", value:"Deutschland",x:70,y:480})
    pdf = generateSepaMandate(sepaInfosWithLocations, pdf);
  };
  
  if(inputs["vollmacht_x"]=== "x"){
    console.log("vollmacht")
    /*
    const documentRelevantKeys = [""]
    const documentRecipientInfos = findInfos(inputs, documentRelevantKeys);
    const documentInfosWithLocations = addXYtoInfos(documentRecipientInfos, documentMandateXY)
    pdf = generateDocumentMandate(documentInfosWithLocations)
    */
  };

  pdf.save("Steuerliche Anmeldung.pdf");
};