import React from "react";
import "./Button.css";

export default function Button(onClickFunction, text){
    return(
        <button className="button" onClick={onClickFunction}>{text}</button>
    )
};