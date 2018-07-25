// https://github.com/erikras/ducks-modular-redux

const INCREMENT_COUNTER = 'nWorkout/counter/increment';
const DECREMENT_COUNTER = 'nWorkout/counter/decrement';

const DEFAULT_STATE = {
	counter: {
		count: 0
	}
};

// Reducer
export default function reducer(state = DEFAULT_STATE, action = {}) {
	switch (action.type) {
		case INCREMENT_COUNTER:
			return {
				...state,
				counter: {
					...state.counter,
					count: state.counter.count + 1
				}
			};
		case DECREMENT_COUNTER:
			return {
				...state,
				counter: {
					...state.counter,
					count: state.counter.count - 1
				}
			};
		default: return state;
	}
}

export const counterActions = {
	increment: () => { return { type: INCREMENT_COUNTER } },
	decrement: () => { return { type: DECREMENT_COUNTER } },
};
