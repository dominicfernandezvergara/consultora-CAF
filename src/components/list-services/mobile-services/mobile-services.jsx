import React, { useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import cn from "classnames";
import { useLocation } from "react-router-dom";

import styles from "./mobile-services.module.css";
import UseScrollToTop from "../../../hooks/use-scroll-to-top";
import { objectServices } from "../data-services";
import imageCurso from "../../../images/services-images/cursosImage.jpeg";
import gestionImage from "../../../images/services-images/sesoriaImage.jpeg";

// Github : https://github.com/akiran/react-slick
// Slick carousel API : https://react-slick.neostack.com/docs/api/#centerPadding

function MobileServices() {
  UseScrollToTop();
  let location = useLocation();
  let asesoria = location.state?.service === "Asesorias Ambientales";
  let gestion = location.state?.service === "Gestion en prevencion de riesgos";
  let curso = location.state?.service === "Cursos";
  if (!asesoria && !gestion && !curso) {
    asesoria = true;
  }

  const [activeAsesoria, setActiveAsesoria] = useState(asesoria);
  const [activeGestion, setActiveGestion] = useState(gestion);
  const [activeCursos, setActiveCursos] = useState(curso);
  const [service, setService] = useState(
    location.state?.service || "Asesorias Ambientales"
  );

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

  const handleChange = (event) => {
    console.log("event.target.value", event.target.value);
    setService(event.target.value);
    console.log("service", service);
    if (event.target.value === "Asesorias Ambientales") {
      setActiveAsesoria(true);
      setActiveGestion(false);
      setActiveCursos(false);
    }
    if (event.target.value === "Gestion en prevencion de riesgos") {
      setActiveAsesoria(false);
      setActiveGestion(true);
      setActiveCursos(false);
    }
    if (event.target.value === "Cursos") {
      setActiveAsesoria(false);
      setActiveGestion(false);
      setActiveCursos(true);
    }
  };

  return (
    <div className={styles.containerMobileServices}>
      <div className={styles.containerSelect}>
        <FormControl variant="outlined" className={styles.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">
            Seleccione un servicio
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={service}
            onChange={handleChange}
            label="Seleccione un servicio"
          >
            <MenuItem value={"Asesorias Ambientales"}>
              Asesorias Ambientales
            </MenuItem>
            <MenuItem value={"Gestion en prevencion de riesgos"}>
              Gestion en prevencion de riesgos
            </MenuItem>
            <MenuItem value={"Cursos"}>Cursos</MenuItem>
          </Select>
        </FormControl>
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

export default MobileServices;
