// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
	card: {
		backgroundColor: '#fff',
		marginLeft: 10,
		marginRight: 10,
		marginTop: 10,
		padding: 10,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 0
		},
		shadowOpacity: 0.24,
		shadowRadius: 3
	},
	body: {
		
	}
});

export const Card = (props) => {
	let render;
	if (props.onPress) {
		render = (
			<TouchableHighlight
				underlayColor={'rgba(255,255,255,0.95)'}
				onPress={props.onPress}
				elevation={4}
				style={styles.card}>

				{ props.children }
			</TouchableHighlight>
			
		);
	} else {
		render = (
			<View 
				elevation={4}
				style={styles.card}>
				{ props.children }
			</View>
		);
	}

	return render;
};

Card.propTypes = {
	onPress: PropTypes.func
};
