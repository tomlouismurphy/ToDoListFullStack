import React, { Component } from 'react';
import './TasksToDo.css';

export class Tasks extends Component {
	constructor(){
		super();
		this.state = {
			tasks: [],
			selectedTask: ''
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
		this.setState(state);
	}
	render() {
		if (this.state.tasks.length > 0){
			const list = this.state.tasks.map((item, i) => {
				return <li key={i} onClick={this.props.taskMoreDetail}>{item}</li>
			})
			return(
				<div>
					<ul>
						{list}
					</ul>
				</div>
			)
		} else {
			return(
				<p>eh</p>
			)
		}
	}
}