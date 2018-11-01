import React, { Component } from 'react';
import * as api from './component/api';
import './App.css';
import './component/nav/nav.css';
import './component/home/home.css';
import { Link, Router } from '@reach/router';
import Home from './component/home/Home';
import Navbar from './component/nav/Navbar.jsx';
import Topic from './component/topics/Topic.jsx';
import Article from './component/article/Article.jsx';
import Login from './component/login/Login';
class App extends Component {
	state = {
		topics: [],
		topicsTitles: []
	};
	render() {
		return (
			<div>
				<header>
					<h1>
						{' '}
						<Link className="links" to="/">
							{' '}
							Site Name
						</Link>{' '}
					</h1>
					<Navbar className="nav-bar" topics={this.state.topics} />
					<Login />
				</header>

				<Router>
					<Home path="/" topicsTitles={this.state.topicsTitles} />
					<Topic path="/topics/:topicslug" topicsData={this.state.topics} />
					<Article path="/articles/:article_id" />
				</Router>
			</div>
		);
	}

	componentDidMount = () => {
		console.log('mounting app');
		this.setTopics();
	};

	// sets state with topics array
	setTopics = () => {
		api.fetchTopics().then(({ topics }) => {
			const titles = topics.map((topic) => {
				return topic.title;
			});
			this.setState({
				topics: topics,
				topicsTitles: titles
			});
		});
	};
}

export default App;
