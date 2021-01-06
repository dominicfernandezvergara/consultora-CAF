import React, { useState } from "react";

import styles from "./about.module.css";
import Footer from "../../components/footer";
import Modal from "../../components/modal";
import ModalExperience from "../../components/modal/modal-experience";
import image from "../../images/IMG_0027_EstanquesAlmacenamiento.jpg";
import { experienceData } from "./dataAboutExperience";

function About() {
  const [modalState, setModalState] = useState(false);
  const [arrayExperiences, setArrayExperiences] = useState([{}]);

  const handleClickOpenModalExperiences = (experiences) => {
    setModalState(true);
    setArrayExperiences(experiences);
  };

  return (
    <div className={styles.containerAbout}>
      <div className={styles.containerPersonalInfo}>
        <div className={styles.containerImage}>
          <img className={styles.image} alt="" src={image} />
        </div>
        <div className={styles.containerPersonalInfoText}>
          <h1 className={styles.titlePersonalInfo}>Juan Carlos Fernández</h1>
          <p className={styles.textPersonalInfo}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua hola."
          </p>
        </div>
      </div>
      <div className={styles.containerExperience}>
        <div className={styles.shadowImage}>
          <h2 className={styles.titleExperience}>Experiencia</h2>
          <div className={styles.containerExperienceBoxes}>
            {experienceData.map((item, index) => {
              const experiences = item.experiences;
              return (
                <button
                  key={index}
                  type="button"
                  className={styles.experienceBox}
                  onClick={() => handleClickOpenModalExperiences(experiences)}
                >
                  {item.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
      <Modal
        open={modalState}
        close={() => setModalState(false)}
        footer={false}
        header={false}
      >
        <ModalExperience
          title="titulo del modal"
          dataExperience={arrayExperiences}
        />
      </Modal>
    </div>
  );
}

export default About;
