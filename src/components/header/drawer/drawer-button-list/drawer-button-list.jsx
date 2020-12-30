import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { Clear } from "@material-ui/icons";

import styles from "./drawer-button-list.module.css";
import { dataButtonsList } from "../../header";

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
    </div>
  );
};

DrawerButtonList.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
};
export default DrawerButtonList;
