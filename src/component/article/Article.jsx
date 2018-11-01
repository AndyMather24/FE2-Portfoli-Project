import React, { Component } from 'react';
import * as api from '../api';
import Comments from '../comments/Comments';
import Vote from '../vote/Vote';
class Article extends Component {
	state = {
		choosenArticle: {}
	};
	render() {
		console.log(this.state.votes);
		return (
			<div>
				<section>
					<img />
					<h1>{this.state.choosenArticle.title}</h1>
					<p>{this.state.choosenArticle.body}</p>
					<p> {this.state.votes >= 0 && <Vote votes={this.state.votes} article_id={this.props.article_id} />}</p>
				</section>
				<section>
					<Comments article_id={this.props.article_id} />
				</section>
			</div>
		);
	}
	componentDidMount = () => {
		console.log('Mounting art');
		api.fetchArticleDataById(this.props.article_id).then((article) => {
			this.setState({
				choosenArticle: article,
				votes: article.votes
			});
		});
	};
}

export default Article;
