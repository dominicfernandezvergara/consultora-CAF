import React, { useState } from "react";
import PropTypes from "prop-types";

import styles from "./modal-experience.module.css";

function ModalExperience({ title, dataExperience }) {
  console.log("dataExperience", dataExperience);
  return (
    <div className={styles.containerModalExperience}>
      <h3>{title}</h3>
      <div className={styles.experiences}>
        {dataExperience.map((item, index) => {
          return (
            <div key={index} className={styles.containerDataExperiences}>
              <p className={styles.companyName}>{item.company}</p>
              <p className={styles.companyDescription}>{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
ModalExperience.propTypes = {
  dataExperience: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};
export default ModalExperience;
