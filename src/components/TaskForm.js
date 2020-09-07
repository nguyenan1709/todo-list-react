import React, { Component } from 'react';

class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: '',
            status: false
        }
    }

    close = () => {
       this.props.close();
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;

        this.setState({
            [name]: value
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.props.propsSubmit(this.state);
        // Cancel & close form
        this.onClear();
        this.close()
    }

    onClear = () => {
        this.setState({
            name: '',
            status: false
        })
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
                    <input 
                        type="text" 
                        className="form-control mb-3" 
                        placeholder="Username"
                        name="name"
                        value={ this.state.name }
                        onChange={ this.onChange }
                    /> 

                    <label>Trạng thái:</label>
                    <select 
                        className="custom-select custom-select-md"
                        name="status"
                        value={ this.state.status }
                        onChange={ this.onChange }
                    >
                        <option value={ true }>Kích hoạt</option>
                        <option value={ false}>Ẩn</option>
                    </select>
                </div>

                <div className="text-center p-2">
                    <button 
                        className="btn btn-warning mr-2"
                        type="submit"
                        onClick={ this.onSubmit }
                    >Lưu lại</button>

                    <button 
                        className="btn btn-danger"
                        onClick={ this.onClear }
                    >Hủy bỏ</button>
                </div>
            </div>
        );
    }
}
 
export default TaskForm;