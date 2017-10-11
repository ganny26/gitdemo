import React, { Component } from 'react';
import 'typeface-roboto';
import Icon from 'material-ui/Icon';

import Dropdown from './Dropdown';
import AppConstants from '../utils/AppConstants';
class Player extends Component {
    render() {
        let languageList = AppConstants.languagelist;
        let speedList = AppConstants.speedlist;
        return (
            <div className="row">
                <div className="col-md-4">
                    <Dropdown value={languageList} onClick="{}" purpose={AppConstants.language} name='Select Language' />
                </div>
                <div className="col-md-4 player-control">
                    <Icon color="primary" style={{ fontSize: 55, cursor: 'pointer' }}>play_arrow</Icon>
                    <Icon color="primary" style={{ fontSize: 55, cursor: 'pointer' }}>pause</Icon>
                    <Icon color="primary" style={{ fontSize: 55, cursor: 'pointer' }}>stop</Icon>
                </div>
                <div className="col-md-4">
                    <Dropdown value={speedList}  purpose={AppConstants.speed} name='Speed' />
                </div>
            </div>
        );
    }
}

export default Player;
