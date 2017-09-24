import React, { Component } from 'react';
import NavigationBar from "./components/NavigationBar";
import MainContent from "./components/MainContent";
class App extends Component {
  render() {
    return (
        <div>
 <NavigationBar/>
        <MainContent/>
        </div>
       
  

    );
  }
}

export default App;
