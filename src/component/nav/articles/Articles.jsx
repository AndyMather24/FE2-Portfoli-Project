import React, { Component } from 'react';
import { Link } from '@reach/router';
class Articles extends Component {
	render() {
		console.log(this.props.articlesData);
		return (
			<div>
				{this.props.articlesData.length &&
					this.props.articlesData.map((article) => {
						return (
							<div key={article._id} className="articleContainer">
								<h4>
									<Link to=''>{article.title}</Link>
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
