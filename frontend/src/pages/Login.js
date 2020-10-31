import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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
				<div class="container center_div w-50 align-items-center">
					<h1>Login Page</h1>
					<Form>
						<Form.Group controlId="formUsername">
							<Form.Label>Username</Form.Label>
							<Form.Control type="username" placeholder="Enter username"/>
						</Form.Group>
						<Form.Group controlId="formUsername">
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" placeholder="Enter password"/>
						</Form.Group>
						<Button variant="primary" type="submit">Login</Button>
					</Form>
				</div>
			</div>
		)
	}
}