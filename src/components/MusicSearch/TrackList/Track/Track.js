import React from "react";
import styles from "./Track.module.css";

class Track extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.Track}>
        <p className={styles.songName}>{this.props.track.name}</p>
        <p className={styles.artistName}>{this.props.track.artist}</p>
        <div></div>
      </div>
    );
  }
}
export default Track;
