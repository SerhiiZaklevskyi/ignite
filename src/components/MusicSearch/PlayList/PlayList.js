import React from "react";
import styles from "./PlayList.module.css";
import TrackList from "../../TrackList/TrackList";

class PlayList extends React.Component {
  render() {
    return (
      <div className={styles.playList}>
        <span>
          <input
            type='text'
            placeholder='Enter a playlist name'
            class={styles.playlistName}
          />
        </span>
        <TrackList />
        <button className={styles.save}>Save</button>
      </div>
    );
  }
}

export default PlayList;
