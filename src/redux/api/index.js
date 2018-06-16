const axios = require('axios');

export const getSearchRequest = word => {
	const URL = `http://www.recipepuppy.com/api/?i=${word}`;
	return axios(URL, {
		method: 'GET',
		mode: 'no-cors',
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Content-Type': 'application/json'
		}
	}).then(response => {
		return response.data;
	});
};
