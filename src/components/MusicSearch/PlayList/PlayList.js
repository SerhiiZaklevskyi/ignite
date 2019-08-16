import React from "react";
import styles from "./PlayList.module.css";

import TrackList from "../../MusicSearch/TrackList/TrackList.js";
class PlayList extends React.Component {
  render() {
    return (
      <div className={styles.playList}>
        <span className={styles.wrapper}>
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
        <span className={styles.btn_wrapper}>
          <button className={styles.save} onClick={this.props.onSave}>
            Save
          </button>
        </span>
      </div>
    );
  }
}

export default PlayList;
