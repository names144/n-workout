import React from 'react';
import { View, Button, Text, StyleSheet, SafeAreaView } from 'react-native';

import { colors } from '../../styles/colors';
import { DrawerIcon } from '../../components/header/DrawerIcon';
import { Card } from '../../components/common/Card';
import { DateTime } from 'luxon';

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
			elapsed: '00:00:00',
			startTime: null,
			endTime: null,
			diff: null
		};

		this._startTimer = this._startTimer.bind(this);
		this._stopTimer = this._stopTimer.bind(this);
		this._resetTimer = this._resetTimer.bind(this);
	}

	_startTimer() {
		let startTime;
		let endTime;
		let diff;
		if (this.state.timerInterval) {
			return;
		}

		startTime = this.state.startTime;
		endTime = this.state.endTime;
		if (!this.state.startTime) {
			const now = DateTime.local();
			this.setState({
				startTime: now
			});
			startTime = now;
		}
		const i = setInterval(() => {
			let now = DateTime.local();
			let duration;
			if (!endTime) {
				duration = now.diff(startTime);
			} else {
				if (!diff) {
					diff = now.diff(endTime).as('milliseconds');
				}
				now = now.minus(diff);
				duration = now.diff(startTime);
			}
			let tenthSecond = Math.floor(duration.as('milliseconds')) % 100;
			let seconds = Math.floor(duration.as('seconds')) % 60;
			let minutes = Math.floor(duration.as('minutes')) % 60;

			const sec = ('' + seconds).padStart(2, '0');
			const min = ('' + minutes).padStart(2, '0');
			const tmin = ('' + tenthSecond).padStart(2, '0');
			const elapsed = `${min}:${sec}:${tmin}`;
			this.setState({
				elapsed: elapsed,
				diff: diff
			});
		}, 100);
		this.setState({
			timerInterval: i
		});
	}

	_stopTimer() {
		if (!this.state.timerInterval) {
			return;
		}
		clearInterval(this.state.timerInterval);
		let now = DateTime.local();
		let duration;
		if (!this.state.endTime) {
			duration = now.diff(this.state.startTime);
		} else {
			now = now.minus(this.state.diff);
			duration = now.diff(this.state.startTime);
		}
		let tenthSecond = Math.floor(duration.as('milliseconds')) % 100;
		let seconds = Math.floor(duration.as('seconds')) % 60;
		let minutes = Math.floor(duration.as('minutes')) % 60;

		const sec = ('' + seconds).padStart(2, '0');
		const min = ('' + minutes).padStart(2, '0');
		const tmin = ('' + tenthSecond).padStart(2, '0');
		const elapsed = `${min}:${sec}:${tmin}`;
		this.setState({
			timerInterval: null,
			elapsed: elapsed,
			endTime: now
		});
	}

	_resetTimer() {
		clearInterval(this.state.timerInterval);
		this.setState({
			timerInterval: null,
			elapsed: '00:00:00',
			startTime: null,
			endTime: null,
			diff: null
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
