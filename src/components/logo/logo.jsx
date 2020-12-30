import React from "react";

import styles from "./logo.module.css";
import imageLogo from "../../images/logo-sin-fondo.png";

function Logo() {
  return (
    <div className={styles.containerLogo}>
      <img className={styles.logo} src={imageLogo} alt="" />
    </div>
  );
}

export default Logo;
