import React from 'react';
import AdminLink from '../components/AdminLink';

import axios from 'axios';

import {connect} from 'react-redux';
import * as actions from '../store/actions/Auth';


class Portal extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			links: [["Example Link 1", "https://www.google.com/"], ["Example Link 2", "https://www.uh.edu/"], ["Example Link 3", "https://stackoverflow.com/"]],
		};
	}

	componentDidMount = async () => {
		//Make sure we are logged in
		//If not logged in, return to the home page
		/* await this.props.isLoggedIn();
		if (!this.props.token) {
				this.props.history.push('/');
			}
		*/

		//Retrieve the data we need from the backend
		/*axios.defaults.headers = {
				'Content-Type': 'application/json',
				Authorization: `Token ${this.props.token}`
			};

		axios
				.get(`http://localhost:8000/api/links`)
				.then(res => {
					const list = res.data[0];
					//console.log(list)
					this.setState({
					});
				});*/
	}

	/*onLogout = (event) => {
		this.props.logout();
		this.props.history.push('/');
	}*/

	render() {
		return (
			<div className="portal center">
				<div className="container center_div w-50 focus">
						<h1>Portal Page</h1>
						<div class="adminlinks">
							{this.state.links.map((value,index) => {
	                            return (
	                            	<AdminLink key={index} name= {value[0]} link={value[1]}/>
	                            );
	                        })}
						</div>
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
        logout: () => dispatch(actions.logout()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Portal);