import React, { Component } from 'react';
import * as api from './component/api';
import './App.css';
import './component/home/home.css';
import Home from './component/home/Home';
import Navbar from './component/nav/Navbar.jsx';
import { Link, Router } from '@reach/router';

class App extends Component {
	state = {
		topics: []
	};
	render() {
		return (
			<div>
				<header>
					<h1>
						{' '}
						<Link className="links" to="/">
							{' '}
							NC NEWS{' '}
						</Link>{' '}
					</h1>
					<Navbar topics={this.state.topics} />
				</header>

				<Router>
					<Home path="/" />
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
			this.setState({
				topics: topics
			});
		});
	};
}

export default App;
