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
		console.log(e.target.innerText);
		console.log(this.state.tasks);
		const state = this.state;
		for (let i = 0; i < this.state.tasks.length; i++){
			if (e.target.innerText === this.state.tasks[i].task){
				state.selectedTask = this.state.tasks[i];
				console.log(state.selectedTask);
			} else {
				console.log('fail');
			}
		}
		this.setState(state);
	}
	componentWillReceiveProps(nextprops) {
		const state = this.state;
		state.tasks = nextprops.tasks;
		this.setState(state);
	}
	render() {
		return(
			<div>
				<Tasks tasks={this.state.tasks} taskMoreDetail={this.taskMoreDetail}/>
				<Details tasks={this.state.tasks} selectedTask={this.state.selectedTask}/>
				<Create/>
			</div>
		)
	}
}