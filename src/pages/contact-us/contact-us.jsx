import React, { Fragment } from "react";

import styles from "./contact-us.module.css";
import UseScrollToTop from "../../hooks/use-scroll-to-top";
import Footer from "../../components/footer/footer";
import Form from "../../components/contact-us-components/form";
import FifthSectionHome from "../../components/home-components/fifth-section-home";
import ContactData from "../../components/contact-us-components/contact-data/contact-data";
import HowItWork from "../../components/contact-us-components/how-it-work/how-it-work";

function ContactUs() {
  UseScrollToTop();
  return (
    <Fragment>
      <div className={styles.containerContactUs}>
        <h2 className={styles.title}>Contacta con nosotros</h2>
        <HowItWork />
        <div className={styles.wrappAlineItem}>
          <div className={styles.containerComponentForm}>
            <Form />
          </div>
          <div className={styles.containerComponentContactData}>
            <ContactData />
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}

export default ContactUs;
