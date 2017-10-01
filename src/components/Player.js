import React, { Component } from 'react';
import 'typeface-roboto';
import Icon from 'material-ui/Icon';
import IconManager from './IconManager';
import Dropdown from './Dropdown';
class Player extends Component {
    render() {
        let languageList = ['English(IND)', 'English (US)', 'English(UK)'];
        let speedList = ['Low', 'Medium', 'High'];
        return (
            <div className="row">
                <div className="col-md-4">
                    <Dropdown value={languageList} name='Select Language' />
                </div>
                <div className="col-md-4 player-control">
                    <Icon color="primary" style={{ fontSize: 55, cursor: 'pointer' }}>play_arrow</Icon>
                    <Icon color="primary" style={{ fontSize: 55, cursor: 'pointer' }}>pause</Icon>
                    <Icon color="primary" style={{ fontSize: 55, cursor: 'pointer' }}>stop</Icon>
                </div>
                <div className="col-md-4">
                    <Dropdown value={speedList} name='Speed' />
                </div>
            </div>
        );
    }
}

export default Player;
