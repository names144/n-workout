const INCREMENT_COUNTER = 'nWorkout/counter/increment';
const DECREMENT_COUNTER = 'nWorkout/counter/decrement';

const DEFAULT_STATE = {
	count: 0
};

export default function counterReducer(state = DEFAULT_STATE, action = {}) {
	switch (action.type) {
		case INCREMENT_COUNTER:
			return {
				...state,
				count: state.count + 1
			};
		case DECREMENT_COUNTER:
			return {
				...state,
				count: state.count - 1
			};
		default: return state;
	}
}

export const counterActions = {
	increment: () => { return { type: INCREMENT_COUNTER } },
	decrement: () => { return { type: DECREMENT_COUNTER } },
};
