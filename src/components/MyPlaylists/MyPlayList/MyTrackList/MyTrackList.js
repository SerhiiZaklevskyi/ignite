import React from "react";
import Track from "./MyTrack/MyTrack";
import styles from "./MyTrackList.module.css";

const MyTrackList = props => {
  return (
    <div className={styles.trackList}>
      {props.tracks.map(track => {
        return (
          <Track
            key={track.track_id}
            track={track}
            removeMyTrack={props.removeMyTrack}
          />
        );
      })}
    </div>
  );
};

export default MyTrackList;
