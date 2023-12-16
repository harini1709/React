import React,{Component } from "react";

class StateClassCom extends Component{
    state={
        color:"Yellow",
        price:121
    }
    handleChange=()=>{
        this.setState({
            color:"Red",
            price:100
        })
    }
    render(){
        return(
            <div>
                <h1>The color selected is {this.state.color}.The price is {this.state.price}</h1>
                <button onClick={this.handleChange}>Click me</button>
            </div>
        )
    }
}
export default StateClassCom;