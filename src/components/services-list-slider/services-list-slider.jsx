import React from "react";
import EcoIcon from "@material-ui/icons/Eco";
import AssessmentIcon from "@material-ui/icons/Assessment";
import LocalFloristIcon from "@material-ui/icons/LocalFlorist";
import ApartmentIcon from "@material-ui/icons/Apartment";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import AssignmentIcon from "@material-ui/icons/Assignment";
import BallotIcon from "@material-ui/icons/Ballot";
import BarChartIcon from "@material-ui/icons/BarChart";
import BusinessIcon from "@material-ui/icons/Business";
import DomainIcon from "@material-ui/icons/Domain";
import EqualizerIcon from "@material-ui/icons/Equalizer";

import styles from "./services-list-slider.module.css";

const serviceData = [
  {
    id: 1,
    icon: <EcoIcon />,
    title: "Declaracion de impacto Ambiental",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
  },
  {
    id: 2,
    icon: <BallotIcon />,

    title: "Calificación de Actividad",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
  },
  {
    id: 3,
    icon: <BarChartIcon />,

    title: "Informe Sanitario",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
  },
  {
    id: 4,
    icon: <AssessmentIcon />,

    title: "Auditorías de cumplimiento normativo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
  },
  {
    id: 5,
    icon: <DomainIcon />,

    title: "Análisis de Consecuencias",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
  },
  {
    id: 6,
    icon: <LocalFloristIcon />,

    title: "Auditorías de RCA (Resolución de Calificación Ambiental",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
  },
  {
    id: 7,
    icon: <ApartmentIcon />,

    title:
      "Preparación e Implementación de Planes de Manejo de Residuos Industriales",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
  },
  {
    id: 8,
    icon: <EqualizerIcon />,

    title: "Estudios de Carga Combustible",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
  },
];
function ServicesListSlider() {
  return (
    <div className={styles.containerServicesListSlider}>
      <div className={styles.containerServicesList}>
        <div className={styles.serviceList}>
          {serviceData.map((item, index) => {
            return (
              <button key={index} type="button" className={styles.boxService}>
                <div className={styles.icon}>{item.icon}</div>
                <h5 className={styles.subtitle}>{item.title}</h5>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ServicesListSlider;
