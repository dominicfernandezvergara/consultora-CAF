import React, { useState } from "react";
import cn from "classnames";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { useLocation } from "react-router-dom";

import styles from "./desk-services.module.css";
import { objectServices } from "../data-services";
import imageCurso from "../../../images/services-images/cursosImage.jpeg";
import gestionImage from "../../../images/services-images/sesoriaImage.jpeg";

// Github : https://github.com/akiran/react-slick
// Slick carousel API : https://react-slick.neostack.com/docs/api/#centerPadding

function DeskServices() {
  let location = useLocation();
  console.log("location", location);
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  const [value, setValue] = useState(location.state?.number || 0);
  console.log("value", value);
  const handleChangeTabs = (event, newValue) => {
    console.log("newValue", newValue);

    setValue(newValue);
  };
  return (
    <div className={styles.containerDeskServices}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChangeTabs}
          aria-label="simple tabs example"
        >
          <Tab
            className={styles.tabServices}
            label="Asesorias Ambientales"
            {...a11yProps(0)}
          />
          <Tab
            className={styles.tabServices}
            label="Gestion en Prevencion de Riesgos"
            {...a11yProps(1)}
          />
          <Tab
            className={styles.tabServices}
            label="Cursos"
            {...a11yProps(2)}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
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
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className={styles.servicio}>
          <h2 className={styles.title}>Gestion en Prevencion de Riesgos</h2>
          <div className={styles.containerServicesImage}>
            <div className={styles.containerGestionServices}>
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
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className={styles.servicio}>
          <h2 className={styles.title}>Cursos</h2>
          <div className={styles.containerServicesImage}>
            <div className={styles.containerGestionServices}>
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
      </TabPanel>
    </div>
  );
}

export default DeskServices;
