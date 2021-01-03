import React from "react";

import styles from "./services.module.css";
import ListServices from "../../components/list-services/list-service";
import Footer from "../../components/footer/footer";

function Services() {
  return (
    <div className={styles.containerServices}>
      <h1 className={styles.title}>Servicios</h1>
      <div className={styles.containerService}>
        <ListServices />
      </div>
      <Footer />
    </div>
  );
}
export default Services;
