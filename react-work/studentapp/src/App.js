import { Component } from "react";
import './App.css';
import studentData from './Data';
class App extends Component {
  constructor() {
    super();
    this.state = {
      studentList: studentData,
      brancList:["CS","IT","EC"]
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
              <input type="text" ref={(rollObject)=>this.roll=rollObject} className="form-control" />
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
          <div className="col">
            <button onClick={this.addRecord} className="btn btn-success">ADD</button>
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
            {this.state.studentList.map((student, index) => <tr>
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