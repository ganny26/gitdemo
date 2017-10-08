import React, { Component } from 'react';
import PropTypes from 'prop-types';
import VoiceController from '../controller/VoiceController';
function DDList(props) {
    const options = props.option;
    const action = props.action;
    const listItems = options.map((a, index) => {
        return (<li className="dropdown-item" key={index}  onClick={handleClick.bind(this,action)}>
            <a  href="#" >
                {a}
            </a>
        </li>)
    })

    return (
        <ul className="dropdown-menu">
            {listItems}
        </ul>
    )
}

function handleClick(e,act){
    console.log("Handle Clicked",e);
    switch(e){
        case 'READ':{
            VoiceController.getIngredients();
            break;
        }
        case 'LANGUAGE':{
            VoiceController.setLanguage(e);
            break;
        }
        case 'SPEED':{
            VoiceController.setSpeed();
            break;
        }
        
    }
}
class Dropdown extends Component {
    constructor(props) {
        super(props);
        console.log('dd props',props);
        this.state = {
            options: [],
            ddName: '',
            purpose:''
        }
    }

  
    componentWillMount() {
        let options = this.props.value;
        let dropdownName = this.props.name;
        let purpose = this.props.purpose;
        this.setState({
            options: options,
            ddName: dropdownName,
            purpose:purpose
        });
    }

    itemClick(){
        console.log("Clicked");
    }

    render() {
        return (
            <div className="dropdown">
                <button className="btn btn-secondary articlebtn dropdown-toggle"
                 type="button" 
                 data-toggle="dropdown" 
                 aria-haspopup="true" 
                 aria-expanded="true">
                    {this.state.ddName}
                </button>
                <DDList option={this.state.options} action={this.state.purpose}/>
            </div>
        );
    }
}



export default Dropdown;
