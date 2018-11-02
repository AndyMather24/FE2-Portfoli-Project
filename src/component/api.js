import axios from 'axios';

const baseUrl = 'https://nc-news-andy.herokuapp.com/api/';

export const fetchArticles = () => {
	return axios.get(`${baseUrl}articles`).then(({ data }) => {
		return data;
	});
};

export const fetchTopics = () => {
	return axios.get(`${baseUrl}topics`).then(({ data }) => {
		return data;
	});
};

export const fetchArticlesByTopic = (topicslug) => {
	return axios.get(`${baseUrl}topics/${topicslug}/articles`).then(({ data }) => {
		return data;
	});
};

export const fetchArticleDataById = (id) => {
	return axios.get(`${baseUrl}articles/${id}`).then(({ data }) => {
		return data;
	});
};

export const fetchCommentsById = (id) => {
	return axios.get(`${baseUrl}articles/${id}/comments`).then(({ data }) => {
		return data;
	});
};

export const fetchUser = (username) => {
	return axios.get(`${baseUrl}/users/${username}`).then(({ data }) => {
		return data;
	});
};

export const vote = (direction, id) => {
	return axios.patch(`${baseUrl}/articles/${id}/?vote=${direction}`).then(({ data }) => {
		return data;
	});
};

export const postArticle = (body, topic) => {
	return axios.post(`${baseUrl}topics/${topic}/articles`, body).then((res) => {
		return res;
	});
};

export const postComment = (art, comment) => {
	console.log(typeof art);
	return axios.post(`${baseUrl}/articles/${art}/comments`, comment).then((res) => {
		return console.log(res);
	});
};
