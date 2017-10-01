import React, { PureComponent } from 'react';
import PropTypes from "prop-types";

class IFrameComponent extends PureComponent {

  render() {    
    return React.createElement("iframe",{
        ref: "iframe",
        id:"wa2frame",
        src: this.props.url,
        style: Object.assign({}, {
        border:"0",
          position: this.props.position || "absolute",
          display: this.props.display || "block",
          height: this.props.height || "100%",
          width: this.props.width || "0px"
        }, this.props.styles || {}),
        height: this.props.height || "100%",
        width: this.props.width || "0px",
    })
  }
}

IFrameComponent.propTypes = {
    url: PropTypes.string.isRequired,
    width: PropTypes.string,
    position: PropTypes.string,
    display: PropTypes.string,
    height: PropTypes.string,
    styles: PropTypes.object,
    allowFullScreen: PropTypes.bool,
  }

export default IFrameComponent;
