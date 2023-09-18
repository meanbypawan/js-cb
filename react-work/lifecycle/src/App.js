import { Component } from "react";

export default class App extends Component{
  constructor(){
    super();
    this.state={
      counter:100
    }
    console.log("App constructor called...");
  }
  render(){
    console.log("App Render called..");
    return <div>
      <h1>App Component....</h1>
      {this.state.counter} : <button onClick={()=>this.setState({counter: this.state.counter+1})}>Increment</button>
    </div>
  }
  componentDidMount(){
    console.log("Component Did mount called....");
  }

  componentDidUpdate(){
    console.log("Component Did update called....");
  }

  componentWillUnmount(){
    console.log("Component unmounted....");
  }
}