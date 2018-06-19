import React from "react";

// stateless component can be declared as a function 
const Navbar = (props) =>  (
            <div className = "navbar navbar-dark bg-success" >
                <div className = "float-left">
                Click Game
            </div>
            <div className = "float-right">
            <p> Score: 
            <span>{props.score}/12</span> | High Score: 
            <span>{props.newHighScore}</span>
            </p>

            </div>
            </div>
        )

export default Navbar; 