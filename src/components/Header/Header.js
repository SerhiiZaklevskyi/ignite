import React from "react";
import styles from "./Header.module.css";
import {Link} from "react-router-dom";

function Header() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span>
          <Link to='/MyPlaylists' className={styles.link}>
            My Playlists
          </Link>
        </span>
        <span>
          <Link to='/' className={styles.link}>
            Music
          </Link>
        </span>
      </div>
    </div>
  );
}

export default Header;
