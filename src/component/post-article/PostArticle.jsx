import React, { Component } from 'react';
import './postarticle.css';
import * as api from '../api';
class PostArticle extends Component {
	state = {
		article: {
			created_by: ''
		}
	};
	render() {
		console.log(this.props);
		return (
			<div>
				<div class="Post-Art">
					<h1>Create Article</h1>
					<form onSubmit={this.handleSubmit}>
						<input type="text" name="title" placeholder="Article title" onChange={this.handleChange} />
						<select defaultValue="" name="topic" onChange={this.handleSelect}>
							<option value="" selected disabled hidden>
								Select a topic
							</option>
							{this.props.topics.map((topic) => {
								return (
									<option key={topic._id} value={topic.slug}>
										{topic.slug}
									</option>
								);
							})}
						</select>
						<textarea name="body" placeholder="Enter Article here" onChange={this.handleChange} />
						<button>Post</button>
					</form>
				</div>
			</div>
		);
	}

	componentDidMount = () => {
		this.setState({
			article: {
				...this.state.article,
				created_by: this.props.user._id
			}
		});
	};
	handleSelect = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		this.setState({
			article: { ...this.state.article, [name]: value }
		});
	};
	handleChange = (e) => {
		const value = e.target.value;
		const name = e.target.name;
		this.setState({
			article: { ...this.state.article, [name]: value }
		});
	};
	handleSubmit = (e) => {
		e.preventDefault();
		api.postArticle(this.state.article, this.state.article.topic).then((res) => {
			return console.log(res);
		});
	};
}

export default PostArticle;
