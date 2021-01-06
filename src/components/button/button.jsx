import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import cn from "classnames";
import PropTypes from "prop-types";

import styles from "./button.module.css";

//la funcion recibe:
//text para el boton
//path para redireccionar
//color que puede ser "primary" o "secondary"
function ButtonApp({ text, path, color }) {
  // const history = useHistory();

  // const handleClick = () => {
  //   console.log("onClick");
  //   // history.push(path);
  // };
  return (
    <Link
      to={path}
      className={cn(
        styles.containerButton,
        color === "primary" ? styles.colorPrimary : styles.colorSecondary
      )}
    >
      <Button
        variant="contained"
        className={styles.button}
        // onClick={handleClick}
      >
        {text}
      </Button>
    </Link>
  );
}
ButtonApp.propTypes = {
  text: PropTypes.string.isRequired,
  path: PropTypes.string,
  color: PropTypes.string,
};
ButtonApp.defaultProps = {
  color: "secondary",
  path: "/contacto",
};
export default ButtonApp;
