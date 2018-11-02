import React, { Component } from 'react';
import * as api from '../api';
class PostComment extends Component {
	state = {
		comment: {}
	};
	render() {
		console.log(this.props.article._id);
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<textarea name="body" onChange={this.handleChange} placeholder="Type comment..." />
					<button>Post</button>
				</form>
			</div>
		);
	}
	componentDidMount = () => {
		this.setState({
			comment: { ...this.state.comment, created_by: this.props.user._id }
		});
	};
	handleSubmit = (e) => {
		e.preventDefault();
		api.postComment(this.props.article._id, this.state.comment).then((res) => {
			return console.log(res);
		});
	};
	handleChange = (e) => {
		const name = e.target.name;
		this.setState({
			comment: {
				...this.state.comment,
				[name]: e.target.value
			}
		});
	};
}

export default PostComment;
