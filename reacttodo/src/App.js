import React, { Component } from 'react';
import './App.css';
import {ToDo} from './ToDo/ToDo.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: []
    }
  }
  componentDidMount() {
    const taskData = new XMLHttpRequest();
    taskData.open('GET', 'http://localhost:9292/tasks');
    taskData.send(null);
    taskData.onreadystatechange = () => {
      if (taskData.status === 200 && taskData.readyState === 4) {
          console.log(taskData.responseText);
          const state = this.state;
          state.tasks = taskData.responseText;
          this.setState(state);
          console.log(this.state);
      } else {
        console.log('Error: ' + taskData.status);
      }
    }
  }
  render() {
    return (
      <div>
        <h3>To-Do List</h3>
        <ToDo tasks={this.state.tasks}/>
      </div>
    );
  }
}

export default App;
