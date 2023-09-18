import { Component } from "react";

export default class TaskList extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let {taskList,priorityList,defaultTaskStatus,changeTaskStatus} = this.props;
        return <table className="table">
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

          {taskList.sort((a, b) => { return a.pid - b.pid }).filter((task)=>task.status==defaultTaskStatus).map((task, index) => <tr style={{ backgroundColor: task.pid == 1 ? "mediumseagreen" : task.pid == 2 ? "orange" : "#db8282" }}>
            <td>{index + 1}</td>
            <td>{task.title}</td>
            <td>{task.date}</td>
            <td>{priorityList.find((priorityObj) => priorityObj.priorityId == task.pid).priorityValue}</td>
            <td>
              {defaultTaskStatus=="Active"?<button className="btn btn-outline-primary" onClick={()=>changeTaskStatus(task,"Deactive")}>Deactive</button> : <button className="btn btn-outline-primary" onClick={()=>changeTaskStatus(task,"Active")}>Active</button>}
            </td>
          </tr>)}
        </tbody>
      </table>
    }
}