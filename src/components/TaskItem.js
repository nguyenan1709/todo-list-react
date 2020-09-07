import React, { Component } from 'react';

class TaskItem extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    onUpdateStatus = () => {
        this.props.onUpdateStatus(this.props.propTask.id)
    }

    onDelete = () => {
        this.props.onDelete(this.props.propTask.id)
    }

    render() { 
        var { propTask } = this.props
        return (  
            <tr>
                <td>{ this.props.index }</td>
                <td>{ propTask.name }</td>

                <td  onClick={ this.onUpdateStatus }>
                    <span 
                        className={propTask.status === true ? 'text-success': 'text-danger'} 
                    >
                        {propTask.status === true ? 'Kích hoạt' : 'Ẩn'}
                    </span>
                </td>

                <td>
                    <button className="btn btn-warning btn-sm">Sửa</button> &nbsp;
                    <button 
                        className="btn btn-danger btn-sm"
                        onClick={ this.onDelete }
                    >Xóa</button>
                </td>
            </tr>
        );
    }
}
 
export default TaskItem;