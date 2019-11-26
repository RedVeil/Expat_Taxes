import React from "react";
import styles from "./Menu.module.css";
import "./Menu.css";

function collapsOrExpandMenu(){
  const arrow = document.getElementById("arrow");
  const tabs = document.getElementById("tabs");
  const menu = document.getElementById("menu");
  if(menu.style.left === "42em"){
    arrow.style.transform = "rotate(-45deg)";
    tabs.style.display = "block";
    menu.style.left = "10em";
  }
  else{
    arrow.style.transform = "rotate(135deg)";
    tabs.style.display = "none";
    menu.style.left = "42em";
  }
};


export default function Menu() {
  return (
        <div id="menu" className={styles.menu}>
          <div className={styles.menuCard}>
            <i id="arrow" onClick={collapsOrExpandMenu} className={styles.Arrow}></i>  
            <div className={styles.menuText} onClick={collapsOrExpandMenu}>Menu</div>
          </div>
          <div id="tabs">
            Tabs
          </div>
        </div>
    )
};