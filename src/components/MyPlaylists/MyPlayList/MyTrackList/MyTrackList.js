import React from "react";
import MyTrack from "./MyTrack/MyTrack";
import styles from "./MyTrackList.module.css";

class MyTrackList extends React.Component {
  render() {
    return (
      <div className={styles.trackList}>
        {this.props.tracks.map(track => {
          return (
            <MyTrack
              key={track.track_id}
              track={track}
              onRemove={this.props.onRemove}
            />
          );
        })}
      </div>
    );
  }
}

export default MyTrackList;
