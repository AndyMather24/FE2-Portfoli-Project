import React, { Component } from 'react';
import * as api from '../api';
class Login extends Component {
	state = {
		currentUsername: ''
	};
	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					Username: <input onChange={this.handleChange} type="text" name="username" value={this.state.currentUsername} />
					<button> Login </button>
				</form>
			</div>
		);
	}
	handleSubmit = (e) => {
		e.preventDefault();
		api.fetchUser(this.state.currentUsername).then(({ user }) => {
			!user
				? (user =
						{} &&
						this.setState({
							currentUsername: ''
						}))
				: this.props.setUser(user);
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
