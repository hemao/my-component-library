import React, { Component } from "react";
import './form.css'

class Counter extends Component {
  constructor(){
      super();
      this.state = {
          count: 0
      }
  }   

  render() {
    return (

        <div className="counter">
            <div><img src={require("./minus.png")} onClick={this.decreaseCount}/></div>
            <div><input type="number" value={this.state.count} readOnly/></div>
            <div><img src={require("./plus.png")} onClick={this.increaseCount}/></div>
        </div>
    
    );
  }

  increaseCount = () => {
      let newCount =  this.state.count + 1;
      this.setState({
          count: newCount
      })
  }

  decreaseCount = () => {
    let newCount =  this.state.count - 1;
    this.setState({
        count: newCount
    })
}
}

export default Counter;

