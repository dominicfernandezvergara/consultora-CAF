import React from "react";
import styles from "./first-section-home.module.css";

function FirstSectionHome() {
  return (
    <div className={styles.containerFirstSection}>
      <div className={styles.containerText}>
        <h1 className={styles.title}>Consultora Ambiental CAF</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod
        </p>
      </div>
    </div>
  );
}
export default FirstSectionHome;
