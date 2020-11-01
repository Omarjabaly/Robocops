import {
	CHANGE_SEARCH_FIELD, 
	GET_ROBOTS_PENDING,
	GET_ROBOTS_SUCCESS,
	GET_ROBOTS_FAILED 
} from './constants.js';
import { combineReducers } from 'redux';


const initialStateSearch = {
	searchField: ''
}

export const searchRobots = (state=initialStateSearch, action={}) => {
	switch (action.type) {
		case CHANGE_SEARCH_FIELD:
			return Object.assign({}, state, { searchField: action.payload })
		default:
			return state;
	}
}


const initialStateRobots = {
	isPending: false,
	robots: [],
	error: ''
}
		
export const requestRobots = (state=initialStateRobots, action={}) => {
	switch (action.type) {
		case GET_ROBOTS_PENDING:
			return Object.assign({}, state, { isPending: true })
		case GET_ROBOTS_SUCCESS:
			return Object.assign({}, state, { isPending: false, robots: action.payload })
		case GET_ROBOTS_FAILED:
			return Object.assign({}, state, { isPending: false, error: action.payload })

		default:
			return state;
	}
}

export const rootReducer = combineReducers ({ searchRobots, requestRobots });
