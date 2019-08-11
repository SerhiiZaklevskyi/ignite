import React from "react";
import styles from "./MyPlayList.module.css";
import MyTrackList from "./MyTrackList/MyTrackList";

class MyPlayList extends React.Component {
  render() {
    return (
      <div className={styles.playList}>
        <h1>{this.props.nameUpdate}</h1>
        <MyTrackList
          tracks={this.props.tracks}
          onRemove={this.props.onRemove}
        />
      </div>
    );
  }
}

export default MyPlayList;
