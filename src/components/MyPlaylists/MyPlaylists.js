import React from "react";
import styles from "./MyPlaylists.module.css";
import MyPlayList from "./MyPlayList/MyPlayList";
class MyPlaylists extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.MyPlayList}>
          <MyPlayList
            tracks={this.props.tracks}
            onRemove={this.props.onRemove}
            nameUpdate={this.props.nameUpdate}
          />
        </div>
      </div>
    );
  }
}

export default MyPlaylists;
