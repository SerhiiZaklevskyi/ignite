import React from "react";
import Track from "./Track/Track";
import styles from "./TrackList.module.css";

const TrackList = props => {
  return (
    <div className={styles.trackList}>
      {props.tracks.map(track => {
        return <Track key={track.id} track={track} addTrack={props.addTrack} />;
      })}
    </div>
  );
};

export default TrackList;
