import React, { Component } from 'react';
import * as api from '../api';
class Comments extends Component {
	state = {
		comments: []
	};
	render() {
		console.log(this.props);
		return (
			<div>
				<h3>Comments...</h3>
				{this.state.comments.map((comment) => {
					return (
						<div>
							<p>{comment.body}</p>;
						</div>
					);
				})}
			</div>
		);
	}

	componentDidMount = () => {
		api.fetchCommentsById('5bd6f57bd5c8e378dda1c932').then(({ comments }) => {
			this.setState({
				comments: comments
			});
		});
	};
}

export default Comments;
