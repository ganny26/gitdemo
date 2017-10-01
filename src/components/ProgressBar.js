import React, { Component } from 'react';


class ProgressBar extends Component {
  constructor(props) {

    super(props);
    this.state = {
      pbWidth: 0
    };
  }

  componentDidMount() {
    this.setScrollWidth();
  }

  setScrollWidth() {
    var totalScroll = 50;

  }
  render() {
    let pbstyle = {
      width: this.state.pbWidth + '%'
    }
    return (
      <div className="reading_progress">
        <div className="reading_progress_bar" style={pbstyle}></div>
      </div>
    );
  }

}

export default ProgressBar;
