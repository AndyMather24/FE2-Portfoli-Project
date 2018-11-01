import React, { Component } from 'react';
import * as api from '../api';
class Login extends Component {
	state = {
		loggedInUser: {},
		currentUsername: '',
		loggedIn: false
	};
	render() {
		return (
			<div>
				{!this.state.loggedIn && (
					<form onSubmit={this.handleSubmit}>
						Username: <input onChange={this.handleChange} type="text" name="username" value={this.state.currentUsername} />
						<button> Login </button>
					</form>
				)}
				{this.state.loggedIn && (
					<div>
						<p>Logged in: {this.state.loggedInUser.user.username}</p>
						<img src={this.state.loggedInUser.user.avatar_url} width="20px" height="20px" />
					</div>
				)}
			</div>
		);
	}
	handleSubmit = (e) => {
		e.preventDefault();
		//console.log(username.value);
		api.fetchUser(this.state.currentUsername).then((data) => {
			data.user === null
				? this.setState({
						loggedIn: false,
						currentUsername: ''
					})
				: this.setState({
						loggedInUser: data,
						loggedIn: true
					});
		});
	};

	handleChange = (e) => {
		const value = e.target.value;
		this.setState({
			currentUsername: value
		});
	};
}

export default Login;
