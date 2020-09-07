import React, { Component } from 'react';
import TaskForm from './components/TaskForm'
import Control from './components/Control'
import TaskList from './components/TaskList'
import produce from "immer"

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

  s4 = () => {
    return Math.floor((1 + Math.random()) *0x10000).toString(16).substring(1)
  }

  generateId = () => {
    return this.s4() + this.s4() + this.s4() + this.s4();
  }

  onGenerateData = () => {
    var task = [
      {
        id: this.generateId(),
        name: "Hoc lap trinh",
        status: true
      },
      {
        id: this.generateId(),
        name: "Di boi",
        status: false
      },
      {
        id: this.generateId(),
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

  onSubmit = (data) => {
    var addTask =  {
      id: this.generateId(),
      name: data.name,
      status: data.status === 'true' ? true : false
    }

    let { task } = this.state

    let nextState = produce(task, draftState => {
      draftState.push(addTask)
    })

    this.setState({task: nextState})

    console.log("nextState", nextState)

    localStorage.setItem('localTask', JSON.stringify(nextState))
  }

  onUpdateStatus = (_id) => {
    // console.log(_id);
    let { task } = this.state
    
    let nextState = produce(task, draftState => {
      draftState.map((i, index) => {
        if(i.id === _id) {
          draftState[index].status = !draftState[index].status
        }
        return draftState
      })
    })

    this.setState({task: nextState})
    localStorage.setItem('localTask', JSON.stringify(nextState));
  }

  onDelete = (_id) => {
    let { task } = this.state
    
    let nextState = task.filter(i => i.id !== _id)

    console.log("nextState", nextState)

    this.setState({task: nextState})
    localStorage.setItem('localTask', JSON.stringify(nextState));
    this.onClose();
  }

  render() { 
    return ( 
      <div className="container">
        <div className="text-center">
          <h1 className="m-4">Quản lý công việc</h1>
        </div>

        <div className="row">
          <div className={this.state.show === true ? 'col-4' : 'd-none'}>
            <TaskForm 
              close={ this.onClose }
              propsSubmit = { this.onSubmit }
            />
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
            <TaskList 
              propTask={ this.state.task }
              onUpdateStatus = { this.onUpdateStatus }
              onDelete = { this.onDelete }
            />
          </div>
        </div>
      </div>
    );
  }
}
 
export default App;