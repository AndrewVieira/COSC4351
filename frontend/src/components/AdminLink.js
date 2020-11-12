import React from 'react';

import Card from 'react-bootstrap/Card';

export default class AdminLink extends React.Component {
	render(){
		return (
			
				<Card style={{margin : '1rem'}} bg='light' text='black'>
					<div class="shadow">
						<a href={this.props.link}>
							<Card.Body>
								<Card.Title>{this.props.name}</Card.Title>
								<Card.Text>{this.props.link}</Card.Text>
							</Card.Body>
						</a>
					</div>
				</Card>
			
		)
	}
}