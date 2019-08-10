import React from "react";
import styles from "./TrackList.module.css";
import Track from "./Track/Track";

class TrackList extends React.Component {
  render() {
    return (
      <div className={styles.trackList}>
        <Track />
        <Track />
        <Track />
        <Track />
        <Track />
        <Track />
      </div>
    );
  }
}

export default TrackList;
