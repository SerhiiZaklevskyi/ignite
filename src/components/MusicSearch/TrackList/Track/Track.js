import React from "react";
import styles from "./Track.module.css";

class Track extends React.Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
  }

  addTrack() {
    this.props.addTrack(this.props.track);
  }

  renderAction() {
    if (this.props.isRemoval) {
      return (
        <button className={styles.trackAction} onClick={this.removeTrack}>
          -
        </button>
      );
    } else {
      return (
        <button className={styles.trackAction} onClick={this.addTrack}>
          +
        </button>
      );
    }
  }
  render() {
    return (
      <div className={styles.Track}>
        <p className={styles.songName}>{this.props.track.name}</p>
        <p className={styles.artistName}>{this.props.track.artist}</p>
        <div>{this.renderAction()}</div>
      </div>
    );
  }
}
export default Track;
