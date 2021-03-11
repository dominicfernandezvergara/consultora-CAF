import React from "react";
import RoomIcon from "@material-ui/icons/Room";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";

import styles from "./contact-data.module.css";

function ContactData() {
  return (
    <div className={styles.containerContactData}>
      <h3 className={styles.title}>Información de contacto</h3>
      <div className={styles.data}>
        <div className={styles.containerText}>
          <div className={styles.iconLink}>
            <RoomIcon />
          </div>
          <div className={styles.containerText}>
            <p className={styles.text}>Contramaestre Micalvi #522 of.42</p>
          </div>
        </div>
        <div className={styles.containerText}>
          <div className={styles.iconLink}>
            <EmailIcon />
          </div>
          <div className={styles.containerText}>
            <a
              href="mailto: jcfernandez@consultoracaf.cl"
              className={styles.text}
            >
              jcfernandez@consultoracaf.cl
            </a>
          </div>
        </div>
        <div className={styles.containerText}>
          <div className={styles.iconLink}>
            <PhoneIcon />
          </div>
          <a href="tel:56979580178" className={styles.text}>
            +56979580178
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactData;
