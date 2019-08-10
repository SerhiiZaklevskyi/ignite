import React from "react";
import styles from "./SearchResults.module.css";

import TrackList from "../../TrackList/TrackList";

class SearchResults extends React.Component {
  render() {
    return (
      <div className={styles.searchResults}>
        <h1>Results</h1>
        <TrackList />
      </div>
    );
  }
}

export default SearchResults;
