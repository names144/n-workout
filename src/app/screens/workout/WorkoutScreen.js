import React from 'react';
import { View, Button, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';

import { colors } from '../../styles/colors';
import { DrawerIcon } from '../../components/header/DrawerIcon';
import { Card } from '../../components/common/Card';

const styles = StyleSheet.create({
  container: {
    flex: 1,
	backgroundColor: colors.textPrimary
  },
  text: {
	color: colors.primaryText,
  }
});

export class WorkoutScreen extends React.Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: 'Workout',
			headerLeft: (
				<DrawerIcon navigation={navigation} />
			)
		};
	};

	render() {
		let cards = [];
		for (let i = 0; i < 5; i++) {
			cards.push(i);
		}

		return (
			<SafeAreaView style={styles.container}>
				<ScrollView>
					{
						cards.map((i) => {
							return (
								<Card key={i}>
									<Text>Workout {i}</Text>
								</Card>
							);
						})
					}
				</ScrollView>
			</SafeAreaView>
		);
	}
}
