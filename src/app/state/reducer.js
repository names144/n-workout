// https://github.com/erikras/ducks-modular-redux
import { combineReducers } from 'redux';
import counterReducer from './counter';
import workoutReducer from './workout';

// Reducer
const reducer = combineReducers({
	counter: counterReducer,
	workout: workoutReducer
});
export default reducer;
