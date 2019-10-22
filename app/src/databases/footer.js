import React from "react";
import { showHideGdpr } from "../utilities/GdprPopUp";
import { gdprText } from "./gdpr";

export const footer =
  <div className="footer">
    <p style={{ color: "white", marginTop: "1em" }}>Thanks a lot for visiting my Website! If you have any questions regarding the site or with your "Anmeldung" feel free to ask me directly.</p>
    <p style={{ color: "white" }}>I hope it helped you and i would love to hear feedback from you! :)</p>
    <p style={{ color: "white" }}>Consider leaving a tip it helps me to continue my work. <a href="https://paypal.me/pools/c/8htPxuQfTR">Paypal</a></p>
    <p style={{ color: "white" }}>And if you really want to see it here you go: <button onClick={showHideGdpr} id="gdprButton">GDPR & Impressum</button></p>
    <div id="gdpr" style={{ display: "none" }}>{gdprText}</div>
  </div>