import React, { Component } from 'react';
import Navbar from '../nav/Navbar.jsx';
import { Link, Router } from '@reach/router';
import * as api from '../api.js';
import Articles from '../articles/Articles.jsx';

class Home extends Component {
	state = {
		articles: []
	};
	render() {
		return (
			<div className="Homepage">
				<nav />
				<div className="chart"> Topics chart</div>
				<article className="main">
					<Articles articlesData={this.state.articles} />
				</article>

				<footer> footer </footer>
			</div>
		);
	}
	componentDidMount = () => {
		console.log('Mounting');
		api.fetchArticles().then((articles) => {
			this.setState({
				articles: articles
			});
		});
	};
}

export default Home;
