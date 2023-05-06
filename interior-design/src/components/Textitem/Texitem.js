import { Component } from "react";

class Textitem extends Component{
    render(){
        return(
            <li className={this.props.className}>
                {this.props.children}
            </li>
        )
    }
}
export default Textitem