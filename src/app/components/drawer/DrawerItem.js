import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



export class DrawerItem extends React.Component {
	constructor(props) {
		super(props);
		
	}

	render() {
		const style = {
			flex: 1,
			flexDirection: 'row',
			paddingTop: 5,
			paddingBottom: 5
		};
		if (this.props.navigation.isFocused(this.props.title)) {
			style.backgroundColor = '#123abc';
		}
		return (
			<TouchableHighlight onPress={() => this.props.navigation.navigate(this.props.screen)}>
				<View 
					style={style}>
					<View style={{flex: 1, alignSelf: 'center', marginLeft: 15}}>
						{/* <MaterialCommunityIcons name={this.props.icon} size={30} /> */}
					</View>
					<View style={{flex: 6, alignSelf: 'center', marginLeft: 10}}>
						<Text style={{fontSize: 20}}>{this.props.title}</Text>
					</View>
				</View>
			</TouchableHighlight>
		);
	}
};
