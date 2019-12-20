import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Tooltip from '@material-ui/core/Tooltip'
import HelpOutlineSharpIcon from '@material-ui/icons/HelpOutlineSharp';
import styles from "./InputField.module.css";


const InputField = ({id, placeholder, tooltipText, onChangeFunction, size}) => {
  const [tooltipIsOpen, setTooltipIsOpen] = useState(false);
  let andornment
  tooltipText ? andornment = <InputAdornment 
                        position="end" 
                        onClick={() => setTooltipIsOpen(!tooltipIsOpen)} 
                        className={styles.questionMark}><HelpOutlineSharpIcon style={{ color: "#878787" }}/>
                </InputAdornment>
                :
                andornment = <InputAdornment position="end" style={{visibility:"hidden"}}><HelpOutlineSharpIcon/></InputAdornment>;

  let width = {
    small: "6em",
    medium:"14em",
    large:"30em"
  }
  return (
    <div className={styles.container}>
        <Tooltip 
          open={tooltipIsOpen}
          onClose={() => setTooltipIsOpen(false)}
          title={tooltipText}
          placement="bottom" 
          arrow
        >   
          <TextField
            variant="filled"
            id={id}
            name={id}
            label={placeholder}
            InputProps={{
              endAdornment: andornment,
              disableUnderline:true}}
            onChange={onChangeFunction}
            style={{width:width[size]}}
          />
        </Tooltip> 
    </div>);
};

export default InputField;