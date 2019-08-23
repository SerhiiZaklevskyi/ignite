import React from "react";
import styles from "./MyPlayList.module.css";
import TrackList from "../../MusicSearch/TrackList/TrackList";

const MyPlayList = props => {
  return (
    <div className={styles.playList}>
      <h1>{props.nameUpdate}</h1>
      <TrackList
        isRemoval={true}
        tracks={props.tracks}
        onRemove={props.onRemove}
      />
    </div>
  );
};

export default MyPlayList;
