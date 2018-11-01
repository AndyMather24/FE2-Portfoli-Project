import React, { Component } from 'react';
import * as api from '../api';
class Comments extends Component {
	state = {
		comments: []
	};
	render() {
		//console.log(this.state.comments);
		return (
			<div>
				<h3>Comments...</h3>
				{this.state.comments.map((comment) => {
					return (
						<div key={comment._id}>
							<p>{comment.body}</p>;
							<p>{comment.created_by.username}</p>
							<img src={comment.created_by.avatar_url} />
						</div>
					);
				})}
			</div>
		);
	}

	componentDidMount = () => {
		api.fetchCommentsById(this.props.article_id).then(({ comments }) => {
			this.setState({
				comments: comments
			});
		});
	};
}

export default Comments;
