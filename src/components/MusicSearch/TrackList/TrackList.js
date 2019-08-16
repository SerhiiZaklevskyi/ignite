import React from "react";
import Track from "./Track/Track";
import styles from "./TrackList.module.css";

class TrackList extends React.Component {
  render() {
    return (
      <div className={styles.trackList}>
        {this.props.tracks.map(track => {
          return (
            <Track
              key={track.track_id}
              track={track}
              onAdd={this.props.onAdd}
              onRemove={this.props.onRemove}
              isRemoval={this.props.isRemoval}
            />
          );
        })}
      </div>
    );
  }
}

export default TrackList;
