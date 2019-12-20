import React from "react";
import styles from "./Button.module.css";

export default function Button(text,onClickFunction=null){
    return(
        <button className={styles.button} onClick={onClickFunction}>{text}</button>
    )
};