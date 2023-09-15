import { Component } from "react";
import First from "./compoents/First";
import Second from "./compoents/Second";
import Customer from "./compoents/Customer";
import CustomerTwo from "./compoents/CustomerTwo";

export default class App extends Component{
  render(){
    let customer = {name:"Peeku Singh", mobile: "9009111222", age:26};
    return <div>
      <h1>It is app component....</h1>
      <First message="Hello First (Sent by app component)"/>
      <Second a={20} b = {10}/>
      <Customer name="Cheeku Singh" mobile="9009111222" age={25}/>
      <CustomerTwo customerDetails = {customer}/>
    </div>
  }
}