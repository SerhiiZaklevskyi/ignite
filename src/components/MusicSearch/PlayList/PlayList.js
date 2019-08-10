import React from "react";
import styles from "./PlayList.module.css";

import TrackList from "../../MusicSearch/TrackList/TrackList.js";
class PlayList extends React.Component {
  render() {
    return (
      <div className={styles.playList}>
        <TrackList tracks={this.props.playlistTracks} />
        <span>
          <input
            type='text'
            placeholder='Enter a playlist name'
            className={styles.playlistName}
          />
        </span>

        <button className={styles.save}>Save</button>
      </div>
    );
  }
}

export default PlayList;
