import React, { Component } from "react";
import ReactDOM from "react-dom";

import { Header, Footer, PlayList } from "./components";

import playlist from "./playlist.json";

import "./styles.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loaded: true,
      uid: 0,
      title: playlist[0].title,
      src: playlist[0].src,
      poster: playlist[0].poster,
      all: playlist
    };
  }

  playSong(evt) {
    evt.preventDefault();

    let uid = evt.target.id.replace("item_", "");

    this.setState({
      loaded: false,
      uid: uid,
      title: playlist[uid].title,
      src: playlist[uid].src,
      poster: playlist[uid].poster
        ? playlist[uid].poster
        : "http://via.placeholder.com/350x150?text=No Image found"
    });

    const player = document.getElementById("audioPlayer");
    player.onloadstart = () => {
      let w = setTimeout(() => {
        this.setState({ loaded: true });
        player.play();
        clearTimeout(w);
      }, 800);
    };

    player.onerror = () => {
      this.setState({
        title: "Error on load this song",
        poster:
          "http://via.placeholder.com/350x150/f55/fff?text=Error on load song"
      });
    };
  }

  render() {
    return (
      <div className="mp">
        <Header
          loaded={this.state.loaded}
          title={this.state.title}
          poster={this.state.poster}
        />
        <PlayList
          uid={this.state.uid}
          playSong={e => this.playSong(e)}
          data={this.state.all}
        />
        <Footer src={this.state.src} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
rootElement.className = "demo";
ReactDOM.render(<App />, rootElement);
