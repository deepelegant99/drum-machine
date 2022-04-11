import React from "react";
import styles from "./Display.module.css";

const Display = ({ displayname }) => {
  return (
    <div className={styles.display}>
      <h1 id="display">{displayname}</h1>
    </div>
  );
};

export default Display;
