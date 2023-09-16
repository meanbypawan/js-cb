import { Component } from "react";
import Second from "./Second";

export default class First extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let {counter,changeCounter} = this.props;
        return <div>
          <h1>First Component : ({counter})</h1>
          <Second counter={counter} changeCounter={changeCounter}/>
        </div>
    }
}