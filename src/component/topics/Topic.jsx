import React, { Component } from 'react';
import Articles from '../articles/Articles';
import * as api from '../api';

class Topic extends Component {
	state = {
		articles: []
	};
	render() {
		console.log(this.state.articles);
		return (
			<div>
				<h2>{this.props.topicslug}</h2>
				<Articles articlesData={this.state.articles} topicslug={this.props.topicslug} />
			</div>
		);
	}

	componentDidUpdate = (prevProps) => {
		if (this.props.topicslug !== prevProps.topicslug) {
			this.setArtcles(this.props.topicslug);
		}
	};
	componentDidMount = () => {
		console.log('mount');
		this.setArtcles(this.props.topicslug);
	};

	setArtcles = (topicslug) => {
		api.fetchArticlesByTopic(topicslug).then((articles) => {
			this.setState({
				articles: articles
			});
		});
	};
}

export default Topic;
