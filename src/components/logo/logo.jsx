import React from "react";
import { useHistory } from "react-router-dom";

import styles from "./logo.module.css";
import imageLogo from "../../images/logo-sin-fondo.png";

function Logo() {
  const history = useHistory();
  const onClickRedirectionInicio = () => {
    history.push("/inicio");
  };
  return (
    <button className={styles.containerLogo} onClick={onClickRedirectionInicio}>
      <img className={styles.logo} src={imageLogo} alt="" />
    </button>
  );
}

export default Logo;
