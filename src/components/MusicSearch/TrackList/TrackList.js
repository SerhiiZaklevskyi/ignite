import React from "react";
import Track from "./Track/Track";
import styles from "./TrackList.module.css";

const TrackList = props => {
  return (
    <div className={styles.trackList}>
      {props.tracks.map(track => {
        return (
          <Track
            key={track.track_id}
            track={track}
            addTrack={props.addTrack}
            removeTrack={props.removeTrack}
            isRemoval={props.isRemoval}
          />
        );
      })}
    </div>
  );
};

export default TrackList;
