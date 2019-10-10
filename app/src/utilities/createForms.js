import { formPages } from "../databases/formPages";
import { inputFields } from "../databases/inputFields";


export function createForms(){
  inputFields.map(inputField => {
    if(inputField.formPage !== null){
      formPages[inputField.formPage].inputFields.push(inputField)
    };
  });
  return formPages;
};
