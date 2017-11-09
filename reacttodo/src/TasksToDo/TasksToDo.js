import React, { Component } from 'react';
import './TasksToDo.css';

export class Tasks extends Component {
	constructor(props){
		super(props);
		this.state = {
			tasks: this.props.tasks,
			selectedTask: ''
		}
	}
	render() {
		const list = this.props.tasks.map((item, i) => {
			return <div key={i}>{item.task}</div>
		})
		return(
			<div>
				<p>All the tasks to complete.</p>
			</div>
		)
	}
}