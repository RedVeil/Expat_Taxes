import React from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <div className={styles.navigationContainer}>
      <h2 className={styles.pageTitle}>Tax Helper </h2>
    </div>
  );
};