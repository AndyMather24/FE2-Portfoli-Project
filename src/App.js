import React, { Component } from 'react';

import './App.css';
import './component/home/home.css';
import Home from './component/home/Home';
import { Router } from '@reach/router';

class App extends Component {
	render() {
		return (
			<div>
				<Router>
					<Home path="/" />
				</Router>
			</div>
		);
	}
}

export default App;
