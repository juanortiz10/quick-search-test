import * as types from '../../consts/actionTypes';

export default function(state = [], action) {
	switch (action.type) {
		case types.GET_QUICK_SEARCH:
			return [...state];
		case types.GET_QUICK_SEARCH_SUCCESS:
			if (action.data) {
				let results = action.data.results;
				if (results.length >= 20) {
					results = results.slice(0, 20);
				}
				return [...action, results];
			}
			return [...state, action];
		default:
			return state;
	}
}
