import { createStackNavigator } from 'react-navigation';
import { defaultStackConfig } from './config';
import { WorkoutScreen } from '../screens/workout/WorkoutScreen';


export const WorkoutStack = createStackNavigator(
	{
		Workout: {
			screen: WorkoutScreen,
		}
	},
	{...defaultStackConfig, initialRouteName: 'Workout'}
);
