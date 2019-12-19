import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Tooltip from '@material-ui/core/Tooltip';
import { MuiThemeProvider, createMuiTheme} from "@material-ui/core/styles";

const theme = createMuiTheme({
  overrides:{
    MuiTooltip:{
      tooltip:{
        fontSize:"1em",
        backgroundColor:"#fff"
      }
    },
    MuiFilledInput:{
      root:{
        backgroundColor:"fff",
        border:"1px solid #B2B2B2",
        borderRadius: 4,
        '&:hover': {
          border:"1px solid #666",
          backgroundColor: "#B2B2B2"
        },
        '&$focused': {
          border:"1px solid red",
        }
      }
    },
    MuiFormLabel:{
      root:{
        color:"#333333",
        '&:hover': {
          border:"1px solid red",
        },
        '&$focused': {
          color: "red",
        }
      }
    }
  }
});

const InputField = (inputField, onFocusFunction, onChangeFunction, tooltip) => {
  return (
    <div style={{display:"inline-block",  margin:"1em"}}>
      <MuiThemeProvider theme={theme}>
        <Tooltip 
          title={tooltip.text} 
          placement="bottom" 
          arrow
        >   
          <TextField
            variant="filled"
            id={inputField.name}
            name={inputField.name}
            label={inputField.placeholder}
            InputProps={{endAdornment:<InputAdornment position="end">?</InputAdornment>,disableUnderline:true}}
          />
        </Tooltip> 
      </MuiThemeProvider>
    </div>);
};

export default InputField;