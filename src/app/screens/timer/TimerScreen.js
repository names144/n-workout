import React from 'react';
import { View, Button, Text, StyleSheet, SafeAreaView } from 'react-native';

import { colors } from '../../styles/colors';
import { DrawerIcon } from '../../components/header/DrawerIcon';
import { Card } from '../../components/common/Card';

const styles = StyleSheet.create({
  container: {
	flex: 1,
	justifyContent: 'center',
	alignItems: 'center',
	backgroundColor: colors.backgroundColor
  },
  text: {
	color: colors.primaryText,
  }
});

export class TimerScreen extends React.Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: 'Timer',
			headerLeft: (
				<DrawerIcon navigation={navigation} />
			)
		};
	};

	constructor(props) {
		super(props);
		this.state = {
			timerInterval: null,
			elapsed: '00:00',
			startTime: null,
			seconds: 0,
			minutes: 0
		};

		this._startTimer = this._startTimer.bind(this);
		this._stopTimer = this._stopTimer.bind(this);
		this._resetTimer = this._resetTimer.bind(this);
	}

	_startTimer() {
		if (this.state.timerInterval) {
			clearInterval(this.state.timerInterval);
		}

		if (!this.state.startTime) {
			this.setState({startTime: new Date().getTime()});
		}

		const i = setInterval(() => {
			// const diff = new Date().getTime() - this.state.startTime;
			// const milli = ('' + diff % 1000).padStart(3, '0');
			// const sec = ('' + Math.floor(diff / 1000) % 60).padStart(2, '0');
			// const min = ('' + Math.floor(diff / (1000 * 60)) % 60).padStart(2, '0');
			let seconds = this.state.seconds;
			let minutes = this.state.minutes;
			seconds++;
			if (seconds >= 60) {
				seconds = 0;
				minutes++;
			}

			const sec = ('' + seconds).padStart(2, '0');
			const min = ('' + minutes).padStart(2, '0');
			const elapsed = `${min}:${sec}`;
			this.setState({
				elapsed: elapsed,
				seconds: seconds,
				minutes: minutes
			});
		}, 1000);
		this.setState({
			timerInterval: i
		});
	}

	_stopTimer() {
		clearInterval(this.state.timerInterval);
	}

	_resetTimer() {
		clearInterval(this.state.timerInterval);
		this.setState({
			timerInterval: null,
			elapsed: '00:00',
			startTime: null,
			seconds: 0,
			minutes: 0
		});
	}

	componentWillUnmount() {
		if (this.state.timerInterval) {
			clearInterval(this.state.timerInterval);
		}
	}

	render() {
		let cards = [];
		for (let i = 0; i < 5; i++) {
			cards.push(i);
		}

		return (
			<SafeAreaView style={styles.container}>
				<Text>Timer</Text>
				<Text>{this.state.elapsed}</Text>
				<Button title="Start" onPress={this._startTimer} />
				<Button title="Stop" onPress={this._stopTimer} />
				<Button title="Reset" onPress={this._resetTimer} />
			</SafeAreaView>
		);
	}
}
