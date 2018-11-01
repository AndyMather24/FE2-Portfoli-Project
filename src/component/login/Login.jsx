import React, { Component } from 'react';
import * as api from '../api';
class Login extends Component {
	state = {
		loggedInUser: {}
	};
	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					Username: <input onChange={this.handleChange} type="text" name="username" />
					<button> Login </button>
				</form>
			</div>
		);
	}
	handleSubmit = (e) => {
		e.preventDefault();
		//console.log(username.value);
		api.fetchUser(this.state.currentUsername).then((data) => {
			//console.log(data);
			data.user === null
				? console.log('Your not a user')
				: this.setState({
						loggedInUser: data
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
