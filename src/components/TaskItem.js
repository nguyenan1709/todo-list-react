import React, { Component } from 'react';

class TaskItem extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        var { propTask } = this.props
        return (  
            <tr>
                <td>{ propTask.id }</td>
                <td>{ propTask.name }</td>

                <td>
                    <span className={propTask.status === true ? 'text-success': 'text-danger'}>
                        {propTask.status === true ? 'Kích hoạt' : 'Ẩn'}
                    </span>
                </td>

                <td>
                    <button className="btn btn-warning btn-sm">Sửa</button> &nbsp;
                    <button className="btn btn-danger btn-sm">Xóa</button>
                </td>
            </tr>
        );
    }
}
 
export default TaskItem;