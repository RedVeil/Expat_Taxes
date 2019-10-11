import React from "react";
import Popup from "reactjs-popup";
import { gdprText } from "../databases/gdpr";
import "./GdprPopUp.css";


export const gdprPopUp =
    <Popup trigger={<button className="GdprButton"> Open Modal </button>} modal
    lockScroll={true}>
        <div className="modal" style={{alignContent:"center", width:"40em"}}>
            {gdprText}
        </div>
  </Popup>