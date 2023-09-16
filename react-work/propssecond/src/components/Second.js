import { Component } from "react";
import Third from "./Third";

export default class Second extends Component{
    constructor(props){
       super(props);
    }
    render(){
        let {counter,changeCounter} = this.props;
        return <div>
          <h1>Second Component : ({counter})</h1>
          <Third counter={counter} changeCounter={changeCounter}/>
        </div>
    }
}