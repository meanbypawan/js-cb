import { Component } from 'react';
import './App.css';
import taskData from './Data.js';
class App extends Component {
  constructor() {
    super();
    this.state = {
      taskList: taskData,
      prioryList: [
        { priorityId: 1, priorityValue: "Low" },
        { priorityId: 2, priorityValue: "Medium" },
        { priorityId: 3, priorityValue: "High" }
      ],
      defaultTaskStatus: "Active"
    };
  }
  addTask = ()=>{
      let title = this.title.value;
      let pid = this.priority.value;
      let date = new Date();
      date = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
      let status = "Active";
      let newTask = {title,pid,date,status};
      this.setState({taskList: [...this.state.taskList,newTask]})
  }
  render() {
    return <div>
      <section>To Do App</section>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>Task Title</label>
              <input ref={(titleObj)=>this.title=titleObj} type="text" className="form-control" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Task Priority</label>
              <select ref={(taskPriorityObj)=>this.priority=taskPriorityObj} className="form-control">
                {this.state.prioryList.map((priorityObj, index) => <option value={priorityObj.priorityId}>{priorityObj.priorityValue}</option>)}
              </select>
            </div>
          </div>
        </div>
        <div className="row mt-2 mb-5">
          <div className="col-12">
            <button onClick={this.addTask} className="btn btn-success">ADD</button>
            <button className="btn btn-danger ml-4">Active ({this.state.taskList.filter((task)=>task.status=="Active").length})</button>
            <button className="btn btn-warning ml-4">Deactive ({this.state.taskList.filter((task)=>task.status=="Deactive").length})</button>
          </div>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>S.no</th>
            <th>Title</th>
            <th>Date</th>
            <th>Priority</th>
            <th>Change status</th>
          </tr>
        </thead>
        <tbody>

          {this.state.taskList.sort((a, b) => { return a.pid - b.pid }).map((task, index) => <tr style={{ backgroundColor: task.pid == 1 ? "mediumseagreen" : task.pid == 2 ? "orange" : "#db8282" }}>
            <td>{index + 1}</td>
            <td>{task.title}</td>
            <td>{task.date}</td>
            <td>{this.state.prioryList.find((priorityObj) => priorityObj.priorityId == task.pid).priorityValue}</td>
            <td>
              {this.state.defaultTaskStatus=="Active"?<button className="btn btn-outline-primary">Deactive</button> : <button className="btn btn-outline-primary">Active</button>}
            </td>
          </tr>)}
        </tbody>
      </table>
    </div>
  }
}

export default App;