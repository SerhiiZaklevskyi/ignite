import React from "react";
import styles from "./SearchResults.module.css";
import {connect} from "react-redux";
import TrackList from "../TrackList/TrackList";
import {addTrack} from "../../../actions/trackAction";

const SearchResults = props => {
  function preloader() {
    if (props.isFetching === true) {
      return <p>Loading...</p>;
    } else {
      return (
        <TrackList
          tracks={props.music}
          isRemoval={false}
          addTrack={props.addTrack}
        />
      );
    }
  }
  return (
    <div className={styles.searchResults}>
      <h1>Results</h1>
      <h1>{props.error}</h1>
      {preloader()}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    error: state.fetchMusic.error,
    music: state.fetchMusic.music,
    isFetching: state.fetchMusic.isFetching
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTrack: track => dispatch(addTrack(track))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults);
