import React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { createDrawerNavigator, createStackNavigator, DrawerItems } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { HomeStack } from './HomeStack';
import { WorkoutStack } from './WorkoutStack';
import { TimerScreen } from '../screens/timer/TimerScreen';
import { DrawerItem } from '../components/drawer/DrawerItem';
import { DrawerIcon } from '../components/header/DrawerIcon';


/* Test Screens */
class ListItem1 extends React.Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: 'List Item 1',
			headerLeft: (
				<DrawerIcon navigation={navigation} />
			)
		};
	};
	render() {
		return (
			<View>
				<Text>List Item 1</Text>
			</View>
		);
	}
}

class ListItem2 extends React.Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: 'List Item 2',
			headerLeft: (
				<DrawerIcon navigation={navigation} />
			)
		};
	};
	render() {
		return (
			<View>
				<Text>List Item 2</Text>
			</View>
		);
	}
}

export class CustomDrawer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const drawerScreens = [
			{ name: 'Home', screen: 'Home', icon: 'home'},
			{ name: 'Workout', screen: 'Workout', icon: 'dumbbell'},
			{ name: 'Log', screen: 'Log', icon: 'book'},
			{ name: 'Library', screen: 'Library', icon: 'format-list-bulleted'},
			{ name: 'Statistics', screen: 'Statistics', icon: 'chart-bar'},
			{ name: 'Goals', screen: 'Goals', icon: 'trophy'},
			{ name: 'Timer', screen: 'Timer', icon: 'timer'},
			{ name: 'Settings', screen: 'Settings', icon: 'settings'},
		];
		return (
			<SafeAreaView style={{paddingTop: 20, flex: 1}}>
				<ScrollView>
					<View
						style={{
							flexDirection: 'row',
							flex: 1,
							backgroundColor: '#fff',
							borderBottomColor: '#333',
							borderBottomWidth: 1,
							paddingTop: 10,
							paddingBottom: 10,
							marginBottom: 10
						}}>
						<View style={{paddingLeft: 18, alignSelf: 'center', flex: 0.3}}>
							<Icon name="md-contact" size={75} />
						</View>
						
						<View style={{marginLeft: 18, alignSelf: 'center', flex: 0.7}}>
							<Text style={{marginBottom: 5}}>John Doe</Text>
							<Text style={{marginBottom: 5}}>6' 2", 196 LB</Text>
							<Text>January 1, 2018</Text>
						</View>
					</View>
					{
						drawerScreens.map((item, idx) => {
							return (
								<DrawerItem 
									{...this.props}
									key={idx}
									screen={item.screen}
									title={item.name}
									icon={item.icon} />
							);
						})
					}
				</ScrollView>
				<View
					style={{
						backgroundColor: '#fff',
						borderTopWidth: 1,
						borderTopColor: '#333',
						paddingTop: 10,
						paddingBottom: 10
					}}>
					<Text style={{margin: 18}}>Made with ❤️ by Nicholas Ames</Text>
				</View>
			</SafeAreaView>
		);
	}
}

export const DrawerStack = createDrawerNavigator(
	{
		Home: {
			screen: HomeStack
		},
		Workout: {
			screen: WorkoutStack
		},
		ListItem2: {
			screen: ListItem2
		},
		Timer: {
			screen: TimerScreen
		}
	},
	{
		contentComponent: CustomDrawer
	}
);
