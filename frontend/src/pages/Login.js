import React from 'react';
import {Link} from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',

			errorShow: false,
			errorTitle: 'Generic Error',
			errorBody: 'This is a generic error!'
		}
	}

	onChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		this.setState({[name]: value},);
	}

	onSubmit = (event) => {
		event.preventDefault();

		if (this.state.username==='')
		{
			this.setState({
				errorShow: true,
				errorTitle: "Username Error",
				errorBody: "Please your username!",
			});
		}
		else if (this.state.password==='')
		{
			this.setState({
				errorShow: true,
				errorTitle: "Password Error",
				errorBody: "Please enter your password!",
			});
		}
		else if (false) //Place holder for error from bacakend
		{

		}
	}

	handleErrorClose = () => {
		this.setState({
			errorShow: false,
		});
	}

	handleErrorShow = () => {
			this.setState({
			errorShow: true,
		});
	}

	render() {
		return (
			<div className="login center">
				<div className="container center_div w-50 align-items-center focus">
					<h1>Login Page</h1>
					<Form>
						<Form.Group controlId="formUsername">
							<Form.Label>Username</Form.Label>
							<Form.Control name="username" type="username" placeholder="Enter username" value={this.state.username} onChange={this.onChange}/>
						</Form.Group>
						<Form.Group controlId="formUsername">
							<Form.Label>Password</Form.Label>
							<Form.Control name="password" type="password" placeholder="Enter password" value={this.state.password} onChange={this.onChange}/>
						</Form.Group>
						<Button variant="primary" type="submit" onClick={this.onSubmit}>Login</Button>
						<p className="d-inline-block">&ensp;or <strong><Link to="/signup">Sign Up</Link></strong></p>
					</Form>
				</div>

				<Modal show={this.state.errorShow} onHide={this.handleErrorClose} backdrop="static" keyboard={false} centered>
					<Modal.Header closeButton>
						<Modal.Title>{this.state.errorTitle}</Modal.Title>
					</Modal.Header>

					<Modal.Body>
						<p>{this.state.errorBody}</p>
					</Modal.Body>

				  <Modal.Footer>
				    <Button variant="secondary" onClick={this.handleErrorClose}>Close</Button>
				  </Modal.Footer>
				</Modal>
			</div>
		)
	}
}