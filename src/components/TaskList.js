import React, { Component } from 'react';
import TaskItem from "./TaskItem"
import "../scss/_task-list.scss"

class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        let { propTask } = this.props // var propTask = this.props.propTask
        let eleTaskItem = propTask.map((item, index) => {
            return <TaskItem 
                        key={index} 
                        index={index} 
                        propTask={item}
                        onUpdateStatus = { this.props.onUpdateStatus }
                        onDelete =  { this.props.onDelete }
                    />
        })

        return (  
            <div className="table-wrapper">
                <table className="table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên</th>
                            <th>Trạng thái</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td></td>
                            <td>
                                <input 
                                    type="text"
                                    className="form-control"
                                    name="filterName"
                                    placeholder="Tim kiem"
                                />
                            </td>

                            <td>
                                <select 
                                    className="form-control"
                                    name="filterStatus"
                                >
                                    <option value={-1}>Tất cả</option>
                                    <option value={0}>Ẩn</option>
                                    <option value={1}>Kích hoạt</option>
                                </select>
                            </td>
                            <td></td>
                        </tr>

                        {eleTaskItem}
                    </tbody>
                </table>
            </div>
        );
    }
}
 
export default TaskList;