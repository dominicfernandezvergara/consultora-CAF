import React from "react";
import ButtonApp from "../../button";
import cn from "classnames";
import PropTypes from "prop-types";
import ApartmentIcon from "@material-ui/icons/Apartment";

import styles from "./fifth-section-home.module.css";

// la funcion recibe un titulo
//un texto, el texto del boton(buttonText)
//el path para la redireccion que hace el boton(path)
//el color para el boton que puede ser "primary" o "secondary"
//Style que puede ser "black" o nada para que sea de fondo blanco.
function FifthSectionHome({
  title,
  buttonText,
  paths,
  colorButton,
  styleBlack,
}) {
  return (
    <div
      className={cn(
        styles.containerFifthSection,
        styleBlack ? styles.containerFifthSectionBlack : null
      )}
    >
      <h1 className={cn(styles.title, styleBlack ? styles.titleWhite : null)}>
        {title}
      </h1>
      <div className={styles.containerIconsSection}>
        <div className={styles.iconsSection}>
          <div
            className={cn(
              styles.icon,
              styleBlack ? styles.iconBlackStyle : null
            )}
          >
            <ApartmentIcon />
          </div>
          <div
            className={cn(
              styles.textIcon,
              styleBlack ? styles.textIconBlackStyle : null
            )}
          >
            1. Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </div>
        </div>
        <div className={styles.iconsSection}>
          <div
            className={cn(
              styles.icon,
              styleBlack ? styles.iconBlackStyle : null
            )}
          >
            <ApartmentIcon />
          </div>
          <div
            className={cn(
              styles.textIcon,
              styleBlack ? styles.textIconBlackStyle : null
            )}
          >
            2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>
        <div className={styles.iconsSection}>
          <div
            className={cn(
              styles.icon,
              styleBlack ? styles.iconBlackStyle : null
            )}
          >
            <ApartmentIcon />
          </div>
          <div
            className={cn(
              styles.textIcon,
              styleBlack ? styles.textIconBlackStyle : null
            )}
          >
            3. Lorem ipsum dolor sit amet.
          </div>
        </div>
      </div>
      <ButtonApp text={buttonText} path={paths} color={colorButton} />
    </div>
  );
}

FifthSectionHome.propTypes = {
  title: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  paths: PropTypes.string.isRequired,
  colorButton: PropTypes.string.isRequired,
  styleBlack: PropTypes.bool,
};
FifthSectionHome.defaultProps = {
  styleBlack: false,
};
export default FifthSectionHome;
