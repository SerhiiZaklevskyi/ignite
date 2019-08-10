import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span>My Playlists</span>
        <span>Music</span>
      </div>
    </div>
  );
}

export default Header;
