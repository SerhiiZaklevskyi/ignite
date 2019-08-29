import React from "react";
import styles from "./Track.module.css";

class Track extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.Track}>
        <p className={styles.songName}></p>
        <p className={styles.artistName}></p>
        <div></div>
      </div>
    );
  }
}
export default Track;
