// reducers/reducer_counter.js
import {COUNT_ADD, COUNT_SUB} from '../actions/actions_counter'

const INITIAL_STATE = { count: 0 };

export default function (state = INITIAL_STATE, action) {
    console.log(action)
	switch(action.type) {
        case COUNT_ADD:
            return {...state, count: state.count+1};
        case COUNT_SUB:
            return {...state, count: state.count-1};
		default:
			return state;
	}
}
