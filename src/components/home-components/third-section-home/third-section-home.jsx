import React from "react";
import ButtonApp from "../../button";
import cn from "classnames";
import PropTypes from "prop-types";
import ApartmentIcon from "@material-ui/icons/Apartment";

import styles from "./third-section-home.module.css";

// la funcion recibe un titulo
//un texto, el texto del boton(buttonText)
//el path para la redireccion que hace el boton(path)
//el color para el boton que puede ser "primary" o "secondary"
//Style que puede ser "black" o nada para que sea de fondo blanco.
function ThirdSectionHome({
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
        styles.containerThirdSection,
        styleBlack ? styles.containerThirdSectionBlack : null
      )}
    >
      <h1 className={cn(styles.title, styleBlack ? styles.titleWhite : null)}>
        {title}
      </h1>

      {text ? (
        <p className={cn(styles.text, styleBlack ? styles.textWhite : null)}>
          {text}
        </p>
      ) : null}
      <div className={styles.containerButtonIcons}>
        <div className={styles.containerButton}>
          <ButtonApp text={buttonText} path={paths} color={colorButton} />
        </div>
        <div className={styles.containerIconsSection}>
          <div className={styles.wrapIconsSection}>
            <div className={styles.icon}>
              <ApartmentIcon />
            </div>
            <div className={styles.textIcon}>20 ipsum dolor sit amet</div>
          </div>
          <div className={styles.wrapIconsSection}>
            <div className={styles.icon}>
              <ApartmentIcon />
            </div>
            <div className={styles.textIcon}>Lorem ipsum dolor sit amet</div>
          </div>
          <div className={styles.wrapIconsSection}>
            <div className={styles.icon}>
              <ApartmentIcon />
            </div>
            <div className={styles.textIcon}>Lorem ipsum dolor sit amet</div>
          </div>
        </div>
      </div>
    </div>
  );
}

ThirdSectionHome.propTypes = {
  title: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  paths: PropTypes.string.isRequired,
  colorButton: PropTypes.string.isRequired,
  text: PropTypes.string,
  styleBlack: PropTypes.bool,
};
ThirdSectionHome.defaultProps = {
  styleBlack: false,
  text: null,
};
export default ThirdSectionHome;
