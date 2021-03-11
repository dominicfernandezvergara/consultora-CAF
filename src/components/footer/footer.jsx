import React from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import cn from "classnames";

import styles from "./footer.module.css";
import Logo from "../logo";

function Footer() {
  return (
    <div className={styles.containerFooter}>
      <div className={styles.containerLogo}>
        <Logo />
      </div>
      <div className={cn(styles.data, styles.containerServices)}>
        <h3 className={styles.title}>Servicios</h3>
        <div className={styles.containerText}>
          <div className={styles.icon}>
            <ArrowForwardIosIcon />
          </div>
          <a href="/servicios" className={styles.text}>
            Asesorias Ambientales
          </a>
        </div>
        <div className={styles.containerText}>
          <div className={styles.icon}>
            <ArrowForwardIosIcon />
          </div>
          <a href="/servicios" className={styles.text}>
            Gestion en prevencion de riesgos
          </a>
        </div>
        <div className={styles.containerText}>
          <div className={styles.icon}>
            <ArrowForwardIosIcon />
          </div>
          <a href="/servicios" className={styles.text}>
            Cursos
          </a>
        </div>
      </div>
      <div className={styles.data}>
        <h3 className={styles.title}>Contacta con nosotros</h3>
        <p className={styles.addresse}>
          Contramaestre Micalvi #522, of.42, Ñuñoa
        </p>
        <div className={styles.containerText}>
          <div className={styles.icon}>
            <PhoneIcon />
          </div>
          <a href="tel:56979580178" className={styles.text}>
            +56979580178
          </a>
        </div>
        <div className={styles.containerText}>
          <div className={styles.icon}>
            <EmailIcon />
          </div>
          <a
            href="mailto: jcfernandez@consultoracaf.cl"
            className={styles.text}
          >
            jcfernandez@consultoracaf.cl
          </a>
        </div>
      </div>
    </div>
  );
}
export default Footer;
