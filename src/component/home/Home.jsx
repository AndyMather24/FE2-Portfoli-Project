import React, { Component } from 'react';
import Nav from '../nav/Nav.jsx';
class Home extends Component {
	render() {
		return (
			<div className='Homepage'>
				<header>
					<h1>NC NEWS</h1>
				</header>
				<nav>
				<Nav />
				</nav>
				

				<div className="chart"> Topics chart</div>
				<article class="main"> Articles</article>

				<footer> footer </footer>
			</div>
		);
	}
}

export default Home;
