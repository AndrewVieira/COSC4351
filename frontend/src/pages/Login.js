import React from 'react';

export default class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			error: '',
		}
	}

	onChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		this.setState({[name]: value},);
	}

	onSubmit = (event) => {
		event.preventDefault();

		this.setState({
			error: '',
		});
	}

	render() {
		return (
			<div className="login">
				<h1>Login Page</h1>
				<form>
					<label>Username:</label><br/>
					<input type="text"/><br/>
					<label>Password:</label><br/>
					<input type="password"/><br/><br/>
					<input type="submit" value="Submit"/>
				</form>
			</div>
		)
	}
}