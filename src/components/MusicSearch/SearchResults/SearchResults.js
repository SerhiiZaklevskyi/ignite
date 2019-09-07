import React from "react";
import styles from "./SearchResults.module.css";

import TrackList from "../TrackList/TrackList";

const SearchResults = props => {
  return (
    <div className={styles.searchResults}>
      <h1>Results</h1>
      <h1></h1>
      <TrackList
        tracks={props.searchResult}
        isRemoval={false}
        addTrack={props.addTrack}
      />
    </div>
  );
};

export default SearchResults;
