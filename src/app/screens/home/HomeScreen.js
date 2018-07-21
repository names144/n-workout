import React from 'react';
import { View, Button, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import { VictoryPie, VictoryChart } from "victory-native";

import { colors } from '../../styles/colors';
import { DrawerIcon } from '../../components/header/DrawerIcon';
import { Card } from '../../components/common/Card';

const styles = StyleSheet.create({
  container: {
    flex: 1,
	backgroundColor: colors.textPrimary,
  },
  text: {
	color: colors.primaryText,
  }
});

const data = [
	{ quarter: 1, earnings: 13000 },
	{ quarter: 2, earnings: 16500 },
	{ quarter: 3, earnings: 14250 },
	{ quarter: 4, earnings: 19000 }
  ];

export class HomeScreen extends React.Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: 'Home',
			headerLeft: (
				<DrawerIcon navigation={navigation} />
			)
		};
	};

	render() {
		let cards = [];
		for (let i = 0; i < 20; i++) {
			cards.push(i);
		}

		return (
			<SafeAreaView style={styles.container}>
				<ScrollView>
					<Card>
						<View>
							<Button title="Random Pokemon" onPress={() => {this.props.navigation.navigate('Screen2')}}/>
						</View>
					</Card>

					<Card>
						<View style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
							borderBottomWidth: 1,
							padding: 5,
							borderBottomColor: 'rgba(0,0,0,0.24)'}}>
							<Text style={{fontSize: 20, fontWeight: '500'}}>Last Workout</Text>
							<Text style={{fontSize: 20, fontWeight: '500'}}>Yesterday</Text>
						</View>
						<View style={{marginTop: 20, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', }}>
							<View style={{flex: 0.5}}>
								<Text style={{marginBottom: 10, fontSize: 18, fontWeight: '400'}}>Workout Name</Text>
								<Text>* Barbell Bench Press</Text>
								<Text>* Barbell Incline Bench Press</Text>
								<Text>* Standing Overhead Press</Text>
							</View>
							<View style={{flex: 0.5, width: 150, height: 150, justifyContent: 'center', alignItems: 'flex-end'}}>
								<VictoryPie
									data={[
										{ x: "Cats", y: 35 },
										{ x: "Dogs", y: 40 },
										{ x: "Birds", y: 55 }
									]}
									padding={0}
									width={150}
									height={150}
									labels={[]}/>
							</View>
						</View>
						
					</Card>
					
					{
						cards.map((i) => {
							return (
								<Card key={i}>
									<Text>TESTING {i}</Text>
								</Card>
							);
						})
					}
				</ScrollView>
				<ActionButton buttonColor="rgba(231,76,60,1)">
					<ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
						<Icon name="md-create" style={styles.actionButtonIcon} />
					</ActionButton.Item>
					<ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => {}}>
						<Icon name="md-notifications-off" style={styles.actionButtonIcon} />
					</ActionButton.Item>
					<ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => {}}>
						<Icon name="md-done-all" style={styles.actionButtonIcon} />
					</ActionButton.Item>
				</ActionButton>
			</SafeAreaView>
		);
	}
}
