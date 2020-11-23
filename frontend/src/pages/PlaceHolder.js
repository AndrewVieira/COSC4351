import React from 'react';
import {connect} from 'react-redux';
import Button from 'react-bootstrap/Button';
import * as actions from '../store/actions/Auth';

class PlaceHolder extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount = async () => {
		//Make sure we are logged in
		//If not logged in, return to the home page
		await this.props.isLoggedIn();

		if (!this.props.token) {
			this.props.history.push('/');
		}
	}

	onBack = (event) => {
		this.props.history.push('/portal');
	}

	render() {
		return (
			<div className="placeholder center">
				<div className="container center_div w-50 focus text-center">
					<h1>{this.props.title}</h1>
					<Button className="w-50" alignItems="center" type="submit" variant="primary" onClick={this.onBack}>Return to Portal</Button>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		token: state.token,
	};
};

const mapDispatchToProps = dispatch => {
    return {
        isLoggedIn: () => dispatch(actions.authCheckState()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaceHolder);