import React from 'react';
import { View, Button, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';

import { colors } from '../../styles/colors';
import { DrawerIcon } from '../../components/header/DrawerIcon';

const styles = StyleSheet.create({
  container: {
    flex: 1,
	backgroundColor: colors.textPrimary
  },
  text: {
	color: colors.primaryText,
  }
});

export class NewWorkoutScreen extends React.Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: 'New Workout',
			headerLeft: (
				<DrawerIcon navigation={navigation} />
			)
		};
	};

	render() {
		return (
			<SafeAreaView style={styles.container}>
				<ScrollView>
					<Text>New Workout</Text>
				</ScrollView>
			</SafeAreaView>
		);
	}
}
