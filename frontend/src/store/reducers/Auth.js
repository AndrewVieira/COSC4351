import * as ActionTypes from '../actions/ActionTypes';
import { UpdateObject } from '../Utility';

const initialState = {
	token: null,
	error: null,
	loading: false
}

const authStart = (state, action) => {
	return updateObject(state, {
		error: null,
		loading: true
	});
}

const authSuccess = (state, action) => {
	return updateObject(state, {
		token: action.token,
		error: null,
		loading: false
	});
}

const authFail = async (state, action) => {
	return await updateObject(state, {
		error: action.error,
		loading: false
	});
}

const authLogout = (state, action) => {
	return updateObject(state, {
		token: null
	});
}

const reducer = (state=initialState, action) => {
	switch (action.type) {
		case ActionTypes.AUTH_START: return authStart(state, action);
		case ActionTypes.AUTH_SUCCESS: return authSuccess(state, action);
		case ActionTypes.AUTH_FAIL: return authFail(state, action);
		case ActionTypes.AUTH_LOGOUT: return authLogout(state, action);
		default:
			return state;
	}
}

export default reducer;