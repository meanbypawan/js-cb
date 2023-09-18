import { Component } from "react";

export default class AddNewTask extends Component{
    constructor(props){
        super(props);
    }
    addTask = ()=>{
        let title = this.title.value;
        let pid = this.priority.value;
        let date = new Date();
        date = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
        let status = "Active";
        let newTask = {title,pid,date,status};
        this.props.updateTaskList([...this.props.taskList,newTask])
    }
    render(){
        let {taskList, prioryList, defaultTaskStatus,changeDefaultTaskStatus,addTask,updateTaskList} = this.props;
        
        return <div className="container-fluid mt-5">
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
                {prioryList.map((priorityObj, index) => <option value={priorityObj.priorityId}>{priorityObj.priorityValue}</option>)}
              </select>
            </div>
          </div>
        </div>
        <div className="row mt-2 mb-5">
          <div className="col-12">
            <button onClick={this.addTask} className="btn btn-success">ADD</button>
            <button onClick={()=>changeDefaultTaskStatus('Active')} disabled={defaultTaskStatus=="Active"?true:false} className="btn btn-danger ml-4">Active ({taskList.filter((task)=>task.status=="Active").length})</button>

            <button onClick={()=>changeDefaultTaskStatus('Deactive')} disabled={defaultTaskStatus=="Deactive"?true:false} className="btn btn-warning ml-4">Deactive ({taskList.filter((task)=>task.status=="Deactive").length})</button>
          </div>
        </div>
      </div>
      
    }
}