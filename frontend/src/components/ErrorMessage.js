import React from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default class ErrorMessage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: 'Generic Error',
			body: 'This is a generic error!',
			show: true,
		}
	}

	handleClose = () => {
		this.setState({
			show: false,
		});
	}

	handleShow = () => {
			this.setState({
			show: true,
		});
	}

	render() {
		return (
			<Modal show={this.state.show} onHide={this.handleClose} backdrop="static" keyboard={false} centered>
				<Modal.Header closeButton>
					<Modal.Title>{this.state.title}</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<p>{this.state.body}</p>
				</Modal.Body>

			  <Modal.Footer>
			    <Button variant="secondary" onClick={this.handleClose}>Close</Button>
			  </Modal.Footer>
			</Modal>
		);
	}
}