import React, { Component } from 'react';
import Dropdown from './Dropdown';

class RightMenu extends Component {
    constructor(props) {

        super(props);

    }


    render() {
        let readList = ['Ingredients', 'Method'];
        let ingpurpose = 'READ';
                return (
            <Dropdown value={readList} purpose={ingpurpose} name='Read' />
        );
    }

}

export default RightMenu;
