import React, { Component } from 'react';
import * as api from '../api';
class Vote extends Component {
	state = {
		totalVotes: 0
	};
	render() {
		return (
			<div>
				<p>{this.state.totalVotes}</p>
				<button onClick={this.handleVote} name="up" value="-1">
					{' '}
					Vote Up{' '}
				</button>
				<button onClick={this.handleVote} name="down" value="1">
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
		api.vote(e.target.name, this.props.article_id).then((data) => {
			return data;
		});
	};
}

export default Vote;
