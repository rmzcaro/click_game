
// Images rendered to screen and each image has a click event
// app tracks users score: if user clicks for first time on an image, score increments if a second click score resets to 0 
// each time an image is clicked the images rendered are shown in a different place (ie all images shuffle)
// if score is reset, the game restarts

 
import React, { Component } from 'react';
// import CharactersList from "./components/CharactersList"; 
import characters from "./characters.json";
import Wrapper from "./components/wrapper";
import ImgCard from "./imgCard";
import './App.css';
console.log(characters);

class App extends Component {

 printNum = (num) => {
console.log(num);
};

  render() {
    return (
      <div className="App">
        <div className="container">
          <Wrapper>

             {characters.map((item) => {
              // added javascript item.id within jsx
              return <ImgCard
              key= {item.id}
              id = {item.id}
              imgLink = {item.imgURI}
              printID = {this.printNum}
              /> })} 
              {/* end of map function */}
          </Wrapper>
        </div>      
        
      </div>
    )
    
  }
};

export default App;
