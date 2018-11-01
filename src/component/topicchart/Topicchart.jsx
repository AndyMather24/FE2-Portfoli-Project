import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = {
	labels: [],
	datasets: [
		{
			data: [ 300, 50, 100 ],
			backgroundColor: [ '#FF6384', '#36A2EB', '#FFCE56' ],
			hoverBackgroundColor: [ '#FF6384', '#36A2EB', '#FFCE56' ]
		}
	]
};

export default class Chart extends Component {
	render() {
		this.props.topicsTitles ? (data.labels = this.props.topicsTitles) : (data.labels = []);
		//console.log(this.props.topicsTitles);
		return (
			<div>
				<h2>Choose A Topic</h2>
				<Doughnut className="dough-chart" data={data} />
			</div>
		);
	}

	componentDidMount = () => {};
}
