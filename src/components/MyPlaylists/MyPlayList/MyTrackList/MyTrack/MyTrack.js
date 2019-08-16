import React from "react";
import styles from "./MyTrack.module.css";
class MyTrack extends React.Component {
  constructor(props) {
    super(props);
    this.removeMyTrack = this.removeMyTrack.bind(this);
  }
  removeMyTrack() {
    this.props.onRemove(this.props.track);
  }
  render() {
    return (
      <div className={styles.Track}>
        <p className={styles.songName}>{this.props.track.title}</p>
        <p className={styles.artistName}>
          {this.props.track.artist} || {this.props.track.album}
        </p>
        <div>
          <button className={styles.remove} onClick={this.removeMyTrack}>
            -
          </button>
        </div>
      </div>
    );
  }
}

export default MyTrack;
