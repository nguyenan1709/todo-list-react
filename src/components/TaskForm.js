import React, { Component } from 'react';

class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    close = () => {
       this.props.close();
    }

    render() { 
        return ( 
            <div className="border rounded">
                <div className="bg-warning d-flex align-items-center justify-content-between p-2">
                    <h4>Thêm công việc</h4>
                    
                    <i className="fas fa-window-close" onClick={ this.close }></i>
                </div>

                <div className="p-2">
                    <label>Tên:</label>
                    <input type="text" className="form-control mb-3" placeholder="Username"/> 

                    <label>Trạng thái:</label>
                    <select className="custom-select custom-select-md">
                        <option value="1">Kích hoạt</option>
                        <option value="2">Ẩn</option>
                    </select>
                </div>
            </div>
        );
    }
}
 
export default TaskForm;