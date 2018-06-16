import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// PSEUDOCODE - this goes in components folder
// render nav bar 
// render header 
// render main with container and images
// render footer
// in nav bar: app tracks users score: if user clicks for first time on an image, score increments if a second click score resets to 0 
// in main container: each time an image is clicked the images rendered are shown in a different place (ie all images shuffle)
// in nav bar: if score is reset, the game restarts
 
