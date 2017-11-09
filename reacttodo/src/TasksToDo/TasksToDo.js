import React, { Component } from 'react';
import './TasksToDo.css';

export class Tasks extends Component {
	constructor(props){
		super(props);
		this.state = {
			tasks: [],
			selectedTask: ''
		}
	}
	componentWillReceiveProps(nextprops) {
		const obj = JSON.parse(nextprops.tasks);
		const state = this.state;
		for (let i = 0; i < obj.length; i++){
			state.tasks.push(obj[i].task);
		}
		this.setState(state);
		console.log(this.state.tasks);
	}
	render() {
		if (this.state.tasks.length > 0){
			console.log(this.state.tasks);
			console.log(this.props.taskMoreDetail);
			const list = this.state.tasks.map((item, i) => {
				return <div key={i} onClick={this.props.taskMoreDetail}>{item}</div>
			})
			return(
				<div>
					{list}
				</div>
			)
		} else {
			return(
				<p>eh</p>
			)
		}
	}
}