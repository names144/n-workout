import { createStackNavigator } from 'react-navigation';
import { defaultStackConfig } from './config';
import WorkoutScreen from '../screens/workout/WorkoutScreen';
import { NewWorkoutScreen } from '../screens/workout/NewWorkoutScreen';

export const WorkoutStack = createStackNavigator(
	{
		Workout: {
			screen: WorkoutScreen,
		},
		NewWorkout: {
			screen: NewWorkoutScreen
		}
	},
	{...defaultStackConfig, initialRouteName: 'Workout'}
);
