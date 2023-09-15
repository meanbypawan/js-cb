import { Component } from "react";

export default class Second extends Component{
    constructor(props){
        super(props); // props : {a:20,b:10}
    }
    render(){
        return <div>
            <h1>Second Component</h1>
            <h3>Addition : {this.props.a + this.props.b}</h3>
        </div>
    }
}