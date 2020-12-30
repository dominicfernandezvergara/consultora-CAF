import React from "react";
import Button from "../../components/button";
import styles from "./services.module.css";

function Services() {
  return (
    <div className={styles.containerServices}>
      <h3 className={styles.title}>Servicios</h3>
      <div className={styles.containerService}>
        <h4 className={styles.subTitle}>Subtitle</h4>
        <p className={styles.text}>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua."
        </p>
        <Button text="Conoce más" path="/algo" />
      </div>
    </div>
  );
}
export default Services;
