import React, { Component } from 'react';
import * as api from '../api.js';
import Articles from '../articles/Articles.jsx';
import Topicchart from '../topicchart/Topicchart.jsx';

class Home extends Component {
	state = {
		articles: []
	};
	render() {
		return (
			<div className="Homepage">
				<nav />
				<div className="chart">{/* <Topicchart topicsTitles={this.props.topicsTitles} /> */}</div>
				<article className="main">
					<Articles articlesData={this.state.articles} />
				</article>

				{/* <footer> </footer> */}
			</div>
		);
	}

	componentDidMount = () => {
		console.log('Mounting home');
		api.fetchArticles().then((articles) => {
			this.setState({
				articles: articles
			});
		});
	};
}

export default Home;
