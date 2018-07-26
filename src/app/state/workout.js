const ADD_WORKOUT = 'nWorkout/workout/add';
const UPDATE_WORKOUT = 'nWorkout/workout/update';
const DELETE_WORKOUT = 'nWorkout/workout/delete';


const DEFAULT_STATE = {
	workouts: [{
		id: 1,
		name: 'Awesome Workout'
	}]
};

export default function workoutReducer(state = DEFAULT_STATE, action = {}) {
	switch (action.type) {
		case ADD_WORKOUT:
			return {
				...state,
				workouts: [
					...state.workouts,
					action.workout
				]
			};
		case UPDATE_WORKOUT:
			return {
				...state,
				workouts: state.workouts.map((workout) => {
					if (workout.id === action.workout.id) {
						return Object.assign({}, workout, action.workout);
					}
					return workout;
				})
			};
		case DELETE_WORKOUT:
			return {
				...state,
				workouts: state.workouts.filter((workout) => workout.id === action.workout.id)
			};
		default: return state;
	}
}

export const workoutActions = {
	add: (workout) => { return { type: ADD_WORKOUT, action: { workout: workout } } },
	update: (workout) => { return { type: UPDATE_WORKOUT, action: { workout: workout } } },
	delete: (workout) => { return { type: DELETE_WORKOUT, action: { workout: workout } } },
};
