import React from "react";
import styles from "./Track.module.css";

class Track extends React.Component {
  render() {
    return (
      <div className={styles.Track}>
        <p className={styles.songName}>{this.props.track.name}</p>
        <p className={styles.artistName}>{this.props.track.artist}</p>
        <button className={styles.trackAction}>+</button>
      </div>
    );
  }
}

export default Track;
