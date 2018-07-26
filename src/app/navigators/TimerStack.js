import { createStackNavigator } from 'react-navigation';
import { defaultStackConfig } from './config';
import HomeScreen from '../screens/home/HomeScreen';
import { TimerScreen } from '../screens/timer/TimerScreen';


export const TimerStack = createStackNavigator(
	{
		Timer: {
			screen: TimerScreen,
		}
	},
	{...defaultStackConfig, initialRouteName: 'Timer'}
);
