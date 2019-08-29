import React from "react";
import styles from "./Header.module.css";
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.link}>My Playlists</span>
        <span className={styles.link}>Music</span>
      </div>
    </div>
  );
};

export default Header;
