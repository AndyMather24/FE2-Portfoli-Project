import React, { Component } from 'react';
import * as api from '../api';
class Article extends Component {
	state = {
		choosenArticle: {}
	};
	render() {
		// console.log(this.state.choosenArticle.created_by);

		return (
			<div>
				<section>
					<img />
					<h1>{this.state.choosenArticle.title}</h1>
					<p>{this.state.choosenArticle.body}</p>
				</section>
				<section>
					{/* <img src={this.state.choosenArticle.created_by.avatar_url}> </img>
					<h3>{this.state.choosenArticle.length && this.state.choosenArticle.created_by.username}</h3> */}
				</section>
			</div>
		);
	}
	componentDidMount = () => {
		console.log('Mounting art');
		api.fetchArticleDataById(this.props.article_id).then((article) => {
			this.setState({
				choosenArticle: article
			});
		});
	};
}

export default Article;
