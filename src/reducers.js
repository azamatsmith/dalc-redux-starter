import {combineReducers} from 'redux';
import Main from './reducers/reducer_main';
import Counter from './reducers/reducer_counter';

const rootReducer = combineReducers({
	main: Main,
	counter: Counter
});

export default rootReducer;



