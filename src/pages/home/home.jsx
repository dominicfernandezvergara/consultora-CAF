import React from "react";
import styles from "./home.module.css";
import FirstSectionHome from "../../components/home-components/first-section-home";
import SecondSectionHome from "../../components/home-components/second-section-home";
import ThirdSectionHome from "../../components/home-components/third-section-home";
import FourthSectionHome from "../../components/home-components/fourth-section-home";
import FifthSectionHome from "../../components/home-components/fifth-section-home/fifth-section-home";
import Footer from "../../components/footer";
import UseScrollToTop from "../../hooks/use-scroll-to-top";

function Home() {
  UseScrollToTop();
  return (
    <div className={styles.containerHome}>
      <FirstSectionHome />
      <SecondSectionHome
        title="Problema a Solucionar"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua hola."
        buttonText="cotiza aquí"
        paths="./cotizacion"
        colorButton="primary"
      />
      <ThirdSectionHome
        title="Mensaje Empatico Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
        buttonText="cotiza aquí"
        paths="./cotizacion"
        colorButton="secondary"
        styleBlack={true}
      />
      <FourthSectionHome />
      <FifthSectionHome
        title="¿Cómo funciona?"
        buttonText="cotiza aquí"
        paths="./cotizacion"
        colorButton="secondary"
        styleBlack={true}
      />
      <Footer />
    </div>
  );
}

export default Home;
