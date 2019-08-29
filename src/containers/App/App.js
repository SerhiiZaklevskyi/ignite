import React from "react";
import MusicSearch from "../../components/MusicSearch/MusicSearch";
import styles from "./App.module.css";
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer";
import MyPlaylists from "../../components/MyPlaylists/MyPlaylists";
import {BrowserRouter, Route} from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
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
