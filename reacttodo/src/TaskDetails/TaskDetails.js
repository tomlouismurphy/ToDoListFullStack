import React, { Component } from 'react';
import './TaskDetails.css';

export class Details extends Component {
	constructor(props){
		super(props);
		this.state = {
			tasks: [],
			selectedTask: this.props.selectedTask,
			selectionMade: false
		}
	}
	componentWillReceiveProps(nextprops) {
		const obj = nextprops.tasks;
		const state = this.state;
		if (this.state.tasks.length === 0){
			for (let i = 0; i < obj.length; i++){
				state.tasks.push(obj[i].task);
			}
		}
		state.selectedTask = nextprops.selectedTask;
		state.selectionMade = true;
		this.setState(state);
		console.log(this.state.tasks);
	}
	render() {
		return (
			<div>
				{(typeof(this.state.selectedTask) === 'object') ? 
					<div>
						<div>
							<h3>{this.state.selectedTask.task}</h3>
								<br/>
								<p>More details: {this.state.selectedTask.taskdescription}</p>
								<br/>
								<p>This task is assigned to {this.state.selectedTask.manager}. It will take {this.state.selectedTask.hourslefttocomplete} hours to finish and must be finished by {this.state.selectedTask.deadline}.</p>
						</div>
						<div>
							<button>Edit Task</button>
							<button>Delete Task</button>
						</div>
					</div>
				:
					<p>No task selected.</p>
				}
			</div>
		)
	}
}