import { Component } from "react";

export default class First extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return <div>
            <h1>It is First component</h1>
            <h3>{this.props.message}</h3>
        </div>
    }
}