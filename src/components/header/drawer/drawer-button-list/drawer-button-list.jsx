import React from "react";
import cn from "classnames";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { Clear } from "@material-ui/icons";

import styles from "./drawer-button-list.module.css";
import { dataButtonsList } from "../../header";
import Logo from "../../../logo";

// Icon API = https://google.github.io/material-design-icons/

const DrawerButtonList = ({ toggleDrawer }) => {
  const history = useHistory();

  const onClickButtonDrawerList = (item) => {
    toggleDrawer();
    const pathItem = item.path;
    history.push(pathItem);
  };

  return (
    <div className={styles.containerDrawerList}>
      <div className={styles.headerDrawerList}>
        <div className={styles.containerLogo}>
          <Logo />
        </div>
        <div className={styles.containerButtonCloseDrawer}>
          <button
            type="button"
            className={styles.buttonCloseDrawer}
            onClick={() => toggleDrawer(false)}
          >
            <Clear className={styles.clearIcon} />
          </button>
        </div>
      </div>
      <ul className={styles.drawerList}>
        {dataButtonsList.map((item, index) => {
          return (
            <li key={index.id} className={cn(styles.buttonDrawerList)}>
              <button
                type="button"
                className={styles.buttonDrawerList}
                onClick={() => onClickButtonDrawerList(item)}
              >
                <div className={styles.name}> {item.name}</div>
              </button>
            </li>
          );
        })}
      </ul>
      <div className={styles.data}>
        <p className={styles.addresse}>
          Contramaestre Micalvi #522, of.42, Ñuñoa
        </p>
        <div className={styles.containerText}>
          <a href="tel:5551234567" className={styles.text}>
            Teléfono : +56222225473
          </a>
        </div>
        <div className={styles.containerText}>
          <a href="mailto: abc@example.com" className={styles.text}>
            E-mail : info@contacto.cl
          </a>
        </div>
      </div>
    </div>
  );
};

DrawerButtonList.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
};
export default DrawerButtonList;
