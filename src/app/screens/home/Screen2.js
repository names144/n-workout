import React from 'react';
import { View, Button, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';

import { colors } from '../../styles/colors';

const POKE_API = 'http://pokeapi.co/api/v2/pokemon/';

const styles = StyleSheet.create({
  container: {
    flex: 1,
	backgroundColor: colors.textPrimary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
	color: colors.primaryText,
  }
});

export class Screen2 extends React.Component {
	static navigationOptions = {
		title: 'Screen2',
	};

	constructor(props) {
		super(props);
		this.state = {
			fetchingData: false,
			pokemon: null
		};
	}

	componentDidMount() {
		this._getPokemon();
	}

	_getPokemon() {
		console.log('FETCHING')
		this.setState({fetchingData: true});
		fetch(POKE_API + Math.ceil(Math.random() * 721), {
			method: 'GET',
			headers: {
				Accept: 'application/json'
			},
		})
		.then((response) => response.json())
		.then((responseJson) => {
			console.log(responseJson);
			this.setState({pokemon:  responseJson});
		})
		.catch((error) => {
			console.log(error)
		})
		.finally(() => {
			this.setState({fetchingData: false});
		})
	}

	render() {
		let poke = null;
		if (this.state.pokemon && !this.state.fetchingData) {
			poke = (
				<View>
					{}
					<Text style={{fontSize: 24}}>{this.state.pokemon.name}</Text>
					<Image source={{uri: this.state.pokemon.sprites.front_default}} style={{width: 50, height: 50, resizeMode : 'stretch' }} />
				</View>
			);
		} else if (this.state.fetchingData) {
			poke = (
				<ActivityIndicator size="large" color={colors.accent} />
			);
		}
		return (
			<View style={styles.container}>
				{poke}
			</View>
		);
	}
}
