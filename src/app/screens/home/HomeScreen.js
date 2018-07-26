import React from 'react';
import { View, Button, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import { VictoryPie, VictoryChart } from "victory-native";
import { bindActionCreators } from 'redux'; 
import { connect } from 'react-redux';
import { counterActions } from '../../state/reducer';

import { colors } from '../../styles/colors';
import { DrawerIcon } from '../../components/header/DrawerIcon';
import { Card } from '../../components/common/Card';

const styles = StyleSheet.create({
  container: {
    flex: 1,
	backgroundColor: colors.backgroundColor,
  },
  text: {
	color: colors.primaryText,
  }
});


class HomeScreen extends React.Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: 'Home',
			headerLeft: (
				<DrawerIcon navigation={navigation} />
			)
		};
	};

	constructor(props) {
		super(props);
		console.log(props.counter);
	}

	render() {
		return (
			<SafeAreaView style={styles.container}>
				<ScrollView>
					<Card>
						<View style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
							borderBottomWidth: 1,
							padding: 5,
							borderBottomColor: 'rgba(0,0,0,0.24)'}}>
							<Text style={{fontSize: 20, fontWeight: '500'}}>Last Session</Text>
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
					<Card>
						<Text>{this.props.counter.count}</Text>
						<Button title="Increment" onPress={this.props.actions.increment} />
						<Button title="Decrement" onPress={this.props.actions.decrement} />
					</Card>
				</ScrollView>
				<ActionButton buttonColor="rgba(231,76,60,1)" onPress={() => this.props.navigation.navigate('NewWorkout')} />
			</SafeAreaView>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		counter: state.counter
	};
};

const mapDispatchToProps = (dispatch) => {
	return { 
    	actions: bindActionCreators(counterActions, dispatch) 
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
