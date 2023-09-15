import { Component } from "react";

export default class Customer extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let {name,mobile,age}= this.props;
        return <div>
            <h1>It is customer component</h1>
            {name} : {mobile} : {age}
        </div>
    }
}