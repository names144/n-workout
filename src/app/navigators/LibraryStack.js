import React from 'react';
import { Text, View } from 'react-native';
import { createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';
import { defaultStackConfig } from './config'
import { DrawerIcon } from '../components/header/DrawerIcon';

class ListScreen extends React.Component {
	render() {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>List!</Text>
			</View>
		);
	}
}

class CategoriesScreen extends React.Component {
	render() {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>Categories!</Text>
			</View>
		);
	}
}

export const LibraryTabs = createMaterialTopTabNavigator({
  List: {
	  screen: ListScreen
  },
  Categories: {
	  screen: CategoriesScreen
  }
});

export const LibraryStack = createStackNavigator(
	{
		Home: {
			screen: LibraryTabs,
			navigationOptions: ({ navigation }) => {
				return {
					title: 'Library',
					headerLeft: (
						<DrawerIcon navigation={navigation} />
					)
				}
			}
		}
	},
	{...defaultStackConfig, initialRouteName: 'Home'}
);
