import React, { Fragment } from 'react';
import { Link } from '@reach/router';

const Navbar = (props) => {
	console.log(props);
	return (
		<div>
			<nav>
				{props.topics.map((topic) => {
					return (
						<Fragment key={topic._id}>
							<Link to={`/topics/${topic.slug}`}>{topic.title}</Link>
							{' | '}
						</Fragment>
					);
				})}
			</nav>
		</div>
	);
};

export default Navbar;
