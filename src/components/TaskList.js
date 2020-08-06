import React, { Component } from 'react';
import TaskItem from "./TaskItem"
import "../scss/_task-list.scss"

class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        var { propTask } = this.props // var propTask = this.props.propTask
        var eleTaskItem = propTask.map((item, index) => {
            return <TaskItem key={item.id} index={index} propTask={item}/>
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