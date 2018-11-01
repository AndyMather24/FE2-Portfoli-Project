import React, { Component } from 'react';
import * as api from '../api';
class Vote extends Component {
	state = {
		votes: 0,
		totalVotes: 0
	};
	render() {
		return (
			<div>
				<p>{this.state.totalVotes}</p>
				<button onClick={this.handleVote} name="down" value="-1">
					{' '}
					Vote Up{' '}
				</button>
				<button onClick={this.handleVote} name="up" value="1">
					{' '}
					Vote Down{' '}
				</button>
			</div>
		);
	}
	componentDidMount = () => {
		this.setState({
			totalVotes: this.props.votes
		});
	};

	handleVote = (e) => {
		let vote = +e.target.value;
		this.setState({
			totalVotes: this.state.totalVotes - vote
		});
		e.api.vote();
	};
}

export default Vote;
