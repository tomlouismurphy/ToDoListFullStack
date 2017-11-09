import React, { Component } from 'react';
import './ToDo.css';
import {Tasks} from '../TasksToDo/TasksToDo.js';
import {Details} from '../TaskDetails/TaskDetails.js';
import {Create} from '../CreateTask/CreateTask.js';

export class ToDo extends Component {
	constructor(props){
		super(props);
		this.state = {
			tasks: this.props.tasks,
			selectedTask: ''
		}
	}
	taskMoreDetail = (e) => {
		const state = this.state;
		for (let i = 0; i < this.state.tasks.length; i++){
			if (e.target.innerText === this.state.tasks[i].task){
				state.selectedTask = this.state.tasks[i];
			}
		}
		this.setState(state);
	}
	render() {
		return(
			<div>
				<Tasks tasks={this.state.tasks}/>
				<Details selectedTask={this.state.selectedTask}/>
				<Create/>
			</div>
		)
	}
}