import React from "react";
import styles from "./MyPlaylists.module.css";
import MyPlayList from "./MyPlayList/MyPlayList";
class MyPlaylists extends React.Component {
  render() {
    return (
      <div>
        <MyPlayList />
      </div>
    );
  }
}

export default MyPlaylists;
