import React from "react";

import { showHideGdpr } from "../../utilities/GdprPopUp";
import { gdprText } from "../../databases/gdpr";

import styles from "./Footer.module.css";


export default function Footer() {
  return (
    <div className={styles.footer}>
      <p style={{marginTop: "1em" }}>If you have any questions or suggestions please contact me directly</p>
      <p>Consider leaving a tip it helps me to continue my work. <a href="https://paypal.me/pools/c/8htPxuQfTR" className={styles.paypal}>Paypal</a></p>
      <p>And if you really want to see it here you go: <button onClick={showHideGdpr} className={styles.gdprButton}>GDPR & Impressum</button></p>
      <div id="gdpr" style={{ display: "none" }}>{gdprText}</div>
    </div>
  )
};