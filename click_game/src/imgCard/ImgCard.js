// import react, this file JSX
import React, {Component} from "react";

// now I can use component functions to render 
class ImgCard extends Component {
    clicked = () => {
        this.props.printID(this.props.id)
    }
    render() {
    return (
            <div className = "col-md-3 my-3" onClick = {this.clicked}>
            {/* the code above is refercing two actions, it's an event listener and also it's passing values from id */}
                <img src={this.props.imgLink} alt="drstrange" width = "200px" height ="150px"/>
                
                </div>
        )
    }
}

export default ImgCard;