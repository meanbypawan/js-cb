import { Component } from "react";

export default class Counter extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let {changeCounter} = this.props;
        return <div>
            <h1>Counter Component</h1>
            <button onClick={changeCounter}>Increment Counter</button>
        </div>
    }
}