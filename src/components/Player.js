import React, { Component } from 'react';
import 'typeface-roboto';
import Icon from 'material-ui/Icon';
import IconManager from './IconManager';
import Dropdown from './Dropdown';
class Player extends Component {
  render() {
    return (
        <div>
            <div className="dropdown">
                    <button className="btn languagebtn btn-secondary dropdown-toggle languagedd" type="button" id="ddLanguageBtn" data-toggle="dropdown">
                English (US)
            </button>
            <div className="dropdown-menu" aria-labelledby="ddLanguageBtn">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>
            </div>
            <Icon color="primary" style={{ fontSize: 55,cursor:'pointer' }}>play_arrow</Icon>
            <Icon color="primary" style={{ fontSize: 55,cursor:'pointer' }}>pause
            </Icon>
            <Icon color="primary" style={{ fontSize: 55,cursor:'pointer' }}>
                stop
            </Icon>
            <button className="btn languagebtn btn-secondary dropdown-toggle languagedd" type="button" id="ddSpeedBtn" data-toggle="dropdown">
                Speed
            </button>
            <div className="dropdown-menu" aria-labelledby="ddSpeedBtn">
                <a className="dropdown-item" href="#">Low</a>
                <a className="dropdown-item" href="#">Medium</a>
                <a className="dropdown-item" href="#">High</a>
            </div>
        </div>
    
</div>

    );
  }
}

export default Player;
