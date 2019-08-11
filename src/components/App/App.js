import React from "react";
import MusicSearch from "../MusicSearch/MusicSearch";
import styles from "./App.module.css";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import MyPlaylists from "../MyPlaylists/MyPlaylists";

class App extends React.Component {
  render() {
    return (
      <div className={styles.App}>
        <Header />
        <MusicSearch />
        <MyPlaylists />
        <Footer />
      </div>
    );
  }
}

export default App;
