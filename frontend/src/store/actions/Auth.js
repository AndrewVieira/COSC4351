import axios from 'axios';
import * as ActionTypes from './ActionTypes';

export const authStart = () => {
	return {
		type: ActionTypes.AUTH_START
	}
}

export const authSuccess = token => {
	return {
		type: ActionTypes.AUTH_SUCCESS,
		token: token,
	}
}

export const authFail = error => {
	return {
		type: ActionTypes.AUTH_FAIL,
		error: error
	}
}

export const logout = () => {
	localStorage.removeItem('user');
	localStorage.removeItem('expirationDate');
	return {
		type: ActionTypes.AUTH_LOGOUT
	}
}

export const checkAuthTimeout = expirationTime => {
	return dispatch => {
		setTimeout(() => {
			dispatch(logout());
		}, expirationTime * 1000)
	}
}

export const authLogin = (username, password) => {
	return dispatch => {
		dispatch(authStart());
		axios.post('http://localhost:8000/rest-auth/login/', {
			username: username,
			password: password
		})
		.then(res => {
			const token = res.data.key;
			const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
			localStorage.setItem('token', token);
			localStorage.setItem('expirationDate', expirationDate);
			dispatch(authSuccess(token));
			dispatch(checkAuthTimeout(3600));
		})
		.catch(err => {
			dispatch(authFail(err));
			//console.log(err.response);
			//window.alert("Invalid Credinitals");
		})
	}
}

export const authRegistration = (username, password1, password2) => {
	return dispatch => {
		dispatch(authStart());
		axios.post('http://localhost:8000/rest-auth/registration/', {
			username: username,
			password1: password1,
			password2: password2
		})
		.then(res => {
			const token = res.data.key;
			const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
			localStorage.setItem('token', token);
			localStorage.setItem('expirationDate', expirationDate);
			dispatch(authSuccess(token));
			dispatch(checkAuthTimeout(3600));
		})
		.catch(err => {
			dispatch(authFail(err));
			window.alert('Error creating account: most likely your username is already in use, or your password is not complex enough.')
		})
	}
}

export const authCheckState = () => {
	return dispatch => {
		const token = localStorage.getItem('token');
		if (token === undefined){
			dispatch(logout());
		}
		else {
			const expirationDate = new Date(localStorage.getItem('expirationDate'));
			if (expirationDate <= new Date()) {
				dispatch(logout());
			}
			else {
				dispatch(authSuccess(token));
				dispatch(checkAuthTimeout( (expirationDate.getTime() - new Date().getTime()) / 1000) );
			}
		}
	}
}
