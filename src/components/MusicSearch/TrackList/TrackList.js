import React from "react";
import Track from "./Track/Track";
import styles from "./TrackList.module.css";

const TrackList = props => {
  return (
    <div className={styles.trackList}>
      <Track />
    </div>
  );
};

export default TrackList;
