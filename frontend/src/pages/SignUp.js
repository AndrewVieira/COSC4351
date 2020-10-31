import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class SignUp extends React.Component {
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
			<div className="signup">
				<div class="container center_div w-50 padding-50">
					<h1>Sign Up Page</h1>
					<Form>
						<Form.Group controlId="formUsername">
							<Form.Label>First name</Form.Label>
							<Form.Control type="username" placeholder="First name"/>
						</Form.Group>
						<Form.Group controlId="formUsername">
							<Form.Label>Last name</Form.Label>
							<Form.Control type="username" placeholder="Last name"/>
						</Form.Group>
						<Form.Group controlId="formUsername">
							<Form.Label>Username</Form.Label>
							<Form.Control type="username" placeholder="Enter username"/>
						</Form.Group>
						<Form.Group controlId="formUsername">
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" placeholder="Enter password"/>
						</Form.Group>
						<Button variant="primary" type="submit">Register</Button>
					</Form>
				</div>
			</div>
		)
	}
}