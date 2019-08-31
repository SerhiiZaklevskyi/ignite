import React from "react";
import styles from "./SearchBar.module.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  search() {
    this.props.search(this.inputValue.value);
  }
  handleKeyPress(event) {
    if (event.key === "Enter") {
      this.props.search();
    }
  }

  render() {
    return (
      <div className={styles.searchBar}>
        <input
          type='text'
          placeholder='Enter a Song  name'
          className={styles.search}
          ref={input => {
            this.inputValue = input;
          }}
          onKeyPress={this.handleKeyPress}
        />
        <p>
          <button className={styles.search_btn} onClick={this.search}>
            Search
          </button>
        </p>
      </div>
    );
  }
}

export default SearchBar;
