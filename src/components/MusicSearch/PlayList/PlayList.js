import React from "react";
import styles from "./PlayList.module.css";
import {connect} from "react-redux";
import TrackList from "../../MusicSearch/TrackList/TrackList.js";
import {
  saveName,
  SaveMsgDisplay,
  clearPlaylist,
  removeTrack
} from "../../../actions/trackAction";
import {savePlaylist} from "../../../actions/savePlaylistAction";
class PlayList extends React.Component {
  constructor(props) {
    super(props);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.input = React.createRef();
  }

  savePlaylist() {
    this.props.savePlaylist(this.props.playlistTracks);
    this.input.current.value.length > 0
      ? this.props.saveName(this.input.current.value)
      : this.props.saveName("New Playlist");
    this.props.clearPlaylist();
    this.props.playlistTracks.length > 0
      ? this.props.SaveMsgDisplay("Playlist Saved")
      : this.props.SaveMsgDisplay("Add at least one track");
  }

  render() {
    return (
      <div className={styles.playList}>
        <span className={styles.wrapper}>
          <input
            type='text'
            placeholder='Enter a playlist name'
            className={styles.playlistName}
            ref={this.input}
          />
        </span>
        <TrackList
          isRemoval={true}
          tracks={this.props.playlistTracks}
          removeTrack={this.props.removeTrack}
        />
        <span className={styles.btn_wrapper}>
          <button className={styles.save} onClick={this.savePlaylist}>
            Save
          </button>
        </span>
        <h1>{this.props.saveMsg}</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    playlistTracks: state.trackAction.playlistTracks,
    saveMsg: state.trackAction.saveMsg
  };
};

const MapDispatchToProps = dispatch => {
  return {
    savePlaylist: playlist => dispatch(savePlaylist(playlist)),
    saveName: nameValue => dispatch(saveName(nameValue)),
    SaveMsgDisplay: saveMsg => dispatch(SaveMsgDisplay(saveMsg)),
    clearPlaylist: () => dispatch(clearPlaylist()),
    removeTrack: track => dispatch(removeTrack(track))
  };
};

export default connect(
  mapStateToProps,
  MapDispatchToProps
)(PlayList);
