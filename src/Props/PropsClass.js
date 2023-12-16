import React,{Component} from "react"
export default class PropsClass extends Component{
    render(){
        return(
            <div>
                <h1>I am studying in {this.props.college}, Coimbatore</h1>
            </div>
        )
    } 
}