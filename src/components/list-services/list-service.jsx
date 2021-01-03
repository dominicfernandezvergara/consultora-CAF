import React, { useState } from "react";

import styles from "./list-services.module.css";
import { objectServices } from "./data-services";
import { Button } from "@material-ui/core";
import cn from "classnames";
import imageCurso from "../../images/services-images/cursosImage.jpeg";
import gestionImage from "../../images/services-images/sesoriaImage.jpeg";

// Github : https://github.com/akiran/react-slick
// Slick carousel API : https://react-slick.neostack.com/docs/api/#centerPadding

function ListServices() {
  const [activeAsesoria, setActiveAsesoria] = useState(true);
  const [activeGestion, setActiveGestion] = useState(true);
  const [activeCursos, setActiveCursos] = useState(true);

  console.log("objectServices", objectServices);
  const handleClickAllServicesActive = () => {
    setActiveAsesoria(true);
    setActiveGestion(true);
    setActiveCursos(true);
  };
  const handleClickAsesoriasServicesActive = () => {
    setActiveAsesoria(true);
    setActiveGestion(false);
    setActiveCursos(false);
  };
  const handleClickGestionServicesActive = () => {
    setActiveAsesoria(false);
    setActiveGestion(true);
    setActiveCursos(false);
  };
  const handleClickCursosServicesActive = () => {
    setActiveAsesoria(false);
    setActiveGestion(false);
    setActiveCursos(true);
  };

  return (
    <div className={styles.containerListServices}>
      <div className={styles.containerButton}>
        <Button
          variant="contained"
          className={styles.button}
          onClick={handleClickAllServicesActive}
        >
          Todos
        </Button>
        <Button
          variant="contained"
          className={styles.button}
          onClick={handleClickAsesoriasServicesActive}
        >
          Asesorias Ambientales
        </Button>
        <Button
          variant="contained"
          className={styles.button}
          onClick={handleClickGestionServicesActive}
        >
          Gestion en Prevencion de Riesgos
        </Button>
        <Button
          variant="contained"
          className={styles.button}
          onClick={handleClickCursosServicesActive}
        >
          Cursos
        </Button>
      </div>
      {activeAsesoria ? (
        <div className={styles.servicio}>
          <h2 className={styles.title}>Asesorias Ambientales</h2>
          <div className={styles.wrappServices}>
            {objectServices.asesoriasAmbientales.map((item, index) => {
              return (
                <div
                  key={index}
                  className={cn(
                    styles.containerService,
                    styles.containerAsesoria
                  )}
                >
                  <h3 className={styles.subtitle}>{item.name}</h3>
                  <p className={styles.description}>{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
      {activeGestion ? (
        <div className={styles.servicio}>
          <h2 className={styles.title}>Gestion en Prevencion de Riesgos</h2>
          <div className={styles.containerServicesImage}>
            <div>
              {objectServices.gestionPrevencionDeRiesgos.map((item, index) => {
                return (
                  <div key={index} className={styles.containerService}>
                    <h3 className={styles.subtitle}>{item.name}</h3>
                    <p className={styles.description}>{item.description}</p>
                  </div>
                );
              })}
            </div>
            <div className={styles.containerImage}>
              <img className={styles.gestionImage} src={gestionImage} alt="" />
            </div>
          </div>
        </div>
      ) : null}
      {activeCursos ? (
        <div className={styles.servicio}>
          <h2 className={styles.title}>Cursos</h2>
          <div className={styles.containerServicesImage}>
            <div>
              {objectServices.cursos.map((item, index) => {
                return (
                  <div key={index} className={styles.containerService}>
                    <h3 className={styles.subtitle}>{item.name}</h3>
                    <p className={styles.description}>{item.description}</p>
                  </div>
                );
              })}
            </div>
            <div className={styles.containerImage}>
              <img className={styles.imageCurso} src={imageCurso} alt="" />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default ListServices;
