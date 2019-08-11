import React from "react";
import styles from "./PlayList.module.css";

import TrackList from "../../MusicSearch/TrackList/TrackList.js";
class PlayList extends React.Component {
  render() {
    return (
      <div className={styles.playList}>
        <span>
          <input
            type='text'
            placeholder='Enter a playlist name'
            className={styles.playlistName}
            onChange={this.props.onChange}
          />
        </span>
        <TrackList
          tracks={this.props.playlistTracks}
          isRemoval={true}
          onRemove={this.props.onRemove}
        />
        <button className={styles.save} onClick={this.props.onSave}>
          Save
        </button>
      </div>
    );
  }
}

export default PlayList;
