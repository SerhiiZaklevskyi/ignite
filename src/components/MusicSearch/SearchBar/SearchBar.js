import React from "react";
import styles from "./SearchBar.module.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.searchBar}>
        <input
          type='text'
          placeholder='Enter a Song  name'
          className={styles.search}
        />
        <p>
          <button className={styles.search_btn}>Search</button>
        </p>
      </div>
    );
  }
}

export default SearchBar;
