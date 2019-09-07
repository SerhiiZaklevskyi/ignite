import React from "react";
import styles from "./MyPlayList.module.css";
import TrackList from "../../MusicSearch/TrackList/TrackList";

const MyPlayList = props => {
  return (
    <div className={styles.playList}>
      <h1></h1>
      {/* <TrackList isRemoval={false}/> */}
    </div>
  );
};

export default MyPlayList;
