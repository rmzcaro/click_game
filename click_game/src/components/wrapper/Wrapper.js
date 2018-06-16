import React, {Component} from "react";

class Wrapper extends Component {
    render() {
        return (
            <div className="row">
                {this.props.children}
            </div>
        )
    }
}

export default Wrapper; 