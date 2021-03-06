import { App } from './src/app/Main';
export default App;

/**
 * @flow
 *

import React from 'react';
import { Platform, ScrollView, StatusBar, Text, Button } from 'react-native';
import {
  createStackNavigator,
  createDrawerNavigator,
  SafeAreaView,
} from 'react-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const MyNavScreen = ({ navigation, banner }) => (
  <ScrollView>
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text>{banner}</Text>
      <Button onPress={() => navigation.openDrawer()} title="Open drawer" />
      <Button
        onPress={() => navigation.navigate('Email')}
        title="Open other screen"
      />
      <Button onPress={() => navigation.goBack(null)} title="Go back" />
    </SafeAreaView>
    <StatusBar barStyle="default" />
  </ScrollView>
);

const InboxScreen = ({ navigation }) => (
  <MyNavScreen banner={'Inbox Screen'} navigation={navigation} />
);
InboxScreen.navigationOptions = {
  headerTitle: 'Inbox',
};

const EmailScreen = ({ navigation }) => (
  <MyNavScreen banner={'Email Screen'} navigation={navigation} />
);

const DraftsScreen = ({ navigation }) => (
  <MyNavScreen banner={'Drafts Screen'} navigation={navigation} />
);
DraftsScreen.navigationOptions = {
  headerTitle: 'Drafts',
};

const InboxStack = createStackNavigator({
  Inbox: { screen: InboxScreen },
  Email: { screen: EmailScreen },
});

InboxStack.navigationOptions = {
  drawerLabel: 'Inbox',
  drawerIcon: ({ tintColor }) => (
    <MaterialIcons
      name="move-to-inbox"
      size={24}
      style={{ color: tintColor }}
    />
  ),
};

const DraftsStack = createStackNavigator({
  Drafts: { screen: DraftsScreen },
  Email: { screen: EmailScreen },
});

DraftsStack.navigationOptions = {
  drawerLabel: 'Drafts',
  drawerIcon: ({ tintColor }) => (
    <MaterialIcons name="drafts" size={24} style={{ color: tintColor }} />
  ),
};

const DrawerExample = createDrawerNavigator(
  {
    Inbox: {
      path: '/',
      screen: InboxStack,
    },
    Drafts: {
      path: '/sent',
      screen: DraftsStack,
    },
  },
  {
    initialRouteName: 'Drafts',
    contentOptions: {
      activeTintColor: '#e91e63',
	},
	headerMode: 'float'
  }
);

// const RootNavigator = createStackNavigator(
// 	{
// 		Inbox: {
// 			screen: InboxStack
// 		},
// 		Drafts: {
// 			screen: DraftsStack
// 		},
// 		Drawer: {
// 			screen: DrawerExample
// 		}
// 	},
// 	{
// 		headerMode: 'none',
// 		initialRouteName: 'Inbox'
// 	}
// );

export default DrawerExample;
*/