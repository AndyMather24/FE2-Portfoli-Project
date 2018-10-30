import React, { Component } from 'react';
import * as api from './component/api';
import './App.css';
import './component/home/home.css';
import Home from './component/home/Home';
import { Router } from '@reach/router';

class App extends Component {
	state = {
		topics: []
	};
	render() {
		return (
			<div>
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
			console.log(topics);
			this.setState({
				topics: topics
			});
		});
	};
}

export default App;
