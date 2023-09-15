import { Component } from "react";

export default class CustomerTwo extends Component{
    constructor(props){
        super(props);
    }
    render(){
        console.log(this.props);
        return <div>
            <h1>Customer Two component</h1>
            {this.props.customerDetails.name} {this.props.customerDetails.mobile} {this.props.customerDetails.age} 
        </div>
    }
}