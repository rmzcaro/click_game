
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

// compares all clicks 
let memoryArr = [];

// create an App class and it will have all properties of component 
class App extends Component {

state = {
  // initial values now that we have the images 
  characters: characters 
}

// check if values have been clicked 
printNum = (num) => {
  if (memoryArr.includes(num)){
    // lose number
    console.log("lost")
  }
  else  {
    memoryArr.push(num)
    console.log(memoryArr);
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
