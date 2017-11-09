import React, { Component } from 'react';
import './CreateTask.css';

export class Create extends Component {
	constructor(){
		super();
		this.state = {
			task: '',
			taskdescription: '',
			manager: '',
			deadline: '',
			hourslefttocomplete: ''
		}
	}
	handleInput = (e) => {
		const prop = e.currentTarget.name;
		const state = this.state;
		state[prop] = e.currentTarget.value;
		this.setState(state);
		console.log(this.state);
	}
	addTask = (e) => {
		e.preventDefault();
	    const xhr = new XMLHttpRequest();
	    const params = JSON.stringify({
	    				task: this.state.task,
	    				taskdescription: this.state.taskdescription,
	    				manager: this.state.manager,
	    				deadline: this.state.deadline,
	    				hourslefttocomplete: this.state.hourslefttocomplete
	    				});
	    console.log(this.state);
	    console.log(params);
	    xhr.open('POST', 'http://localhost:9292/tasks', true);
	    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	    xhr.onreadystatechange = () => {
	      if (xhr.readyState === 4 && xhr.status === 200) {
	        console.log('great!');
	      } else {
	        console.log('error');
	      }
	    }
	    xhr.send(params);
	}
	render() {
		return(
			<div>
				<h2>Add to the List</h2>
				<form onSubmit={this.addTask}>
					Task: <input type='text' name='task' value={this.state.task} onChange={this.handleInput}/><br/>
					Description: <textarea type='text' name='taskdescription' value={this.state.taskdescription} onChange={this.handleInput}/><br/>
					Assigned To: <input type='text' name='manager' value={this.state.manager} onChange={this.handleInput}/><br/>
					Complete By: <input type='text' name='deadline' placeholder='YYYY-MM-DD HH:MM:SS' value={this.state.deadline} onChange={this.handleInput}/><br/>
					Estimated Hours to Complete: <input type='text' name='hourslefttocomplete' value={this.state.hourslefttocomplete} onChange={this.handleInput}/><br/>
					<button>Create New Task</button>
				</form>
			</div>
		)
	}
}