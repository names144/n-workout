import React from 'react';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

import { DrawerStack } from './navigators/DrawerStack';
import reducer from './state/reducer';

const store = createStore(reducer);

export const App = () => {
	return (
		<Provider store={store}>
			<DrawerStack />
		</Provider>
	);
};
