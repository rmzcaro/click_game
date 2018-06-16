import React from "react";
import "./CharactersList.css";

const CharactersList = props => (
    <div className ="card">
    <div className="img-container">
    <img alt={props.name} src={props.image}/>
    </div>

    <div className="content">
    <ul>
        <li>
            // NOT NECESSARY PROBABLY
            </li>
        </ul>
    </div>
    </div>
);

export default CharactersList; 
