import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Dropdown extends Component {
    constructor(prop){
        super(prop);
        this.state= {
            options:['English','Tamil','Telugu']
        }
    }
  render() {
    
      return(
        <div className="dropdown">
        <button 
        className="btn languagebtn btn-secondary dropdown-toggle " 
        type="button" 
        id="ddLanguageBtn" 
        data-toggle="dropdown">
    English (US)
    </button>
       {
           this.state.options.map((id,i)=>
           <a className="dropdown-item" key={i} href="#">{id}</a>)
       }
</div>
      );
   
  }
}



export default Dropdown;
