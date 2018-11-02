import React, { Component } from 'react';

class Logout extends Component {
	render() {
		console.log(this.props.loggedInUser);
		return (
			<div>
				<p>Logged in: {this.props.loggedInUser.username}</p>
				<img src={this.props.loggedInUser.avatar_url} width="20px" height="20px" />

				<button onClick={this.handleClick}> Log out </button>
			</div>
		);
	}
	handleClick = () => {
		this.props.logout();
	};
}

export default Logout;
