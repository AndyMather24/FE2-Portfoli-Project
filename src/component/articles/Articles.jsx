import React, { Component } from 'react';
import { Link } from '@reach/router';
import './articles.css';
class Articles extends Component {
	render() {
		//	console.log(this.props);
		return (
			<div className="articles-outer-container">
				{this.props.articlesData.length &&
					this.props.articlesData.map((article) => {
						return (
							<div key={article._id} className="articleContainer">
								<h4>
									<Link className="title" to={`/articles/${article._id}`}>
										{article.title}
									</Link>
								</h4>
								<p className="paragraph">{`Comments: ${article.comment_count}`}</p>
							</div>
						);
					})}
			</div>
		);
	}
}

export default Articles;
