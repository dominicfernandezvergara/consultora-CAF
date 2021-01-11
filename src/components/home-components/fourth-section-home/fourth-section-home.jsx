import React from "react";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

import styles from "./fourth-section-home.module.css";

function FourthSectionHome() {
  const history = useHistory();
  const handleClickAsesorias = () => {
    history.push({
      pathname: "/servicios",
      state: { service: "Asesorias Ambientales", number: 0 },
    });
  };
  const handleClickGestion = () => {
    history.push({
      pathname: "/servicios",
      state: { service: "Gestion en prevencion de riesgos", number: 1 },
    });
  };
  const handleClickCursos = () => {
    history.push({
      pathname: "/servicios",
      state: { service: "Cursos", number: 2 },
    });
  };
  return (
    <div className={styles.containerSection}>
      <h3 className={styles.title}>Servicios</h3>
      <div className={styles.containerServices}>
        <div className={styles.containerText}>
          <h4 className={styles.subTitle}>Asesorias Ambientales</h4>
          <p className={styles.text}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
          </p>
          <div className={styles.containerButton}>
            <Button
              variant="contained"
              className={styles.button}
              onClick={handleClickAsesorias}
            >
              Conoce más
            </Button>
          </div>
        </div>
        <div className={styles.containerText}>
          <h4 className={styles.subTitle}>Gestion en prevencion de riesgos</h4>
          <p className={styles.text}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
          </p>
          <div className={styles.containerButton}>
            <Button
              variant="contained"
              className={styles.button}
              onClick={handleClickGestion}
            >
              Conoce más
            </Button>
          </div>
        </div>
        <div className={styles.containerText}>
          <h4 className={styles.subTitle}>Cursos</h4>
          <p className={styles.text}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
          </p>
          <div className={styles.containerButton}>
            <Button
              variant="contained"
              className={styles.button}
              onClick={handleClickCursos}
            >
              Conoce más
            </Button>
          </div>
          <Button text="Conoce más" path="/algo" />
        </div>
      </div>
    </div>
  );
}
export default FourthSectionHome;
