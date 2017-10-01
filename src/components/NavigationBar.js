import React, { Component } from 'react';
import 'typeface-roboto';
import Player from './Player';
import '../styles/reader.css';
import '../styles/index.css';
class NavigationBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <span className="icon-WA2" />
          <span className="icon-cook_wa2cook" />
        </a>
        <div className="playerContent">
          <Player />
        </div>
      </nav>

    );
  }
}

export default NavigationBar;
