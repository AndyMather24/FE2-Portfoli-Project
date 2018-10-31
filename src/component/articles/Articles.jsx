import React, { Component } from 'react';
import { Link } from '@reach/router';
import './articles.css';
class Articles extends Component {
	render() {
		return (
			<div>
				{/* maps over array of articles to display each article */}
				{this.props.articlesData.length &&
					this.props.articlesData.map((article) => {
						return (
							<div key={article._id} className="articleContainer">
								<h4>
									<Link to={`/articles/${article._id}`}>{article.title}</Link>
								</h4>
								<p>{`Comments: ${article.comment_count}`}</p>
							</div>
						);
					})}
			</div>
		);
	}
}

export default Articles;
