import React from "react";
import styles from "./PlayList.module.css";

import TrackList from "../../MusicSearch/TrackList/TrackList.js";
const PlayList = props => {
  return (
    <div className={styles.playList}>
      <span className={styles.wrapper}>
        <input
          type='text'
          placeholder='Enter a playlist name'
          className={styles.playlistName}
          onChange={props.onChange}
        />
      </span>
      <TrackList
        tracks={props.playlistTracks}
        isRemoval={true}
        onRemove={props.onRemove}
      />
      <span className={styles.btn_wrapper}>
        <button className={styles.save} onClick={props.onSave}>
          Save
        </button>
      </span>
      <h1>{props.saveMsg}</h1>
    </div>
  );
};

export default PlayList;
