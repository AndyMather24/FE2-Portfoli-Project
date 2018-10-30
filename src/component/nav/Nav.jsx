import React from 'react';
import { Link } from '@reach/router';
const Nav = () => {
	return (
		<div>
			<nav>
				<Link className="links" to="/">
					{' '}
					Home{' '}
				</Link>{' '}
			</nav>
		</div>
	);
};

export default Nav;
