// @flow
import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	card: {
		backgroundColor: '#fff',
		marginLeft: 10,
		marginRight: 10,
		marginTop: 10,
		padding: 10,
		shadowColor: '#000',
		shadowOffset: {
			width: 1,
			height: 1
		},
		shadowOpacity: 0.24,
		shadowRadius: 1
	}
});

export const Card = (props) => {
	return (
		<View 
			elevation={4}
			style={styles.card}>
			{ props.children }
		</View>
	);
};
