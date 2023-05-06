import { Component } from "react"
    class Button extends Component{
        render(){
            return(
                <li className={this.props.className}>
                    {this.props.children}
                </li>
            )
        }
    }
    export default Button


