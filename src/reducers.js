import {combineReducers} from 'redux';
import Main from './reducers/reducer_main';

const rootReducer = combineReducers({
	main: Main
});

export default rootReducer;
