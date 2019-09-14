import React from "react";
import styles from "./MyPlaylists.module.css";
import MyPlayList from "./MyPlayList/MyPlayList";
const MyPlaylists = props => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.MyPlayList}>
        <MyPlayList />
      </div>
    </div>
  );
};

export default MyPlaylists;
