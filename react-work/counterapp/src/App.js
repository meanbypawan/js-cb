import { Component } from "react";

export default class App extends Component{
  constructor(){
    super();
    this.state = {
      evenCounter : 0,
      oddCounter : 1
    }
  }
  changeEvenCounter = ()=>{
    this.setState({evenCounter: this.state.evenCounter+2});
  }
  render(){
    return <div style={{padding:"50px"}}>
      <label>{this.state.evenCounter}</label>
      <button disabled={this.state.evenCounter>10 ? true : false} onClick={this.changeEvenCounter}>Even Counter</button>&nbsp;&nbsp;&nbsp;
      
      <label>{this.state.oddCounter}</label>
      <button disabled={this.state.oddCounter>9? true: false} onClick={()=>this.setState({oddCounter: this.state.oddCounter+2})}>Odd Counter</button>
    </div>
  }
}