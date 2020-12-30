import React from "react";

import styles from "./footer.module.css";
import Button from "../button";
import Logo from "../logo";

function Footer() {
  return (
    <div className={styles.containerFooter}>
      <div className={styles.containerLogo}>
        <Logo />
      </div>
      <div className={styles.footerData}>
        <h3 className={styles.title}>Contacta con nosotros</h3>
        <div className={styles.contactData}>
          Contramaestre Micalvi #522, of.42, Ñuñoa
        </div>
        <Button text="Contacto" path="/algo" />
      </div>
    </div>
  );
}
export default Footer;
