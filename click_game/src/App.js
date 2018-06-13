
// Images rendered to screen and each image has a click event
// app tracks users score: if user clicks for first time on an image, score increments if a second click score resets to 0 
// each time an image is clicked the images rendered are shown in a different place (ie all images shuffle)
// if score is reset, the game restarts
 

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
