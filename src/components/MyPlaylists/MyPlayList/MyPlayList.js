import React from "react";
import styles from "./MyPlayList.module.css";
import MyTrackList from "./MyTrackList/MyTrackList";
import {connect} from "react-redux";
import {removeMyTrack} from "../../../actions/savePlaylistAction";

const MyPlayList = props => {
  return (
    <div className={styles.playList}>
      <h1>{props.nameValue}</h1>
      <MyTrackList
        tracks={props.savedTracks}
        removeMyTrack={props.removeMyTrack}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    savedTracks: state.savePlaylist.savedPlaylist,
    nameValue: state.trackAction.nameValue
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeMyTrack: track => dispatch(removeMyTrack(track))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPlayList);
