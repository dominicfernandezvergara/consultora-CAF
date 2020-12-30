import React from "react";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import cn from "classnames";
import PropTypes from "prop-types";

import styles from "./button.module.css";

//la funcion recibe:
//text para el boton
//path para redireccionar
//color que puede ser "primary" o "secondary"
function ButtonApp({ text, path, color }) {
  const history = useHistory();

  const handleClick = () => {
    console.log("onClick");
    // history.push(path);
  };
  return (
    <div
      className={cn(
        styles.containerButton,
        color === "primary" ? styles.colorPrimary : styles.colorSecondary
      )}
    >
      <Button
        variant="contained"
        className={styles.button}
        onClick={handleClick}
      >
        {text}
      </Button>
    </div>
  );
}
ButtonApp.propTypes = {
  text: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
ButtonApp.defaultProps = {
  color: "secondary",
};
export default ButtonApp;
