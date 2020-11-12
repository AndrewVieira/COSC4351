import React from 'react';
import AdminLink from '../components/AdminLink';

export default class Portal extends React.Component {
	render() {
		return (
			<div className="login">
				<div class="container center_div w-50">
						<h1>Portal Page</h1>
						<div class="adminlinks">
							<AdminLink name= 'Example Link 1' link="https://www.google.com/"/>
							<AdminLink name= 'Example Link 2' link="https://www.uh.edu/"/>
							<AdminLink name= 'Example Link 3' link="https://stackoverflow.com/"/>
						</div>
				</div>
			</div>
		)
	}
}
