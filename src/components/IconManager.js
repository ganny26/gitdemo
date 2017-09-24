import React, { Component } from 'react';
import PropTypes from 'prop-types';

class IconManager extends Component {

  render() {
    const children = this.props.children;
   
    return (
    <span className="material-icons font-ic-style" aria-hidden="true">
      {children}
    </span>
    );
  }
}



export default IconManager;
