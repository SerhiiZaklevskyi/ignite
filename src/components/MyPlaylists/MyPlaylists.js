import React from "react";
import styles from "./MyPlaylists.module.css";
import MyPlayList from "./MyPlayList/MyPlayList";
class MyPlaylists extends React.Component {
  constructor(props) {
    super(props);
    this.emptyCheck = this.emptyCheck.bind(this);
  }

  emptyCheck() {
    if (this.props.tracks.length === 0) {
      return (
        <div className={styles.emptyPlaylist}>
          Your saved playlist will be displayed here
        </div>
      );
    } else {
      return (
        <div className={styles.MyPlayList}>
          <MyPlayList
            tracks={this.props.tracks}
            onRemove={this.props.onRemove}
            nameUpdate={this.props.nameUpdate}
          />
        </div>
      );
    }
  }

  render() {
    return <div className={styles.wrapper}>{this.emptyCheck()}</div>;
  }
}

export default MyPlaylists;
