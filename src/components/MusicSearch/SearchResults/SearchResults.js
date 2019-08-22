import React from "react";
import styles from "./SearchResults.module.css";

import TrackList from "../TrackList/TrackList";

class SearchResults extends React.Component {
  render() {
    return (
      <div className={styles.searchResults}>
        <h1>Results</h1>
        <h1>{this.props.errorMsg}</h1>
        <TrackList
          tracks={this.props.searchResults}
          onAdd={this.props.onAdd}
          isRemoval={false}
        />
      </div>
    );
  }
}

export default SearchResults;
