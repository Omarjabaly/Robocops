import {
	CHANGE_SEARCH_FIELD, 
	GET_ROBOTS_PENDING,
	GET_ROBOTS_SUCCESS,
	GET_ROBOTS_FAILED 
} from './constants.js';

export const setSearchField = (text) => {

	return {
		type: CHANGE_SEARCH_FIELD,
		payload: text
	}

}

export const getRobots = () => (dispatch) => {

		dispatch({type: GET_ROBOTS_PENDING})
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => {
			return dispatch({type: GET_ROBOTS_SUCCESS, payload: users})
		})
		.catch(error => {
			return dispatch({type: GET_ROBOTS_FAILED, payload: error})
		})
	
}