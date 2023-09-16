import { Component } from "react";

export default class Third extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let {counter,changeCounter} = this.props;
        return <div>
          <h1>Third Component : ({counter})</h1>
          <button onClick={changeCounter}>Change Counter</button>

        </div>
    }
}