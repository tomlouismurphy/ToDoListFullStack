import React, { Component } from 'react';
import './ToDo.css';
import {Tasks} from '../TasksToDo/TasksToDo.js';
import {Details} from '../TaskDetails/TaskDetails.js';
import {Create} from '../CreateTask/CreateTask.js';

export class ToDo extends Component {
	constructor(props){
		super(props);
		this.state = {
			tasks: [],
			selectedTask: ''
		}
	}
	taskMoreDetail = (e) => {
		const state = this.state;
		for (let i = 0; i < this.state.tasks.length; i++){
			if (e.target.innerText === this.state.tasks[i].task){
				state.selectedTask = this.state.tasks[i];
				console.log(state.selectedTask);
				this.setState(state);
			} else {
				console.log('fail');
			}
		}
	}
	componentWillReceiveProps(nextprops) {
		const obj = JSON.parse(nextprops.tasks);
		const state = this.state;
		for (let i = 0; i < obj.length; i++){
			state.tasks.push(obj[i]);
		}
		this.setState(state);
		console.log(this.state.tasks);
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