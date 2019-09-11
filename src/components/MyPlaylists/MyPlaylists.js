import React from "react";
import styles from "./MyPlaylists.module.css";
import MyPlayList from "./MyPlayList/MyPlayList";
class MyPlaylists extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.MyPlayList}>
          <MyPlayList
            savedTracks={this.props.savedTracks}
            removeTrack={this.props.removeTrack}
            nameUpdate={this.props.nameUpdate}
            nameValue={this.props.nameValue}
          />
        </div>
      </div>
    );
  }
}

export default MyPlaylists;
