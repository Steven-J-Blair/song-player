import React from "react";

const Figure = props => (
  <figure className="mp_head_poster">
    {props.loaded ? (
      <img className="loaded" src={props.poster} />
    ) : (
      <span className="loaded_text">Loading</span>
    )}

    <figcaption>{props.title}</figcaption>
  </figure>
);

const Songs = props => (
  <ol>
    {props.data.map((item, k) => {
      return (
        <li key={k}>
          <a
            className={k == props.uid ? "active" : ""}
            onClick={e => props.playSong(e)}
            href="#"
            id={`item_${k}`}
          >
            <b>{k} </b> {item.title}
          </a>
        </li>
      );
    })}
  </ol>
);

const Header = props => (
  <header className="mp_head">
    <Figure poster={props.poster} title={props.title} loaded={props.loaded} />
  </header>
);

const Footer = props => (
  <footer className="mp_footer">
    <audio id="audioPlayer" src={props.src} controls />
  </footer>
);

const PlayList = props => (
  <section className="mp_body">
    <Songs uid={props.uid} playSong={props.playSong} data={props.data} />
  </section>
);

export { Header, Footer, PlayList };
