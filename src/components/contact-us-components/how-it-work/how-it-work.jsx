import React from "react";
import ApartmentIcon from "@material-ui/icons/Apartment";

import styles from "./how-it-work.module.css";

function HowItWork() {
  return (
    <div className={styles.containerHowItWork}>
      <h3 className={styles.title}>¿Cómo funciona?</h3>
      <div className={styles.containerIconsSection}>
        <div className={styles.iconsSection}>
          <div className={styles.icon}>
            <ApartmentIcon />
          </div>
          <div className={styles.textIcon}>
            1. Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </div>
        </div>
        <div className={styles.iconsSection}>
          <div className={styles.icon}>
            <ApartmentIcon />
          </div>
          <div className={styles.textIcon}>
            2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>
        <div className={styles.iconsSection}>
          <div className={styles.icon}>
            <ApartmentIcon />
          </div>
          <div className={styles.textIcon}>3. Lorem ipsum dolor sit amet.</div>
        </div>
      </div>
    </div>
  );
}

export default HowItWork;
