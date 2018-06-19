
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
import Navbar from "./components/navbar";

// compares all clicks 
let memoryArr = [];

let myScore = 0; 

let newHighScore = 0; 

let win = 0; 

let loss = 0; 

// create an App class and it will have all properties of component 
class App extends Component {

state = {
  // initial values now that we have the images 
  characters: characters,
  score: 0,
  highScore: 0, 
  win: 0,
  loss: 0

}

// check if values have been clicked 
printNum = (num) => {
  if (memoryArr.includes(num)){
    myScore = 0; 
    memoryArr = [];
    newHighScore = 0; 
    // show score once change 
    this.setState({score : myScore})
    // lose number
    console.log("lost")
  }
  // game continues 
  else  {
    memoryArr.push(num)
    // console.log(memoryArr);
    // add to score if first time clicked 
    myScore++
    newHighScore++
    if (newHighScore <= this.state.highScore) {
        this.setState({score : myScore})
    }
    else {
     this.setState({score: myScore, highScore: newHighScore}); 
    }
  

  }

console.log(num);
// create a shuffle array 
let newSort = this.state.characters.sort(function() {
  return (Math.random() - 0.5);
})
// force state to take in new argument or value and re-renderr 
  this.setState({characters : newSort})

}


  render() {
    return (
      <div className="App">
      {/* passing JS */}
      <Navbar 
      score = {this.state.score}
      newHighScore = {this.state.highScore}/>
        <div className="container">
          <Wrapper>
            {this.state.characters.map((item) => {
              // added javascript item.id within jsx
              return <ImgCard
              key= {item.id}
              id = {item.id}
              imgLink = {item.imgURI}
              printNum = {this.printNum}
              /> })} 
              {/* end of map function */}
          </Wrapper>
        </div>      
        
      </div>
    )
    
  }
};



export default App;
