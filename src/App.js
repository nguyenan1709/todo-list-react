import React, { Component } from 'react';
import TaskForm from './components/TaskForm'
import Control from './components/Control'
import TaskList from './components/TaskList'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      task: [],
      show: false
    }
  }

  componentDidMount  = () => {
    if(localStorage && localStorage.getItem('localTask')){
      this.setState({
        task: JSON.parse(localStorage.getItem('localTask'))
      });
    }
  }

  onGenerateData = () => {
    var task = [
      {
        id: 1,
        name: "Hoc lap trinh",
        status: true
      },
      {
        id: 2,
        name: "Di boi",
        status: false
      },
      {
        id: 3,
        name: "Ngu",
        status: true
      }
    ];

    // Lưu biến task vào localStorage và chuyển về dạng String để lưu trữ data rồi sau đó mới gán vào state
    localStorage.setItem('localTask', JSON.stringify(task))
  }

  showForm = () => {
    this.setState({
      show: true
    });
  }

  onClose = () => {
    this.setState({
      show: false
    });
  }

  render() { 
    return ( 
      <div className="container">
        <div className="text-center">
          <h1 className="m-4">Quản lý công việc</h1>
        </div>

        <div className="row">
          <div className={this.state.show === true ? 'col-4' : 'd-none'}>
            <TaskForm close={ this.onClose }/>
          </div>

          <div className={this.state.show === true ? 'col-8' : 'col-12'}>
            <button 
              className="btn btn-primary mb-3"
              onClick={ this.showForm }
            >
              <i className="fas fa-plus"></i> Thêm công việc
            </button>

            <button className="btn btn-light mb-3 ml-2" onClick={ this.onGenerateData }>Generate data</button>

            <Control/>
            <TaskList propTask={ this.state.task }/>
          </div>
        </div>
      </div>
    );
  }
}
 
export default App;