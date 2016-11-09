// actions/index.js
// import axios from 'axios';

export const THIS_TEST = 'THIS_TEST';

export function handleTest(newBool) {
	// leaving this below for reference for AJAX reqeusts
	// const request = axios.get('someurl');	
	// place request in payload to have promise resolved by redux-promise
	
	return {
		type: THIS_TEST,	
		payload: newBool
	};
}
