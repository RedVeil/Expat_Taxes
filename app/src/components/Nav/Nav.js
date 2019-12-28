import React from "react";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className={styles.navigationContainer}>
      <h2 className={styles.pageTitle}>Counseliery</h2>
    </div>
  );
};