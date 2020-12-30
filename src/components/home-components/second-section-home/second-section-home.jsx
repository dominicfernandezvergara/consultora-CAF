import React from "react";
import ButtonApp from "../../button";
import cn from "classnames";
import PropTypes from "prop-types";

import styles from "./second-section-home.module.css";

// la funcion recibe un titulo
//un texto, el texto del boton(buttonText)
//el path para la redireccion que hace el boton(path)
//el color para el boton que puede ser "primary" o "secondary"
//Style que puede ser "black" o nada para que sea de fondo blanco.
function SecondSectionHome({
  title,
  text,
  buttonText,
  paths,
  colorButton,
  styleBlack,
}) {
  return (
    <div
      className={cn(
        styles.containerSecondSection,
        styleBlack ? styles.containerSecondSectionBlack : null
      )}
    >
      <h1
        className={cn(
          styles.title,
          styleBlack ? styles.titleWhite : styles.titleBlack
        )}
      >
        {title}
      </h1>
      <p
        className={cn(
          styles.text,
          styleBlack ? styles.textWhite : styles.textBlack
        )}
      >
        {text}
      </p>
      <ButtonApp text={buttonText} path={paths} color={colorButton} />
    </div>
  );
}

SecondSectionHome.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  paths: PropTypes.string.isRequired,
  colorButton: PropTypes.string.isRequired,
  styleBlack: PropTypes.bool.isRequired,
};
SecondSectionHome.defaultProps = {
  styleBlack: false,
};
export default SecondSectionHome;
