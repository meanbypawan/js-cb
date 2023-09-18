import { Component } from 'react';
import './App.css';
import taskData from './Data.js';
import TaskList from './components/TaskList';
import AddNewTask from './components/AddNewTask';
import Header from './components/Header';
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
  updateTaskList = (taskList)=>{
     this.setState({taskList: taskList})
  }
  changeTaskStatus = (task,taskStatus)=>{
     let index = this.state.taskList.findIndex((taskObject)=>taskObject.title == task.title);
     
     let taskElement = this.state.taskList[index];

     this.state.taskList.splice(index,1);

     taskElement.status = taskStatus;

     this.state.taskList.splice(index,0,taskElement);

     this.setState({taskList:[...this.state.taskList]});



  }
  changeDefaultTaskStatus = (status)=>{
    this.setState({defaultTaskStatus: status});
  }
  render() {
    return <div>
      <Header/>
      
      <AddNewTask taskList={this.state.taskList} prioryList={this.state.prioryList} defaultTaskStatus={this.state.defaultTaskStatus} changeDefaultTaskStatus={this.changeDefaultTaskStatus} addTask={this.addTask} updateTaskList={this.updateTaskList}/>

      <TaskList taskList={this.state.taskList} priorityList={this.state.prioryList} defaultTaskStatus={this.state.defaultTaskStatus} changeTaskStatus={this.changeTaskStatus}/>
    </div>
  }
}

export default App;