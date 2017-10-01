import React, { Component } from 'react';
import PropTypes from 'prop-types';

function DDList(props) {
    const options = props.option;
    const listItems = options.map((a, index) => {
        return <li className="dropdown-item" key={index}>
            <a href="#">{a}</a>
        </li>
    })
    console.log(listItems);
    return (
        <ul className="dropdown-menu">
            {listItems}
        </ul>
    )
}
class Dropdown extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            options: [],
            ddName: ''
        }
    }
    componentWillMount() {
        let options = this.props.value;
        let dropdownName = this.props.name;
        this.setState({
            options: options,
            ddName: dropdownName
        });
    }


    render() {
        return (
            <div className="dropdown">
                <button className="btn btn-secondary articlebtn dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    {this.state.ddName}
                </button>
                <DDList option={this.state.options} />
            </div>
        );
    }
}



export default Dropdown;
