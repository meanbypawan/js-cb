import { Component } from "react";
import First from "./components/First";
import Counter from "./components/Counter";

export default class App extends Component{
  constructor(){
    super();
    this.state = {
      counter: 100
    }
  }
  changeCounter = ()=>{
    this.setState({counter: this.state.counter+1});
  }
  render(){
    return <div>
      <h1>App Component</h1>
      {/* <First message="Message From App (Top Parent)"/> */}
      
      {/* <button onClick={this.changeCounter}>Change Counter</button>
      <h1>Counter : {this.state.counter}</h1>
      <Counter changeCounter = {this.changeCounter}/>
    */}

     <First counter={this.state.counter} changeCounter = {this.changeCounter}/> 
    </div>
  }
}