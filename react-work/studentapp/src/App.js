import { Component } from "react";
import './App.css';
import studentData from './Data';
class App extends Component {
  constructor() {
    super();
    this.state = {
      studentList: studentData,
      brancList:["CS","IT","EC"],
      branch: null,
      addButtonStatus: true,
      rollError: ""
    }
  }
  addRecord = ()=>{
    let roll = this.roll.value;
    let name = this.name.value;
    let branch = this.branch.value;
    let mobile = this.mobile.value;
    let newRecord = {roll,name,branch,mobile};
    this.setState({studentList: [...this.state.studentList,newRecord]})
  }
  deleteRecord = (roll)=>{
    if(window.confirm("Are you sure ?")){
      let index = this.state.studentList.findIndex((student)=>student.roll == roll);
      this.state.studentList.splice(index,1);
      this.setState({studentList: [...this.state.studentList]});
    }
  }
  checkRollExist = ()=>{
    let roll = this.roll.value;
    let index = this.state.studentList.findIndex((student)=>student.roll == roll); 
    if(index != -1){
      this.setState({rollError: "Roll number already exists"});
    }
    else{
      this.setState({rollError: "",addButtonStatus:false});
    }
  }
  render() {
    return <div className="container-fluid">
      <header>
        <h3>Student App</h3>
      </header>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6">
            <div className="form-group">
              <label>Roll</label>
              <input onBlur={this.checkRollExist} type="text" ref={(rollObject)=>this.roll=rollObject} className="form-control" />
              <small className="text-danger">{this.state.rollError}</small>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Name</label>
              <input type="text" ref={(nameObject)=>this.name=nameObject} className="form-control" />
            </div>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-6">
            <div className="form-group">
              <label>Branch</label>
              <select className="form-control" ref={(branchObject)=>this.branch=branchObject}>
                {this.state.brancList.map((branch,index)=><option key={index}>{branch}</option>)}
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Mobile</label>
              <input type="text" className="form-control" ref={(mobileObject)=>this.mobile=mobileObject} />
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <button disabled={this.state.addButtonStatus} onClick={this.addRecord} className="btn btn-success">ADD</button>
          </div>
          <div className="col-md-6">
            <button onClick={()=>this.setState({branch: "EC"})} className="btn btn-primary">EC ({this.state.studentList.filter((student)=>student.branch=="EC").length})</button>
            <button onClick={()=>this.setState({branch:"CS"})} className="btn btn-success ml-2">CS ({this.state.studentList.filter((student)=>student.branch=="CS").length})</button>
            <button onClick={()=>this.setState({branch:"IT"})} className="btn btn-warning ml-2">IT ({this.state.studentList.filter((student)=>student.branch=="IT").length})</button>
            <button onClick={()=>this.setState({branch:null})} className="btn btn-info ml-2">Total ({this.state.studentList.length})</button>
          </div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Roll</th>
              <th>Name</th>
              <th>Branch</th>
              <th>Mobile</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {this.state.studentList.filter((student)=>this.state.branch == null || student.branch==this.state.branch).map((student, index) => <tr>
              <td>{student.roll}</td>
              <td>{student.name}</td>
              <td>{student.branch}</td>
              <td>{student.mobile}</td>
              <td><button onClick={()=>this.deleteRecord(student.roll)} className="btn btn-outline-danger">Delete</button></td>
            </tr>)}
          </tbody>
        </table>
      </div>
    </div>
  }
}

export default App;