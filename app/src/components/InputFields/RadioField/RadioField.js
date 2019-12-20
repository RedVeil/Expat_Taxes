import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import styles from './RadioField.module.css';

export default function RadioField({ id, radioFieldText, tooltipText, defaultValues, placeholder, onChangeFunction }) {
  let newRadioForm = []
  for (var i = 0; i < placeholder.length; i++) {
    newRadioForm.push(
      <div className={styles.radioButtonContainer}>
        <label
          className={styles.buttonField}
          htmlFor={`${id}-${i}`}
          style={{ fontSize: "1em", display: "inline-block" }}
        >
          {placeholder[i]}
          <input
            type="radio"
            id={`${id}-${i}`}
            name={id}
            defaultValue={defaultValues[i]}
            onChange={onChangeFunction}
            ></input>
          <span className={styles.checkmark} ></span>
        </label>
      </div>
    )
  }

  return (
    <div
      className={styles.radioForm}
    >
      <Tooltip title={tooltipText} placement="bottom" arrow>
        <form>
          <p className={styles.radioText} >{radioFieldText}</p>
          <div className={styles.radioButtons} >{newRadioForm}</div>
        </form>
      </Tooltip>
    </div >
  )
};