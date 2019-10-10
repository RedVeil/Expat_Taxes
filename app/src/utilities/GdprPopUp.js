import React from "react";
import Popup from "reactjs-popup";
import { gdprText } from "../databases/gdpr"

export const gdprPopUp =
    <Popup trigger={<button className="button"> Open Modal </button>} modal
    lockScroll={false}>
        <div className="modal" style={{alignContent:"center", width:"40em"}}>
            {gdprText}
        </div>
  </Popup>