import React, { Component } from 'react';


class ProgressBar extends Component {
  constructor(props) {

    super(props);
    this.state = {
      pbWidth: this.props.value
    };
  }

  componentDidMount() {
 
  }


  render() {
    let pbstyle = {
      width: this.state.pbWidth + '%'
    }
    return (
      <div className="reading_progress">
        <div className={`reading_progress_bar ${this.props.isintemediate ? 'indeterminate' : ''}`} style={pbstyle}></div>
      </div>
    );
  }

}

export default ProgressBar;
