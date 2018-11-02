import React, { Fragment } from 'react';
import { Link } from '@reach/router';
import CreateArticle from '../create-article/CreateArticle';
const Navbar = (props) => {
	return (
		<div>
			<nav className="nav-bar">
				{props.topics.map((topic) => {
					return (
						<Fragment key={topic._id}>
							<Link to={`/topics/${topic.slug}`}>{topic.title}</Link>
						</Fragment>
					);
				})}
				{props.user.username && <CreateArticle />}
			</nav>
		</div>
	);
};

export default Navbar;
