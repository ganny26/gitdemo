import React, { Component } from 'react';
import NavigationBar from "./components/NavigationBar";
import MainContent from "./components/MainContent";
import ProgressBar from "./components/ProgressBar";
class App extends Component {
  render() {
    return (
        <div>
          <ProgressBar/>
          <NavigationBar/>
          <MainContent/>
        </div>
    );
  }
}

export default App;
