import React, { Component } from 'react';
import Articles from '../articles/Articles';

class Topic extends Component {
	render() {
		return (
			<div>
				<h2>{this.props.topicslug}</h2>
			</div>
		);
	}
}

export default Topic;
