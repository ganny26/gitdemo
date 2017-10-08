import React, { Component } from 'react';
import 'typeface-roboto';
import Player from './Player';
import '../styles/reader.css';
import '../styles/index.css';

import RightMenu from './RightMenu';
class NavigationBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light nav justify-content-between">
        <a className="navbar-brand" href="#">
          <span className="icon-WA2" />
          <span className="icon-cook_wa2cook" />
        </a>
        <div className="playerContent">
          <Player />
        </div>


        <ul className="nav">
          <li className="nav-item">
          <RightMenu/>
           
          </li>
        </ul>
  
      </nav>
    

    );
  }
}

export default NavigationBar;
