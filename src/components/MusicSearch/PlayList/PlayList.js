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
        />
      </span>
      {/*<TrackList isRemoval={true} tracks={props.playlistTracks} /> */}
      <span className={styles.btn_wrapper}>
        <button className={styles.save}>Save</button>
      </span>
      <h1></h1>
    </div>
  );
};

export default PlayList;
