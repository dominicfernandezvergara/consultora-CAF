import React from "react";

import styles from "./list-services.module.css";
import DeskServices from "./desk-services";
import MobileServices from "./mobile-services/mobile-services";

function ListServices() {
  return (
    <div className={styles.containerListServices}>
      <div className={styles.containerMobile}>
        <MobileServices />
      </div>
      <div className={styles.containerDesk}>
        <DeskServices />
      </div>
    </div>
  );
}

export default ListServices;
